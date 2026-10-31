import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { canWriteBlog, getProfile } from '@/lib/auth/session';
import { createClient } from '@/lib/supabase/server';
import { DashboardBlogs } from '@/sections/dashboard';

export const metadata: Metadata = { title: 'Blogs' };

// The blog in the dashboard (/dashboard/blogs): the SEO writer's alone – admins and managers are
// sent back to their dashboard. Signed-in, so the database shows drafts and scheduled posts too.
export default async function BlogsPage() {
  const profile = (await getProfile())!;
  if (!canWriteBlog(profile.role)) redirect('/dashboard');
  const supabase = await createClient();
  const { data } = await supabase
    .from('blog_posts')
    .select('id, slug, title, status, published_at, updated_at, author_name')
    .order('updated_at', { ascending: false });

  return <DashboardBlogs posts={data ?? []} canWrite={canWriteBlog(profile.role)} />;
}
