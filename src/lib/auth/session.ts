import 'server-only';
import { cache } from 'react';
import { createClient } from '@/lib/supabase/server';
import type { AppRole, Profile } from '@/types/auth';

// Who's logged in – everything on the server that needs the account goes through here.

/** The signed-in account's id (null when logged out). Cached for one request. */
export const getUserId = cache(async (): Promise<string | null> => {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  return data?.claims?.sub ?? null;
});

/** The signed-in person's profile (null when logged out, or if the account has no profile row) */
export const getProfile = cache(async (): Promise<Profile | null> => {
  const userId = await getUserId();
  if (!userId) return null;

  const supabase = await createClient();
  const { data: profile } = await supabase
    .from('profiles')
    .select('id, email, full_name, phone, role')
    .eq('id', userId)
    .single();
  return (profile as Profile | null) ?? null;
});

/** Admins and managers – the people who can open the staff dashboard */
export function isStaff(role: AppRole) {
  return role === 'admin' || role === 'manager';
}

/** Everyone with a section in the dashboard: staff (leads and blog) and SEO writers (blog only) */
export function canOpenDashboard(role: AppRole) {
  return isStaff(role) || role === 'seo';
}

/** SEO writers create, edit, publish and delete blog posts; admins and managers only view them */
export function canWriteBlog(role: AppRole) {
  return role === 'seo';
}

/** Where someone goes after logging in */
export function homeFor(role: AppRole) {
  if (isStaff(role)) return '/dashboard';
  return role === 'seo' ? '/dashboard/blogs' : '/account';
}

/** 'Mukesh' – their name if they gave one, otherwise the start of their email, capitalised */
export function displayName(profile: Profile) {
  const name = profile.full_name?.trim().split(/\s+/)[0] || profile.email.split('@')[0];
  return name.charAt(0).toUpperCase() + name.slice(1);
}
