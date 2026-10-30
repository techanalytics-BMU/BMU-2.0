-- 0004 · The SEO writer role
-- Adds 'seo' to the account roles. It has to run on its own, before 0005_blog.sql – Postgres only
-- lets a new role name be used once this has been saved. Run this file first in Supabase → SQL Editor.

alter type public.app_role add value if not exists 'seo';
