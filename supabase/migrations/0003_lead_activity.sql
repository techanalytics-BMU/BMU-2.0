-- 0003 · Lead activity: notes, history, follow-up dates, "seen" per person, archive, live updates
-- Needs 0001_profiles.sql and 0002_leads.sql first. Run this whole file once in Supabase → SQL Editor.

-- ---------- New columns on leads ----------
alter table public.leads
  add column follow_up_on date, -- the day to follow up (status Follow-up)
  add column archived_at timestamptz, -- hidden from the list; admins can see and restore it
  add column archived_by uuid references public.profiles (id) on delete set null,
  -- '919876543210' – lets a search for "98765 43" or "9876543" find the lead
  add column phone_digits text generated always as (regexp_replace(phone, '\D', '', 'g')) stored;

create index leads_archived_at_idx on public.leads (archived_at);
create index leads_follow_up_on_idx on public.leads (follow_up_on);

-- ---------- Who may change what ----------
-- Staff may only change the status, the follow-up date and (admins) the archive – never what the
-- visitor sent us.
revoke update on public.leads from authenticated;
grant update (status, follow_up_on, archived_at, archived_by) on public.leads to authenticated;

-- Managers don't see archived leads; admins see everything
drop policy "Staff read leads" on public.leads;
create policy "Staff read leads"
  on public.leads for select
  to authenticated
  using ((select public.is_staff()) and (archived_at is null or (select public.my_role()) = 'admin'));

-- Only admins archive or restore, and the archive records who did it
create function public.guard_lead_archive()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if new.archived_at is distinct from old.archived_at then
    if coalesce(public.my_role() <> 'admin', true) then
      raise exception 'Only admins can archive or restore leads';
    end if;
    new.archived_by := case when new.archived_at is null then null else (select auth.uid()) end;
  end if;
  return new;
end;
$$;

create trigger leads_guard_archive
  before update on public.leads
  for each row execute function public.guard_lead_archive();

-- ---------- Notes ----------
create table public.lead_notes (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references public.leads (id) on delete cascade,
  author_id uuid references public.profiles (id) on delete set null default auth.uid(),
  body text not null check (char_length(body) between 1 and 4000),
  created_at timestamptz not null default now()
);

create index lead_notes_lead_id_idx on public.lead_notes (lead_id, created_at);

alter table public.lead_notes enable row level security;

create policy "Staff read notes"
  on public.lead_notes for select
  to authenticated
  using ((select public.is_staff()));

create policy "Staff add notes as themselves"
  on public.lead_notes for insert
  to authenticated
  with check ((select public.is_staff()) and author_id = (select auth.uid()));

revoke all on public.lead_notes from anon;
grant select, insert on public.lead_notes to authenticated;

-- ---------- History (written by the database itself – can't be skipped or faked) ----------
create table public.lead_events (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references public.leads (id) on delete cascade,
  actor_id uuid references public.profiles (id) on delete set null,
  kind text not null check (kind in ('status', 'follow_up', 'archived', 'restored')),
  from_status public.lead_status,
  to_status public.lead_status,
  follow_up_on date,
  created_at timestamptz not null default now()
);

create index lead_events_lead_id_idx on public.lead_events (lead_id, created_at);

alter table public.lead_events enable row level security;

create policy "Staff read history"
  on public.lead_events for select
  to authenticated
  using ((select public.is_staff()));

revoke all on public.lead_events from anon, authenticated;
grant select on public.lead_events to authenticated;

create function public.log_lead_changes()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  actor uuid := (select auth.uid());
begin
  if new.status is distinct from old.status then
    insert into public.lead_events (lead_id, actor_id, kind, from_status, to_status)
    values (new.id, actor, 'status', old.status, new.status);
  end if;
  if new.follow_up_on is distinct from old.follow_up_on then
    insert into public.lead_events (lead_id, actor_id, kind, follow_up_on)
    values (new.id, actor, 'follow_up', new.follow_up_on);
  end if;
  if new.archived_at is distinct from old.archived_at then
    insert into public.lead_events (lead_id, actor_id, kind)
    values (new.id, actor, case when new.archived_at is null then 'restored' else 'archived' end);
  end if;
  return new;
end;
$$;

create trigger leads_log_changes
  after update on public.leads
  for each row execute function public.log_lead_changes();

revoke all on function public.log_lead_changes() from public, anon, authenticated;

-- ---------- "Seen" – per person (drives the NEW tag and the bell) ----------
create table public.lead_views (
  user_id uuid not null references public.profiles (id) on delete cascade default auth.uid(),
  lead_id uuid not null references public.leads (id) on delete cascade,
  viewed_at timestamptz not null default now(),
  primary key (user_id, lead_id)
);

alter table public.lead_views enable row level security;

create policy "Read own views"
  on public.lead_views for select
  to authenticated
  using (user_id = (select auth.uid()));

create policy "Staff record own views"
  on public.lead_views for insert
  to authenticated
  with check ((select public.is_staff()) and user_id = (select auth.uid()));

revoke all on public.lead_views from anon;
grant select, insert on public.lead_views to authenticated;

-- Leads the signed-in person hasn't opened yet, newest first (runs with their permissions)
create function public.my_unseen_leads(max_rows integer default 8)
returns setof public.leads
language sql
stable
set search_path = ''
as $$
  select l.*
  from public.leads l
  where l.archived_at is null
    and not exists (
      select 1 from public.lead_views v where v.lead_id = l.id and v.user_id = (select auth.uid())
    )
  order by l.created_at desc
  limit max_rows;
$$;

create function public.my_unseen_lead_count()
returns integer
language sql
stable
set search_path = ''
as $$
  select count(*)::integer
  from public.leads l
  where l.archived_at is null
    and not exists (
      select 1 from public.lead_views v where v.lead_id = l.id and v.user_id = (select auth.uid())
    );
$$;

-- "Mark all as seen" in the bell
create function public.mark_all_leads_seen()
returns void
language sql
set search_path = ''
as $$
  insert into public.lead_views (user_id, lead_id)
  select (select auth.uid()), l.id
  from public.leads l
  where l.archived_at is null
  on conflict do nothing;
$$;

revoke all on function public.my_unseen_leads(integer) from public, anon;
revoke all on function public.my_unseen_lead_count() from public, anon;
revoke all on function public.mark_all_leads_seen() from public, anon;
grant execute on function public.my_unseen_leads(integer) to authenticated;
grant execute on function public.my_unseen_lead_count() to authenticated;
grant execute on function public.mark_all_leads_seen() to authenticated;

-- ---------- Live updates ----------
-- New leads reach the open dashboard instantly (each person only receives leads they may read)
alter publication supabase_realtime add table public.leads;
