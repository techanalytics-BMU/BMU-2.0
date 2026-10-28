import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { posts } from '@/data/work/posts';
import { getPost } from '@/lib/work';
import { WorkArticle } from '@/sections/work';

type Props = { params: Promise<{ slug: string }> };

// One page per article in src/data/work/posts.ts, built ahead of time
export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: `${post.title} – BMU Marketing`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function WorkArticlePage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  return (
    <main>
      <WorkArticle post={post} />
    </main>
  );
}
