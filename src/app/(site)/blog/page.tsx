import type { Metadata } from 'next';
import { getPublishedPosts } from '@/lib/blog/queries';
import { blogIndexSchema } from '@/lib/blog/schema';
import { BlogJsonLd, BlogListing } from '@/sections/blog';

const title = 'Blog – BMU Marketing';
const description =
  'Guides, case studies and ideas from the BMU team on SEO, ads, social, websites and branding for Bengaluru businesses.';
const image = { url: '/blog/share-image?title=Blog', width: 1200, height: 630, alt: 'BMU Marketing Blog' };

export const metadata: Metadata = {
  title: 'Blog', // the root layout adds " | BMU Marketing"
  description,
  alternates: {
    canonical: '/blog',
    types: { 'application/rss+xml': [{ url: '/blog/rss.xml', title: 'BMU Marketing Blog' }] },
  },
  openGraph: {
    type: 'website',
    title,
    description,
    url: '/blog',
    siteName: 'BMU Marketing',
    locale: 'en_IN',
    images: [image],
  },
  twitter: { card: 'summary_large_image', title, description, images: [image.url] },
};

// Refresh every 5 minutes (scheduled posts appear) – and at once when a post is published
export const revalidate = 300;

// Blog (/blog) – every published post, written in the dashboard
export default async function BlogPage() {
  const posts = await getPublishedPosts();
  return (
    <main>
      <BlogJsonLd graph={blogIndexSchema(posts)} />
      <BlogListing posts={posts} asPage />
    </main>
  );
}
