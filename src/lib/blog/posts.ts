import { servicesMenu } from '@/data/navigation';
import type { BlogPostSummary } from '@/types/blog';

// Helpers for showing blog posts (listing, cards, article) – plain functions, used on the server
// and in the browser. Reading posts from Supabase is in ./queries.ts.

/** Card colours, in turn: dark slate · light mist · green · near-black with a green glow */
export const TONES = ['slate', 'mist', 'green', 'night'] as const;
export type Tone = (typeof TONES)[number];

/** A post's colour – fixed by its place in the full list (newest first), so filtering never changes it */
export function toneOf(post: BlogPostSummary, all: BlogPostSummary[]): Tone {
  const index = all.findIndex((other) => other.slug === post.slug);
  return TONES[Math.max(index, 0) % TONES.length];
}

/** The category's chrome icon (the same ones as the navbar's services panel) */
const ICONS = Object.fromEntries(servicesMenu.items.map((item) => [item.title, item.icon]));

/** The cover image, or the category's icon when there's none */
export function visualOf(post: BlogPostSummary): string | undefined {
  return post.cover_image_url ?? (post.category ? ICONS[post.category] : undefined);
}

/** Categories that have at least one post, in the navbar's order, with how many each has */
export function categoriesOf(posts: BlogPostSummary[]) {
  return servicesMenu.items
    .map((item) => ({
      name: item.title,
      count: posts.filter((post) => post.category === item.title).length,
    }))
    .filter((category) => category.count > 0);
}

/** 'Sep 18, 2025' – fixed format and time zone, so server and browser always agree */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'Asia/Kolkata',
  });
}

/** Up to `count` other posts: same category first, then the newest of the rest */
export function relatedPosts(slug: string, category: string | null, all: BlogPostSummary[], count = 3) {
  const others = all.filter((other) => other.slug !== slug);
  const sameCategory = others.filter((other) => category && other.category === category);
  const rest = others.filter((other) => !category || other.category !== category);
  return [...sameCategory, ...rest].slice(0, count);
}
