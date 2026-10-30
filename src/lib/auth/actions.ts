'use server';

import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { homeFor } from '@/lib/auth/session';
import { createClient } from '@/lib/supabase/server';
import { EMAIL, isPhone } from '@/lib/validation';
import type { AppRole, AuthFormState } from '@/types/auth';

// Login, signup and logout – run on the server, called from the forms in src/sections/auth.

const text = (data: FormData, name: string) => String(data.get(name) ?? '').trim();

/** Only same-site paths like /dashboard – never another website */
const safeNext = (next: string) => (next.startsWith('/') && !next.startsWith('//') ? next : '');

export async function login(_: AuthFormState, data: FormData): Promise<AuthFormState> {
  const email = text(data, 'email').toLowerCase();
  const password = String(data.get('password') ?? '');
  const values = { email };

  const fieldErrors: Record<string, string> = {};
  if (!EMAIL.test(email)) fieldErrors.email = 'Please enter a valid email';
  if (!password) fieldErrors.password = 'Please enter your password';
  if (Object.keys(fieldErrors).length) return { fieldErrors, values };

  const supabase = await createClient();
  const { data: auth, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error || !auth.user) {
    const unconfirmed = error?.code === 'email_not_confirmed';
    return {
      error: unconfirmed
        ? 'Please confirm your email first – check your inbox for the link.'
        : 'That email and password don’t match. Please try again.',
      values,
    };
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', auth.user.id)
    .single();
  redirect(safeNext(text(data, 'next')) || homeFor((profile?.role as AppRole) ?? 'client'));
}

export async function signup(_: AuthFormState, data: FormData): Promise<AuthFormState> {
  const fullName = text(data, 'fullName');
  const phone = text(data, 'phone');
  const email = text(data, 'email').toLowerCase();
  const password = String(data.get('password') ?? '');
  const confirmPassword = String(data.get('confirmPassword') ?? '');
  const values = { fullName, phone, email };

  const fieldErrors: Record<string, string> = {};
  if (!fullName) fieldErrors.fullName = 'Please enter your name';
  if (!isPhone(phone)) fieldErrors.phone = 'Please enter a 10-digit number';
  if (!EMAIL.test(email)) fieldErrors.email = 'Please enter a valid email';
  if (password.length < 8) fieldErrors.password = 'Use at least 8 characters';
  if (password !== confirmPassword) fieldErrors.confirmPassword = 'The passwords don’t match';
  if (Object.keys(fieldErrors).length) return { fieldErrors, values };

  // The confirmation email links back here (src/app/auth/callback/route.ts)
  const origin = (await headers()).get('origin') ?? process.env.NEXT_PUBLIC_SITE_URL ?? '';

  const supabase = await createClient();
  // The role is never sent – the database makes every new account a client
  const { data: auth, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName, phone },
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    const taken = error.code === 'user_already_exists' || error.code === 'email_exists';
    const weak = error.code === 'weak_password';
    return {
      error: taken
        ? 'An account with this email already exists. Try logging in.'
        : weak
          ? 'Please choose a stronger password.'
          : 'Something went wrong. Please try again in a moment.',
      values,
    };
  }

  // Email confirmation turned off in Supabase → they're logged in straight away
  if (auth.session) redirect('/account');
  return { checkEmail: email };
}

/** Change password (dashboard user menu) – for the signed-in person only */
export async function changePassword(_: AuthFormState, data: FormData): Promise<AuthFormState> {
  const password = String(data.get('password') ?? '');
  const confirmPassword = String(data.get('confirmPassword') ?? '');

  const fieldErrors: Record<string, string> = {};
  if (password.length < 8) fieldErrors.password = 'Use at least 8 characters';
  if (password !== confirmPassword) fieldErrors.confirmPassword = 'The passwords don’t match';
  if (Object.keys(fieldErrors).length) return { fieldErrors };

  const supabase = await createClient();
  const { error } = await supabase.auth.updateUser({ password });
  if (error) {
    return {
      error:
        error.code === 'same_password'
          ? 'That’s your current password – please choose a new one.'
          : error.code === 'weak_password'
            ? 'Please choose a stronger password.'
            : 'Your password couldn’t be changed. Please log out, log in again and retry.',
    };
  }
  return { done: true };
}

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect('/login');
}
