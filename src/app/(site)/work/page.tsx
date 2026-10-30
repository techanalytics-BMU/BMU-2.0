import type { Metadata } from 'next';
import { getPublishedPosts } from '@/lib/blog/queries';
import { BlogListing } from '@/sections/blog';
import { WorkHero } from '@/sections/work';

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'Brands, websites, campaigns and films BMU Marketing has built for businesses across Bengaluru and India.',
};

// Refresh every 5 minutes – and at once when a post is published (its article list is the blog's)
export const revalidate = 300;

// Work page – add new sections below in display order
export default async function WorkPage() {
  const posts = await getPublishedPosts();
  return (
    <main>
      <WorkHero />
      <BlogListing posts={posts} />
    </main>
  );
}
