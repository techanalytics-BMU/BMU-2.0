import 'server-only';
import type { PostgrestFilterBuilder } from '@supabase/postgrest-js';
import { addDays, PAGE_SIZE, rangeDates, startOfDayIST, STATUSES, todayIST } from '@/lib/leads/filters';
import { createClient } from '@/lib/supabase/server';
import type {
  Lead,
  LeadDay,
  LeadFilters,
  LeadRow,
  LeadStats,
  UnseenLead,
} from '@/types/leads';

// Reading leads for the dashboard. Runs as the signed-in person, so the database's rules apply
// (staff only; managers never see archived leads).

// Any query on the leads table, whatever columns it selects (the builder's own types depend on
// the select, which would tie applyFilters to a single one)
type LeadQuery = PostgrestFilterBuilder<any, any, any, any, any, any, any, any>;

/** The filters, applied to a query on public.leads (`withStatus: false` – the summary cards) */
export function applyFilters<Q extends LeadQuery>(query: Q, filters: LeadFilters, withStatus = true): Q {
  let q = filters.view === 'archived' ? query.not('archived_at', 'is', null) : query.is('archived_at', null);

  const dates = rangeDates(filters);
  if (dates) {
    q = q.gte('created_at', startOfDayIST(dates.from)).lt('created_at', startOfDayIST(addDays(dates.to, 1)));
  }
  if (withStatus && filters.status) q = q.eq('status', filters.status);
  if (filters.source) q = q.eq('source', filters.source);

  if (filters.q) {
    // Characters that would break the search syntax are dropped
    const text = filters.q.replace(/["%*,()\\]/g, ' ').trim();
    const digits = text.replace(/\D/g, '');
    const parts = [`name.ilike."*${text}*"`, `email.ilike."*${text}*"`];
    if (digits.length >= 3) parts.push(`phone_digits.like."*${digits}*"`);
    if (text) q = q.or(parts.join(','));
  }
  return q as Q;
}

/** One page of leads, newest first, with the NEW and REPEAT tags worked out */
export async function getLeadsPage(filters: LeadFilters) {
  const supabase = await createClient();
  const start = (filters.page - 1) * PAGE_SIZE;

  const { data, count, error } = await applyFilters(
    supabase.from('leads').select('*', { count: 'exact' }),
    filters
  )
    .order('created_at', { ascending: false })
    .range(start, start + PAGE_SIZE - 1);

  if (error) throw new Error(`Could not load leads: ${error.message}`);
  const leads = (data ?? []) as Lead[];
  if (!leads.length) return { rows: [] as LeadRow[], total: count ?? 0 };

  const ids = leads.map((lead) => lead.id);
  const phones = [...new Set(leads.map((lead) => lead.phone))];
  const emails = [...new Set(leads.map((lead) => lead.email))];

  // What this person has opened, and earlier leads from the same phone or email
  const [views, samePhone, sameEmail] = await Promise.all([
    supabase.from('lead_views').select('lead_id').in('lead_id', ids),
    supabase.from('leads').select('id, phone, email, created_at').in('phone', phones),
    supabase.from('leads').select('id, phone, email, created_at').in('email', emails),
  ]);
  const seen = new Set((views.data ?? []).map((view) => view.lead_id as string));
  const others = [...(samePhone.data ?? []), ...(sameEmail.data ?? [])] as Pick<
    Lead,
    'id' | 'phone' | 'email' | 'created_at'
  >[];

  const rows: LeadRow[] = leads.map((lead) => ({
    ...lead,
    isNew: !seen.has(lead.id),
    isRepeat: others.some(
      (other) =>
        other.id !== lead.id &&
        other.created_at < lead.created_at &&
        (other.phone === lead.phone || other.email === lead.email)
    ),
  }));
  return { rows, total: count ?? 0 };
}

/** Totals for the summary cards – every status, for the chosen dates/source/search */
export async function getLeadStats(filters: LeadFilters): Promise<LeadStats> {
  const supabase = await createClient();
  const counts = await Promise.all(
    STATUSES.map((status) =>
      applyFilters(supabase.from('leads').select('id', { count: 'exact', head: true }), filters, false)
        .eq('status', status)
        .then(({ count }) => count ?? 0)
    )
  );
  const stats = Object.fromEntries(STATUSES.map((status, i) => [status, counts[i]])) as LeadStats;
  stats.total = counts.reduce((sum, count) => sum + count, 0);
  return stats;
}

/** Leads per day for the chart – the chosen dates, or the last 30 days for "All" */
export async function getLeadsPerDay(filters: LeadFilters): Promise<LeadDay[]> {
  const supabase = await createClient();
  const today = todayIST();
  const dates = rangeDates(filters) ?? { from: addDays(today, -29), to: today };
  const chartFilters: LeadFilters = { ...filters, range: 'custom', from: dates.from, to: dates.to };

  const { data } = await applyFilters(
    supabase.from('leads').select('created_at'),
    chartFilters,
    false
  ).limit(10000);

  const counts = new Map<string, number>();
  for (const row of data ?? []) {
    const day = new Date(row.created_at as string).toLocaleDateString('en-CA', {
      timeZone: 'Asia/Kolkata',
    });
    counts.set(day, (counts.get(day) ?? 0) + 1);
  }

  const days: LeadDay[] = [];
  for (let day = dates.from; day <= dates.to; day = addDays(day, 1)) {
    days.push({ date: day, count: counts.get(day) ?? 0 });
  }
  return days;
}

/** The bell: how many leads this person hasn't opened, and the newest few */
export async function getUnseenLeads(): Promise<{ count: number; leads: UnseenLead[] }> {
  const supabase = await createClient();
  const [count, list] = await Promise.all([
    supabase.rpc('my_unseen_lead_count'),
    supabase.rpc('my_unseen_leads', { max_rows: 8 }),
  ]);
  return {
    count: (count.data as number | null) ?? 0,
    leads: ((list.data ?? []) as Lead[]).map(({ id, name, source, created_at }) => ({
      id,
      name,
      source,
      created_at,
    })),
  };
}
