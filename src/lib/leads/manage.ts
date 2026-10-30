'use server';

import { revalidatePath } from 'next/cache';
import { getProfile, isStaff } from '@/lib/auth/session';
import { STATUSES } from '@/lib/leads/filters';
import { createClient } from '@/lib/supabase/server';
import type { ActionResult, Lead, LeadDetails, LeadEvent, LeadNote, LeadStatus } from '@/types/leads';

// What staff do to leads in the dashboard. Every action checks who's asking; the database checks
// again (row level security), so these are never the only guard.

const DATE = /^\d{4}-\d{2}-\d{2}$/;
const DENIED: ActionResult = { ok: false, error: 'You don’t have permission to do that.' };
const FAILED: ActionResult = { ok: false, error: 'Something went wrong. Please try again.' };

async function staff() {
  const profile = await getProfile();
  return profile && isStaff(profile.role) ? profile : null;
}

/** Re-render the dashboard (the list, the cards and the bell) */
const refresh = () => revalidatePath('/dashboard', 'layout');

type Person = { full_name: string | null; email: string } | null;
const nameOf = (person: Person) => person?.full_name || person?.email || 'Someone';

/** Everything about one lead for the side panel – and marks it as seen by this person */
export async function getLeadDetails(id: string): Promise<LeadDetails | null> {
  const profile = await staff();
  if (!profile) return null;
  const supabase = await createClient();

  const [lead, notes, events] = await Promise.all([
    supabase.from('leads').select('*').eq('id', id).single(),
    supabase
      .from('lead_notes')
      .select('id, body, created_at, author:profiles(full_name, email)')
      .eq('lead_id', id)
      .order('created_at', { ascending: true }),
    supabase
      .from('lead_events')
      .select('id, kind, from_status, to_status, follow_up_on, created_at, actor:profiles(full_name, email)')
      .eq('lead_id', id)
      .order('created_at', { ascending: false }),
  ]);
  if (!lead.data) return null;

  await supabase
    .from('lead_views')
    .upsert({ user_id: profile.id, lead_id: id }, { onConflict: 'user_id,lead_id', ignoreDuplicates: true });

  return {
    lead: lead.data as Lead,
    notes: (notes.data ?? []).map(
      (note): LeadNote => ({
        id: note.id,
        body: note.body,
        created_at: note.created_at,
        author: nameOf(note.author as unknown as Person),
      })
    ),
    events: (events.data ?? []).map(
      (event): LeadEvent => ({
        id: event.id,
        kind: event.kind,
        from_status: event.from_status,
        to_status: event.to_status,
        follow_up_on: event.follow_up_on,
        created_at: event.created_at,
        actor: nameOf(event.actor as unknown as Person),
      })
    ),
  };
}

/** New status – and, for Follow-up, optionally the day to follow up */
export async function setLeadStatus(
  id: string,
  status: LeadStatus,
  followUpOn?: string | null
): Promise<ActionResult> {
  if (!(await staff())) return DENIED;
  if (!STATUSES.includes(status)) return FAILED;
  if (followUpOn && !DATE.test(followUpOn)) return { ok: false, error: 'Please pick a valid date.' };

  const changes: Partial<Lead> = { status };
  if (followUpOn !== undefined) changes.follow_up_on = followUpOn;

  const supabase = await createClient();
  const { error } = await supabase.from('leads').update(changes).eq('id', id);
  if (error) return FAILED;
  refresh();
  return { ok: true };
}

export async function setFollowUp(id: string, followUpOn: string | null): Promise<ActionResult> {
  if (!(await staff())) return DENIED;
  if (followUpOn && !DATE.test(followUpOn)) return { ok: false, error: 'Please pick a valid date.' };

  const supabase = await createClient();
  const { error } = await supabase.from('leads').update({ follow_up_on: followUpOn }).eq('id', id);
  if (error) return FAILED;
  refresh();
  return { ok: true };
}

export async function addLeadNote(id: string, body: string): Promise<ActionResult> {
  const profile = await staff();
  if (!profile) return DENIED;
  const text = body.trim();
  if (!text) return { ok: false, error: 'Please write a note first.' };
  if (text.length > 4000) return { ok: false, error: 'Notes can be up to 4,000 characters.' };

  const supabase = await createClient();
  const { error } = await supabase
    .from('lead_notes')
    .insert({ lead_id: id, author_id: profile.id, body: text });
  if (error) return FAILED;
  return { ok: true };
}

/** Admins only: hide a lead from the list (it can be restored) */
export async function archiveLead(id: string): Promise<ActionResult> {
  const profile = await staff();
  if (profile?.role !== 'admin') return DENIED;

  const supabase = await createClient();
  const { error } = await supabase
    .from('leads')
    .update({ archived_at: new Date().toISOString() })
    .eq('id', id);
  if (error) return FAILED;
  refresh();
  return { ok: true };
}

export async function restoreLead(id: string): Promise<ActionResult> {
  const profile = await staff();
  if (profile?.role !== 'admin') return DENIED;

  const supabase = await createClient();
  const { error } = await supabase.from('leads').update({ archived_at: null }).eq('id', id);
  if (error) return FAILED;
  refresh();
  return { ok: true };
}

/** The bell's "Mark all as seen" */
export async function markAllLeadsSeen(): Promise<ActionResult> {
  if (!(await staff())) return DENIED;
  const supabase = await createClient();
  const { error } = await supabase.rpc('mark_all_leads_seen');
  if (error) return FAILED;
  refresh();
  return { ok: true };
}

/** After the side panel has marked a lead as seen – update the NEW tags and the bell */
export async function refreshDashboard() {
  refresh();
}
