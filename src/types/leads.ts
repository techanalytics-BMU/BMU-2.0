// ---------- Leads (Supabase – supabase/migrations/0002_leads.sql and 0003_lead_activity.sql) ----------

export type LeadSource = 'contact_page' | 'popup';
export type LeadStatus = 'new' | 'follow_up' | 'converted' | 'rejected';

export type Lead = {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  phone: string; // '+91 98765 43210'
  email: string;
  business: string | null;
  message: string | null;
  source: LeadSource;
  page_path: string | null;
  landing_page: string | null;
  referrer: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_term: string | null;
  utm_content: string | null;
  status: LeadStatus;
  follow_up_on: string | null; // 'YYYY-MM-DD'
  archived_at: string | null;
};

// What saving a form sends back to it: saved, a field to fix, or it couldn't be saved
// (no fieldErrors – the form shows its "Something went wrong" line)
export type SubmitLeadResult = { ok: true } | { ok: false; fieldErrors?: Record<string, string> };

// ---------- Dashboard ----------

/** A lead in the dashboard list, with what the signed-in person needs to know about it */
export type LeadRow = Lead & {
  isNew: boolean; // they haven't opened it yet
  isRepeat: boolean; // the same phone or email sent a lead before
};

export type LeadNote = {
  id: string;
  body: string;
  created_at: string;
  author: string; // name, or email if they have no name
};

export type LeadEvent = {
  id: string;
  kind: 'status' | 'follow_up' | 'archived' | 'restored';
  from_status: LeadStatus | null;
  to_status: LeadStatus | null;
  follow_up_on: string | null;
  created_at: string;
  actor: string;
};

export type LeadDetails = {
  lead: Lead;
  notes: LeadNote[];
  events: LeadEvent[];
};

// The dashboard's filters – kept in the web address (?range=7d&status=new…)
export type LeadRange = 'all' | 'today' | '3d' | '7d' | '15d' | '30d' | 'custom';

export type LeadFilters = {
  range: LeadRange;
  from: string | null; // 'YYYY-MM-DD' (India time) – custom range only
  to: string | null;
  status: LeadStatus | null;
  source: LeadSource | null;
  q: string; // search: name, phone or email
  page: number; // from 1
  view: 'active' | 'archived'; // archived: admins only
};

export type LeadStats = Record<LeadStatus, number> & { total: number };

/** One bar of the "Leads per day" chart */
export type LeadDay = { date: string; count: number }; // 'YYYY-MM-DD'

/** A new lead in the bell's list */
export type UnseenLead = Pick<Lead, 'id' | 'name' | 'source' | 'created_at'>;

/** Result of a dashboard action */
export type ActionResult = { ok: true } | { ok: false; error: string };
