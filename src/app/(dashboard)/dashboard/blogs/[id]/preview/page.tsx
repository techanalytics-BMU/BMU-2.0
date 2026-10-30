import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { dashboardBlogs } from '@/data/dashboard/dashboardBlogs';
import { getPublishedPosts } from '@/lib/blog/queries';
import { createClient } from '@/lib/supabase/server';
import { BlogArticle } from '@/sections/blog';
import type { BlogPost } from '@/types/blog';
import styles from '@/sections/dashboard/DashboardBlogs/DashboardBlogs.module.css';

export const metadata: Metadata = { title: 'Preview', robots: { index: false } };

type Props = { params: Promise<{ id: string }> };

// Preview (/dashboard/blogs/<post id>/preview): the post exactly as the website will show it –
// drafts and scheduled posts too. Only people who can open the dashboard's blog see it.
export default async function BlogPreviewPage({ params }: Props) {
  const { id } = await params;
  const supabase = await createClient();
  const [{ data }, all] = await Promise.all([
    supabase.from('blog_posts').select('*').eq('id', id).maybeSingle(),
    getPublishedPosts(),
  ]);
  if (!data) notFound();
  const post = data as BlogPost;

  return (
    <div className={styles.preview}>
      <p className={styles.previewBar}>
        {dashboardBlogs.previewBar}{' '}
        <Link href={`/dashboard/blogs/${post.id}`}>{dashboardBlogs.backToEditor}</Link>
      </p>
      <BlogArticle post={post} all={all.filter((other) => other.slug !== post.slug)} />
    </div>
  );
}
