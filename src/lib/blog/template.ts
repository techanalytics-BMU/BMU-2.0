import type { BlogBlock, BlogFaq } from '@/types/blog';
import { slugify } from './text';

// "Import" in the editor: a post written in the blog template format (export const post = { … })
// is read and turned into the editor's fields. The text is never run as code – it's converted to
// JSON (comments, unquoted keys, 'single quotes' and trailing commas handled) and then read.

export type ImportedPost = {
  slug: string;
  title: string;
  meta_title: string | null;
  meta_description: string | null;
  main_keyword: string | null;
  tags: string[];
  excerpt: string;
  cover_image_url: string | null;
  cover_image_alt: string | null;
  author_name: string | null;
  content: BlogBlock[];
  faqs: BlogFaq[];
  notes: string[]; // things to check after importing
};

/** The template's JavaScript object → strict JSON text */
function toJson(source: string) {
  const start = source.indexOf('{');
  const end = source.lastIndexOf('}');
  if (start < 0 || end < start) throw new Error('No { … } found');
  const text = source.slice(start, end + 1);

  let out = '';
  let i = 0;
  while (i < text.length) {
    const char = text[i];
    const next = text[i + 1];

    // Comments
    if (char === '/' && next === '/') {
      while (i < text.length && text[i] !== '\n') i++;
      continue;
    }
    if (char === '/' && next === '*') {
      i = text.indexOf('*/', i + 2);
      if (i < 0) break;
      i += 2;
      continue;
    }

    // Strings in "double", 'single' or `back` quotes → "double"
    if (char === '"' || char === "'" || char === '`') {
      let value = '';
      i++;
      while (i < text.length && text[i] !== char) {
        const c = text[i];
        if (c === '\\' && i + 1 < text.length) {
          const escaped = text[i + 1];
          // JSON's own escapes stay; anything else (\' \`) is just the character
          value += '"\\/bfnrtu'.includes(escaped) ? c + escaped : escaped;
          i += 2;
          continue;
        }
        value += c === '"' ? '\\"' : c === '\n' ? '\\n' : c === '\r' ? '' : c === '\t' ? '\\t' : c;
        i++;
      }
      i++; // closing quote
      out += `"${value}"`;
      continue;
    }

    // Unquoted keys: name:
    if (/[A-Za-z_$]/.test(char)) {
      let word = '';
      while (i < text.length && /[\w$]/.test(text[i])) word += text[i++];
      let j = i;
      while (/\s/.test(text[j] ?? '')) j++;
      out += text[j] === ':' ? `"${word}"` : word;
      continue;
    }

    // Trailing commas before } or ]
    if (char === ',') {
      let j = i + 1;
      while (/\s/.test(text[j] ?? '')) j++;
      if (text[j] === '}' || text[j] === ']') {
        i++;
        continue;
      }
    }

    out += char;
    i++;
  }
  return out;
}

const str = (value: unknown) => (typeof value === 'string' ? value : '');
const strs = (value: unknown) => (Array.isArray(value) ? value.map(str).filter(Boolean) : []);

/** One template block → an editor block (null: not used) */
function toBlock(raw: Record<string, unknown>, notes: string[]): BlogBlock | null {
  switch (raw.type) {
    case 'intro':
    case 'h2':
    case 'h3':
    case 'paragraph':
    case 'tip':
    case 'warning':
    case 'quote':
      return { type: raw.type, text: str(raw.text) };
    case 'list':
      return { type: 'list', items: strs(raw.items), ordered: raw.ordered === true };
    case 'table':
      return {
        type: 'table',
        headers: strs(raw.headers),
        rows: Array.isArray(raw.rows) ? raw.rows.map(strs) : [],
      };
    case 'image':
      return {
        type: 'image',
        src: str(raw.src),
        alt: str(raw.alt),
        caption: str(raw.caption) || undefined,
        credit: str(raw.credit) || undefined,
      };
    case 'cta':
      return {
        type: 'cta',
        text: str(raw.text),
        buttonText: str(raw.buttonText),
        buttonLink: str(raw.buttonLink) || '/contact',
      };
    // MM Miles' car cards become BMU service cards – the services need picking again
    case 'cars':
    case 'services': {
      const items = (Array.isArray(raw.items) ? raw.items : []) as Record<string, unknown>[];
      if (raw.type === 'cars') notes.push('Car cards were turned into service cards – pick the right services.');
      return {
        type: 'services',
        items: items.map((item) => ({
          slug: str(item.slug),
          name: str(item.name),
          reason: str(item.reason),
        })),
      };
    }
    default:
      notes.push(`A "${String(raw.type)}" block isn’t supported and was left out.`);
      return null;
  }
}

export function importTemplate(source: string): ImportedPost {
  const data = JSON.parse(toJson(source)) as Record<string, unknown>;
  const notes: string[] = [];

  const content = (Array.isArray(data.content) ? data.content : [])
    .map((block) => toBlock(block as Record<string, unknown>, notes))
    .filter((block): block is BlogBlock => block !== null);

  const faqs = (Array.isArray(data.faqs) ? data.faqs : [])
    .map((faq) => faq as Record<string, unknown>)
    .map((faq) => ({ question: str(faq.question), answer: str(faq.answer) }))
    .filter((faq) => faq.question);

  // Cover paths from another site (/blog/x.jpg) don't exist here – only full addresses are kept
  const cover = str(data.coverImage);
  const coverUrl = /^https?:\/\//.test(cover) ? cover : null;
  if (cover && !coverUrl) notes.push('The cover image path is from another site – upload the cover again.');

  const title = str(data.title);
  return {
    slug: slugify(str(data.slug) || title),
    title,
    meta_title: str(data.metaTitle) || null,
    meta_description: str(data.metaDescription) || null,
    main_keyword: str(data.mainKeyword) || null,
    tags: strs(data.tags),
    excerpt: str(data.excerpt),
    cover_image_url: coverUrl,
    cover_image_alt: str(data.coverImageAlt) || null,
    author_name: str(data.author) || null,
    content,
    faqs,
    notes,
  };
}
