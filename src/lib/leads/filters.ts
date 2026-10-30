import type { LeadFilters, LeadRange, LeadSource, LeadStatus } from '@/types/leads';

// The dashboard's filters ⇄ the web address, and India-time dates. Used on the server (to query)
// and in the browser (to change filters) – plain functions only.

export const PAGE_SIZE = 25;
export const TIME_ZONE = 'Asia/Kolkata';

export const STATUSES: LeadStatus[] = ['new', 'follow_up', 'converted', 'rejected'];
export const SOURCES: LeadSource[] = ['contact_page', 'popup'];
export const RANGES: LeadRange[] = ['all', 'today', '3d', '7d', '15d', '30d', 'custom'];

/** Days covered by each preset, counting today */
const RANGE_DAYS: Partial<Record<LeadRange, number>> = { today: 1, '3d': 3, '7d': 7, '15d': 15, '30d': 30 };

const DATE = /^\d{4}-\d{2}-\d{2}$/;

// ---------- Dates (always India time, as 'YYYY-MM-DD') ----------

/** Today's date in India */
export function todayIST(now = new Date()) {
  return now.toLocaleDateString('en-CA', { timeZone: TIME_ZONE }); // en-CA writes YYYY-MM-DD
}

/** The India date of a moment ('2026-10-30T20:00:00Z' → '2026-10-31') */
export function dateIST(iso: string) {
  return todayIST(new Date(iso));
}

export function addDays(date: string, days: number) {
  const d = new Date(`${date}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

/** Midnight at the start of that day in India, as a moment the database understands */
export function startOfDayIST(date: string) {
  return `${date}T00:00:00+05:30`;
}

/** The first and last day a set of filters covers (null for "all time") */
export function rangeDates(filters: LeadFilters): { from: string; to: string } | null {
  const today = todayIST();
  if (filters.range === 'custom' && filters.from && filters.to) {
    return filters.from <= filters.to
      ? { from: filters.from, to: filters.to }
      : { from: filters.to, to: filters.from };
  }
  const days = RANGE_DAYS[filters.range];
  return days ? { from: addDays(today, -(days - 1)), to: today } : null;
}

// ---------- Web address ⇄ filters ----------

type Params = Record<string, string | string[] | undefined>;
const one = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value) ?? '';

export function parseFilters(params: Params): LeadFilters {
  const range = one(params.range) as LeadRange;
  const status = one(params.status) as LeadStatus;
  const source = one(params.source) as LeadSource;
  const from = one(params.from);
  const to = one(params.to);
  const page = Number.parseInt(one(params.page), 10);
  const custom = range === 'custom' && DATE.test(from) && DATE.test(to);

  return {
    range: custom ? 'custom' : RANGES.includes(range) && range !== 'custom' ? range : 'all',
    from: custom ? from : null,
    to: custom ? to : null,
    status: STATUSES.includes(status) ? status : null,
    source: SOURCES.includes(source) ? source : null,
    q: one(params.q).trim().slice(0, 100),
    page: Number.isFinite(page) && page > 1 ? page : 1,
    view: one(params.view) === 'archived' ? 'archived' : 'active',
  };
}

/** The query string for a set of filters (defaults left out, so addresses stay short) */
export function filtersToQuery(filters: LeadFilters) {
  const params = new URLSearchParams();
  if (filters.range !== 'all') params.set('range', filters.range);
  if (filters.range === 'custom' && filters.from && filters.to) {
    params.set('from', filters.from);
    params.set('to', filters.to);
  }
  if (filters.status) params.set('status', filters.status);
  if (filters.source) params.set('source', filters.source);
  if (filters.q) params.set('q', filters.q);
  if (filters.page > 1) params.set('page', String(filters.page));
  if (filters.view === 'archived') params.set('view', 'archived');
  const query = params.toString();
  return query ? `?${query}` : '';
}
