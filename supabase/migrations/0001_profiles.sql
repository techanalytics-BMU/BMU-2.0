-- 0001 · Profiles and roles
-- One profile per account (created automatically on sign-up), holding the person's role:
--   admin   – full access; can add admins and managers and change anyone's role
--   manager – staff access; can add managers (turn a client into a manager), nothing else
--   client  – everyone who signs up on /signup; no access to the staff dashboard
-- Nobody can change their own role. Run this whole file once in Supabase → SQL Editor.

-- ---------- Role type ----------
create type public.app_role as enum ('admin', 'manager', 'client');

-- ---------- Profiles ----------
create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text not null,
  full_name text,
  phone text,
  role public.app_role not null default 'client',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.profiles is 'One row per account: name, phone and role (admin / manager / client).';

-- Keep updated_at current
create function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_set_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();

-- Every new account gets a profile – always as a client, whatever the sign-up form sent
create function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, email, full_name, phone)
  values (
    new.id,
    new.email,
    nullif(new.raw_user_meta_data ->> 'full_name', ''),
    nullif(new.raw_user_meta_data ->> 'phone', '')
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Accounts created before this file was run get their profile now
insert into public.profiles (id, email, full_name, phone)
select
  id,
  email,
  nullif(raw_user_meta_data ->> 'full_name', ''),
  nullif(raw_user_meta_data ->> 'phone', '')
from auth.users
on conflict (id) do nothing;

-- ---------- Helpers ----------
-- The signed-in person's role (null when signed out). Security definer so policies can call it
-- without looping back through the profiles policies.
create function public.my_role()
returns public.app_role
language sql
stable
security definer
set search_path = ''
as $$
  select role from public.profiles where id = (select auth.uid());
$$;

create function public.is_staff()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select coalesce(public.my_role() in ('admin', 'manager'), false);
$$;

-- ---------- Row level security ----------
alter table public.profiles enable row level security;

-- Everyone sees their own profile; staff see everyone's
create policy "Read own profile, staff read all"
  on public.profiles for select
  to authenticated
  using (id = (select auth.uid()) or (select public.is_staff()));

-- People may edit their own name and phone – the role column is not editable (see grants below)
create policy "Update own profile"
  on public.profiles for update
  to authenticated
  using (id = (select auth.uid()))
  with check (id = (select auth.uid()));

-- No insert/delete policies: profiles are created by the trigger and removed with the account
revoke all on public.profiles from anon;
revoke insert, update, delete on public.profiles from authenticated;
grant select on public.profiles to authenticated;
grant update (full_name, phone) on public.profiles to authenticated;

-- ---------- Changing roles ----------
-- The only way to change a role (used by the dashboard's Users page later):
--   admin   → may set any role on anyone except themselves
--   manager → may only turn a client into a manager
create function public.set_user_role(target_id uuid, new_role public.app_role)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  caller_role public.app_role := public.my_role();
  target_role public.app_role;
begin
  if (select auth.uid()) is null then
    raise exception 'Not signed in';
  end if;

  if target_id = (select auth.uid()) then
    raise exception 'You cannot change your own role';
  end if;

  select role into target_role from public.profiles where id = target_id;
  if target_role is null then
    raise exception 'No such account';
  end if;

  if caller_role = 'admin' then
    null; -- allowed
  elsif caller_role = 'manager' and new_role = 'manager' and target_role = 'client' then
    null; -- managers may add managers
  else
    raise exception 'You are not allowed to make this change';
  end if;

  update public.profiles set role = new_role where id = target_id;
end;
$$;

revoke all on function public.set_user_role(uuid, public.app_role) from public, anon;
grant execute on function public.set_user_role(uuid, public.app_role) to authenticated;
revoke all on function public.handle_new_user() from public, anon, authenticated;
