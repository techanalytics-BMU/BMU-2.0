import type { Metadata } from 'next';
import { canWriteBlog, getProfile } from '@/lib/auth/session';
import { createClient } from '@/lib/supabase/server';
import { DashboardBlogs } from '@/sections/dashboard';

export const metadata: Metadata = { title: 'Blogs' };

// The blog in the dashboard (/dashboard/blogs): SEO writers write here; admins and managers view.
// Signed-in, so the database shows drafts and scheduled posts too.
export default async function BlogsPage() {
  const profile = (await getProfile())!;
  const supabase = await createClient();
  const { data } = await supabase
    .from('blog_posts')
    .select('id, slug, title, status, published_at, updated_at, author_name')
    .order('updated_at', { ascending: false });

  return <DashboardBlogs posts={data ?? []} canWrite={canWriteBlog(profile.role)} />;
}
