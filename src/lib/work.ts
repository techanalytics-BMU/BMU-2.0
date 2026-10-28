import { servicesMenu } from '@/data/navigation';
import { posts } from '@/data/work/posts';
import type { WorkPost } from '@/types/work';

// Helpers for the blog on /work – everything that reads the posts goes through here.

/** Card colours, in turn: dark slate · light mist · green · near-black with a green glow */
export const TONES = ['slate', 'mist', 'green', 'night'] as const;
export type Tone = (typeof TONES)[number];

/** All posts, newest first */
export const sortedPosts: WorkPost[] = [...posts].sort((a, b) => b.date.localeCompare(a.date));

/** A post's colour – fixed by its place in the full list, so it never changes when filtering */
export function toneOf(post: WorkPost): Tone {
  return TONES[sortedPosts.indexOf(post) % TONES.length];
}

/** The category's chrome icon (the same ones as the navbar's services panel) */
const ICONS = Object.fromEntries(servicesMenu.items.map((item) => [item.title, item.icon]));
export function visualOf(post: WorkPost): string | undefined {
  return post.cover ?? ICONS[post.category];
}

/** Categories that have at least one post, in the navbar's order, with how many each has */
export const categories = servicesMenu.items
  .map((item) => ({
    name: item.title,
    count: posts.filter((post) => post.category === item.title).length,
  }))
  .filter((category) => category.count > 0);

/** 'Sep 18, 2025' – fixed format and time zone, so server and browser always agree */
export function formatDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export function getPost(slug: string): WorkPost | undefined {
  return posts.find((post) => post.slug === slug);
}

/** Up to `count` other posts: same category first, then the newest of the rest */
export function relatedPosts(post: WorkPost, count = 3): WorkPost[] {
  const others = sortedPosts.filter((other) => other.slug !== post.slug);
  const sameCategory = others.filter((other) => other.category === post.category);
  const rest = others.filter((other) => other.category !== post.category);
  return [...sameCategory, ...rest].slice(0, count);
}
