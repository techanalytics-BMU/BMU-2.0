-- 0005 · Blog
-- Blog posts written in the dashboard by the SEO writer and shown on /blog. Who can do what:
--   seo (SEO writer)  – create, edit, publish and delete posts; add other SEO writers
--   admin, manager    – see every post (drafts too) in the dashboard, but not change them
--   everyone          – reads published posts on the website
-- Needs 0001_profiles.sql and 0004_seo_role.sql first. Run this whole file in Supabase → SQL Editor.

-- ---------- Helpers ----------
create function public.is_blog_writer()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select coalesce(public.my_role() = 'seo', false);
$$;

create function public.can_view_blog_dashboard()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select coalesce(public.my_role() in ('admin', 'manager', 'seo'), false);
$$;

-- ---------- Who may give which role (replaces the version in 0001) ----------
--   admin → any role on anyone except themselves
--   manager → may turn a client into a manager
--   seo → may turn a client into an SEO writer
create or replace function public.set_user_role(target_id uuid, new_role public.app_role)
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
  elsif caller_role = 'seo' and new_role = 'seo' and target_role = 'client' then
    null; -- SEO writers may add SEO writers
  else
    raise exception 'You are not allowed to make this change';
  end if;

  update public.profiles set role = new_role where id = target_id;
end;
$$;

-- ---------- Posts ----------
create type public.blog_status as enum ('draft', 'published');

create table public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'), -- /blog/<slug>
  status public.blog_status not null default 'draft',
  published_at timestamptz, -- in the future = scheduled; shows on the site from then on

  title text not null,
  excerpt text not null default '', -- 1–2 sentences for the listing and under the title
  category text, -- one of the six service groups (filter chip, card colour and icon)
  tags text[] not null default '{}',
  featured boolean not null default false, -- the newest featured post is shown large on /blog
  author_name text not null default 'BMU Team',

  cover_image_url text,
  cover_image_alt text,

  -- SEO
  meta_title text, -- under 60 characters; the title is used when empty
  meta_description text, -- under 160 characters; the excerpt is used when empty
  main_keyword text,

  -- The body, block by block (intro, h2, h3, paragraph, list, table, tip, warning, image, quote,
  -- services, cta – see src/types/blog.ts), and the questions shown as FAQs (and to Google)
  content jsonb not null default '[]' check (jsonb_typeof(content) = 'array'),
  faqs jsonb not null default '[]' check (jsonb_typeof(faqs) = 'array'),
  read_minutes integer not null default 1,

  created_by uuid references public.profiles (id) on delete set null default auth.uid(),
  updated_by uuid references public.profiles (id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.blog_posts is 'Blog posts for /blog – written in the dashboard by the SEO writer.';

create index blog_posts_published_idx on public.blog_posts (status, published_at desc);

-- set_updated_at() comes from 0001_profiles.sql; also note who made the change
create function public.blog_posts_touch()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_by := (select auth.uid());
  return new;
end;
$$;

create trigger blog_posts_set_updated_at
  before update on public.blog_posts
  for each row execute function public.set_updated_at();

create trigger blog_posts_touch
  before update on public.blog_posts
  for each row execute function public.blog_posts_touch();

-- ---------- Row level security ----------
alter table public.blog_posts enable row level security;

-- The website: published posts whose time has come
create policy "Anyone reads published posts"
  on public.blog_posts for select
  to anon, authenticated
  using (status = 'published' and published_at <= now());

-- The dashboard: admins, managers and SEO writers see everything, drafts too
create policy "Dashboard reads all posts"
  on public.blog_posts for select
  to authenticated
  using ((select public.can_view_blog_dashboard()));

-- Only SEO writers create, change and delete
create policy "Writers add posts"
  on public.blog_posts for insert
  to authenticated
  with check ((select public.is_blog_writer()));

create policy "Writers change posts"
  on public.blog_posts for update
  to authenticated
  using ((select public.is_blog_writer()))
  with check ((select public.is_blog_writer()));

create policy "Writers delete posts"
  on public.blog_posts for delete
  to authenticated
  using ((select public.is_blog_writer()));

revoke all on public.blog_posts from anon;
grant select on public.blog_posts to anon;
grant select, insert, update, delete on public.blog_posts to authenticated;

-- ---------- Images (Supabase Storage) ----------
-- A public bucket: anyone can view the images on the website; only SEO writers upload or remove.
-- 5 MB per file, pictures only.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'blog-images',
  'blog-images',
  true,
  5242880,
  array['image/webp', 'image/jpeg', 'image/png', 'image/avif', 'image/gif']
)
on conflict (id) do nothing;

create policy "Writers upload blog images"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'blog-images' and (select public.is_blog_writer()));

create policy "Writers change blog images"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'blog-images' and (select public.is_blog_writer()));

create policy "Writers remove blog images"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'blog-images' and (select public.is_blog_writer()));
