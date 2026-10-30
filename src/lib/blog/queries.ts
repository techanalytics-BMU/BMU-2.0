import 'server-only';
import { createPublicClient } from '@/lib/supabase/public';
import type { BlogPost, BlogPostSummary } from '@/types/blog';

// Reading published blog posts for the website. Only posts that are published and whose date has
// come are returned (the database checks this too). Pages refresh every few minutes – and at once
// when a post is published from the dashboard.

const SUMMARY =
  'slug, title, excerpt, category, featured, author_name, cover_image_url, read_minutes, published_at';

/** Every published post, newest first – for /blog, /work, related posts and the sitemap */
export async function getPublishedPosts(): Promise<BlogPostSummary[]> {
  const supabase = createPublicClient();
  if (!supabase) return []; // no Supabase keys – the blog shows "no posts yet"

  const { data, error } = await supabase
    .from('blog_posts')
    .select(SUMMARY)
    .eq('status', 'published')
    .lte('published_at', new Date().toISOString())
    .order('published_at', { ascending: false });

  if (error) {
    console.error('[blog] could not load posts:', error.message);
    return [];
  }
  return (data ?? []) as BlogPostSummary[];
}

/** One published post by its address, or null */
export async function getPublishedPost(slug: string): Promise<BlogPost | null> {
  const supabase = createPublicClient();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .lte('published_at', new Date().toISOString())
    .maybeSingle();

  if (error) console.error('[blog] could not load a post:', error.message);
  return (data as BlogPost | null) ?? null;
}
