'use server';

import { createAdminClient } from '@/lib/supabase/server';
import { EMAIL, isPhone } from '@/lib/validation';
import { CAMPAIGN_FIELDS, HONEYPOT_FIELD } from '@/lib/leads/fields';
import type { LeadSource, SubmitLeadResult } from '@/types/leads';

// Saves an enquiry from the contact page form or the lead popup to Supabase (table public.leads).
// The browser has already checked the fields; they're checked again here, as anyone can call this.

const HOURLY_LIMIT = 3; // per phone number and per email

const text = (data: FormData, name: string, max = 200) =>
  String(data.get(name) ?? '')
    .trim()
    .slice(0, max);

/** '+91 98765 43210', however they typed it */
function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(-10);
  return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`;
}

export async function submitLead(source: LeadSource, data: FormData): Promise<SubmitLeadResult> {
  // Bots fill in the hidden field – pretend it worked and save nothing
  if (text(data, HONEYPOT_FIELD)) return { ok: true };

  const name = text(data, 'name', 120);
  const phone = text(data, 'phone', 30);
  const email = text(data, 'email', 200).toLowerCase();
  const business = text(data, 'business', 200);
  const message = text(data, 'message', 2000);

  const fieldErrors: Record<string, string> = {};
  if (!name) fieldErrors.name = 'Please enter your name';
  if (!isPhone(phone)) fieldErrors.phone = 'Please enter a 10-digit number';
  if (!EMAIL.test(email)) fieldErrors.email = 'Please enter a valid email';
  if (source === 'contact_page' && !business) {
    fieldErrors.business = 'Please enter your business name or website';
  }
  if (Object.keys(fieldErrors).length) return { ok: false, fieldErrors };

  const supabase = createAdminClient();
  const formattedPhone = formatPhone(phone);

  // More than 3 from the same phone or email in an hour: thank them, but don't save it again
  const hourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const [byPhone, byEmail] = await Promise.all([
    supabase
      .from('leads')
      .select('id', { count: 'exact', head: true })
      .eq('phone', formattedPhone)
      .gte('created_at', hourAgo),
    supabase
      .from('leads')
      .select('id', { count: 'exact', head: true })
      .eq('email', email)
      .gte('created_at', hourAgo),
  ]);
  if ((byPhone.count ?? 0) >= HOURLY_LIMIT || (byEmail.count ?? 0) >= HOURLY_LIMIT) {
    return { ok: true };
  }

  const campaign = Object.fromEntries(
    CAMPAIGN_FIELDS.map((field) => [field, text(data, field, field === 'referrer' ? 500 : 200) || null])
  );

  const { error } = await supabase.from('leads').insert({
    name,
    phone: formattedPhone,
    email,
    business: business || null,
    message: message || null,
    source,
    page_path: text(data, 'page_path', 300) || null,
    ...campaign,
  });

  if (error) {
    console.error('[leads] could not save a lead:', error.message);
    return { ok: false }; // the form shows its "Something went wrong" line
  }
  return { ok: true };
}
