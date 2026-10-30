-- 0002 · Leads
-- Every enquiry from the website: the contact page form and the lead popup. Saved by the website's
-- server (src/lib/leads/actions.ts) with the secret key, so nobody can write here from the internet;
-- only signed-in admins and managers can read and work on them.
-- Needs 0001_profiles.sql first. Run this whole file once in Supabase → SQL Editor.

-- ---------- Types ----------
create type public.lead_status as enum ('new', 'follow_up', 'converted', 'rejected');
create type public.lead_source as enum ('contact_page', 'popup');

-- ---------- Leads ----------
create table public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  -- What they told us
  name text not null,
  phone text not null, -- always '+91 98765 43210'
  email text not null, -- lower case
  business text, -- contact page only
  message text, -- contact page only

  -- Where it came from
  source public.lead_source not null,
  page_path text, -- the page the form was sent from
  landing_page text, -- the first page of their visit
  referrer text, -- the website that sent them (Google, Instagram…), empty for direct visits
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,

  -- Where it stands
  status public.lead_status not null default 'new'
);

comment on table public.leads is 'Enquiries from the website forms. Status: new → follow_up → converted / rejected.';

create index leads_created_at_idx on public.leads (created_at desc);
create index leads_phone_idx on public.leads (phone);
create index leads_email_idx on public.leads (email);
create index leads_status_idx on public.leads (status);

-- set_updated_at() comes from 0001_profiles.sql
create trigger leads_set_updated_at
  before update on public.leads
  for each row execute function public.set_updated_at();

-- ---------- Row level security ----------
alter table public.leads enable row level security;

-- Admins and managers see and work on every lead
create policy "Staff read leads"
  on public.leads for select
  to authenticated
  using ((select public.is_staff()));

create policy "Staff update leads"
  on public.leads for update
  to authenticated
  using ((select public.is_staff()))
  with check ((select public.is_staff()));

-- Only admins delete
create policy "Admins delete leads"
  on public.leads for delete
  to authenticated
  using ((select public.my_role()) = 'admin');

-- No insert policy: only the website's server adds leads
revoke all on public.leads from anon;
revoke insert on public.leads from authenticated;
grant select, update, delete on public.leads to authenticated;
