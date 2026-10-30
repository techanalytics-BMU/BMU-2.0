import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPublishedPost, getPublishedPosts } from '@/lib/blog/queries';
import { blogPostSchema, shareImageOf } from '@/lib/blog/schema';
import { BlogArticle, BlogJsonLd } from '@/sections/blog';

type Props = { params: Promise<{ slug: string }> };

// Refresh every 5 minutes – and at once when the post is changed in the dashboard. Posts published
// after the last build are built the first time someone opens them.
export const revalidate = 300;

export async function generateStaticParams() {
  return (await getPublishedPosts()).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPublishedPost((await params).slug);
  if (!post) return {};
  const title = post.meta_title || `${post.title} – BMU Marketing`;
  const description = post.meta_description || post.excerpt;
  // The cover, or a branded card with the title (/blog/share-image)
  const image = {
    url: shareImageOf(post),
    width: 1200,
    height: 630,
    alt: post.cover_image_url ? (post.cover_image_alt ?? post.title) : post.title,
  };
  return {
    // A meta title written in the editor is used as it is; otherwise the post's title, and the
    // root layout adds " | BMU Marketing"
    title: post.meta_title ? { absolute: post.meta_title } : post.title,
    description,
    keywords: post.main_keyword ? [post.main_keyword, ...post.tags] : post.tags,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `/blog/${post.slug}`,
      siteName: 'BMU Marketing',
      locale: 'en_IN',
      publishedTime: post.published_at ?? undefined,
      modifiedTime: post.updated_at,
      authors: [post.author_name],
      section: post.category ?? undefined,
      tags: post.tags,
      images: [image],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image.url] },
  };
}

// One article (/blog/<slug>)
export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const [post, all] = await Promise.all([getPublishedPost(slug), getPublishedPosts()]);
  if (!post) notFound();

  return (
    <main>
      <BlogJsonLd graph={blogPostSchema(post)} />
      <BlogArticle post={post} all={all} />
    </main>
  );
}
