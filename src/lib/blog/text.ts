import type { BlogBlock, BlogFaq } from '@/types/blog';

// Working with a post's text: addresses (slugs), word counts and read time. Plain functions –
// used by the editor (live) and the server (when saving).

/** 'Christmas & New Year Road Trips 2026!' → 'christmas-new-year-road-trips-2026' */
export function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/\p{Diacritic}/gu, '') // accents: é → e
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
    .replace(/-+$/, '');
}

export const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;

/** The words a reader sees in a block (link addresses and ** left out) */
export function blockText(block: BlogBlock): string {
  const clean = (text: string) => text.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/\*\*/g, '');
  switch (block.type) {
    case 'list':
      return block.items.map(clean).join(' ');
    case 'table':
      return [...block.headers, ...block.rows.flat()].map(clean).join(' ');
    case 'image':
      return block.caption ?? '';
    case 'services':
      return block.items.map((item) => `${item.name} ${item.reason}`).join(' ');
    case 'cta':
      return `${block.text} ${block.buttonText}`;
    default:
      return clean(block.text);
  }
}

export function wordCount(blocks: BlogBlock[], faqs: BlogFaq[] = []) {
  const text = [
    ...blocks.map(blockText),
    ...faqs.map((faq) => `${faq.question} ${faq.answer}`),
  ].join(' ');
  return text.split(/\s+/).filter(Boolean).length;
}

/** About 200 words a minute, at least 1 */
export function readMinutes(blocks: BlogBlock[], faqs: BlogFaq[] = []) {
  return Math.max(1, Math.round(wordCount(blocks, faqs) / 200));
}

/** Every [link](…) address in the post's text */
export function linksIn(blocks: BlogBlock[]) {
  const links: string[] = [];
  for (const block of blocks) {
    for (const match of rawText(block).matchAll(/\[[^\]]+\]\(([^)\s]+)\)/g)) links.push(match[1]);
    if (block.type === 'services') links.push(...block.items.map((item) => `/services/${item.slug}`));
    if (block.type === 'cta') links.push(block.buttonLink);
  }
  return links;
}

/** A block's text with its **bold** and [link](…) markers still in */
function rawText(block: BlogBlock): string {
  switch (block.type) {
    case 'list':
      return block.items.join(' ');
    case 'table':
      return [...block.headers, ...block.rows.flat()].join(' ');
    case 'image':
    case 'services':
      return '';
    case 'cta':
      return block.text;
    default:
      return block.text;
  }
}
