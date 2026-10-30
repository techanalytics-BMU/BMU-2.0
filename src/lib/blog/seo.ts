import type { BlogBlock, BlogFaq } from '@/types/blog';
import { blockText, linksIn, wordCount } from './text';

// The editor's SEO checklist and the few things a post must have before it's published.
// The checklist only warns; `missingEssentials` is what blocks publishing.

export type DraftPost = {
  title: string;
  slug: string;
  excerpt: string;
  category: string | null;
  main_keyword: string | null;
  meta_title: string | null;
  meta_description: string | null;
  cover_image_url: string | null;
  cover_image_alt: string | null;
  content: BlogBlock[];
  faqs: BlogFaq[];
};

export type SeoCheck = { id: string; label: string; ok: boolean };

const has = (text: string | null | undefined, keyword: string) =>
  Boolean(keyword) && (text ?? '').toLowerCase().includes(keyword);

export function seoChecklist(post: DraftPost): SeoCheck[] {
  const keyword = (post.main_keyword ?? '').trim().toLowerCase();
  const metaTitle = post.meta_title || post.title;
  const metaDescription = post.meta_description || post.excerpt;
  const firstText = post.content.find((block) => block.type === 'intro' || block.type === 'paragraph');
  const images = post.content.filter((block) => block.type === 'image');
  const links = linksIn(post.content);

  return [
    { id: 'keyword', label: 'Main keyword is set', ok: Boolean(keyword) },
    { id: 'keyword-title', label: 'Keyword in the title', ok: has(post.title, keyword) },
    {
      id: 'keyword-description',
      label: 'Keyword in the meta description',
      ok: has(metaDescription, keyword),
    },
    {
      id: 'keyword-intro',
      label: 'Keyword in the first paragraph',
      ok: firstText ? has(blockText(firstText), keyword) : false,
    },
    {
      id: 'keyword-slug',
      label: 'Keyword in the address',
      ok: Boolean(keyword) && post.slug.includes(keyword.replace(/\s+/g, '-')),
    },
    {
      id: 'meta-title',
      label: 'Meta title is 30–60 characters',
      ok: metaTitle.length >= 30 && metaTitle.length <= 60,
    },
    {
      id: 'meta-description',
      label: 'Meta description is 120–160 characters',
      ok: metaDescription.length >= 120 && metaDescription.length <= 160,
    },
    { id: 'h2', label: 'Has at least one H2 heading', ok: post.content.some((b) => b.type === 'h2') },
    { id: 'words', label: 'At least 600 words', ok: wordCount(post.content, post.faqs) >= 600 },
    {
      id: 'alt',
      label: 'Every image has alt text',
      ok:
        (!post.cover_image_url || Boolean(post.cover_image_alt?.trim())) &&
        images.every((block) => block.type === 'image' && (!block.src || block.alt.trim())),
    },
    {
      id: 'internal-link',
      label: 'At least one link to another BMU page',
      ok: links.some((link) => link.startsWith('/')),
    },
    { id: 'faqs', label: 'At least 3 FAQs', ok: post.faqs.filter((f) => f.question.trim()).length >= 3 },
    { id: 'cta', label: 'Has a call-to-action block', ok: post.content.some((b) => b.type === 'cta') },
    { id: 'cover', label: 'Has a cover image', ok: Boolean(post.cover_image_url) },
  ];
}

/** What's missing before the post can go live (empty = fine) */
export function missingEssentials(post: DraftPost): string[] {
  const missing: string[] = [];
  if (!post.title.trim()) missing.push('a title');
  if (!post.slug.trim()) missing.push('an address (slug)');
  if (!post.excerpt.trim()) missing.push('an excerpt');
  if (!post.category) missing.push('a category');
  if (post.cover_image_url && !post.cover_image_alt?.trim()) missing.push('alt text on the cover image');
  if (post.content.some((block) => block.type === 'image' && block.src && !block.alt.trim())) {
    missing.push('alt text on every image');
  }
  return missing;
}
