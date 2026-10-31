'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { canWriteBlog, getProfile } from '@/lib/auth/session';
import { missingEssentials } from '@/lib/blog/seo';
import { readMinutes, SLUG } from '@/lib/blog/text';
import { createClient } from '@/lib/supabase/server';
import type { BlogBlock, BlogFaq, BlogPost } from '@/types/blog';

// What the SEO writer does to posts in the dashboard. Each action checks the role first; the
// database checks again (only SEO writers may change posts). Saving also guards against two people
// editing the same post: a save is refused if the post changed since it was opened.

/** The fields the editor sends */
export type PostInput = Pick<
  BlogPost,
  | 'slug'
  | 'title'
  | 'excerpt'
  | 'category'
  | 'tags'
  | 'featured'
  | 'author_name'
  | 'cover_image_url'
  | 'cover_image_alt'
  | 'meta_title'
  | 'meta_description'
  | 'main_keyword'
  | 'content'
  | 'faqs'
>;

export type SaveResult =
  | { ok: true; updatedAt: string; slug: string; status: BlogPost['status']; publishedAt: string | null }
  | { ok: false; error: string; conflict?: boolean };

const DENIED = { ok: false as const, error: 'Only the SEO writer can change posts.' };

/** Addresses under /blog/ the site uses itself */
const RESERVED = ['share-image', 'rss'];
const FAILED = { ok: false as const, error: 'Something went wrong. Please try again.' };

async function writer() {
  const profile = await getProfile();
  return profile && canWriteBlog(profile.role) ? profile : null;
}

/** Refresh the public pages that show posts */
function refreshSite(slug: string) {
  revalidatePath('/blog');
  revalidatePath(`/blog/${slug}`);
  revalidatePath('/work');
  revalidatePath('/blog/rss.xml');
  revalidatePath('/sitemap/pages.xml');
  revalidatePath('/dashboard/blogs');
}

// ---------- Cleaning what the editor sends ----------

const text = (value: unknown, max: number) => (typeof value === 'string' ? value.trim().slice(0, max) : '');
const optional = (value: unknown, max: number) => text(value, max) || null;

/** Images may only come from our own storage (uploaded in the editor) */
function image(value: unknown) {
  const url = text(value, 600);
  const ours = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/blog-images/`;
  return url.startsWith(ours) ? url : '';
}

function cleanBlock(raw: unknown): BlogBlock | null {
  const block = (raw ?? {}) as Record<string, unknown>;
  const list = (value: unknown, max: number) =>
    Array.isArray(value) ? value.map((item) => text(item, max)).slice(0, 100) : [];

  switch (block.type) {
    case 'intro':
    case 'paragraph':
    case 'tip':
    case 'warning':
    case 'quote':
      return { type: block.type, text: text(block.text, 6000) };
    case 'h2':
    case 'h3':
      return { type: block.type, text: text(block.text, 200) };
    case 'list':
      return {
        type: 'list',
        items: list(block.items, 1000).filter(Boolean),
        ordered: block.ordered === true,
      };
    case 'table':
      return {
        type: 'table',
        headers: list(block.headers, 200).slice(0, 8),
        rows: (Array.isArray(block.rows) ? block.rows : []).slice(0, 60).map((row) => list(row, 500).slice(0, 8)),
      };
    // Kept even before a picture is chosen (the website skips image blocks without one)
    case 'image': {
      return {
        type: 'image',
        src: image(block.src),
        alt: text(block.alt, 200),
        caption: text(block.caption, 300) || undefined,
        credit: text(block.credit, 200) || undefined,
      };
    }
    case 'services':
      return {
        type: 'services',
        items: (Array.isArray(block.items) ? block.items : []).slice(0, 6).map((item) => {
          const service = (item ?? {}) as Record<string, unknown>;
          return {
            slug: text(service.slug, 80).replace(/[^a-z0-9-]/g, ''),
            name: text(service.name, 100),
            reason: text(service.reason, 300),
          };
        }),
      };
    case 'cta': {
      const link = text(block.buttonLink, 300);
      return {
        type: 'cta',
        text: text(block.text, 600),
        buttonText: text(block.buttonText, 60),
        buttonLink: link.startsWith('/') || /^https?:\/\//.test(link) ? link : '/contact',
      };
    }
    default:
      return null;
  }
}

function clean(input: PostInput) {
  const content = (Array.isArray(input.content) ? input.content : [])
    .slice(0, 300)
    .map(cleanBlock)
    .filter((block): block is BlogBlock => block !== null);
  const faqs: BlogFaq[] = (Array.isArray(input.faqs) ? input.faqs : [])
    .slice(0, 20)
    .map((faq) => ({ question: text(faq?.question, 300), answer: text(faq?.answer, 2000) }))
    .filter((faq) => faq.question);

  return {
    slug: text(input.slug, 80).toLowerCase(),
    title: text(input.title, 200),
    excerpt: text(input.excerpt, 400),
    category: optional(input.category, 60),
    tags: (Array.isArray(input.tags) ? input.tags : [])
      .map((tag) => text(tag, 40).toLowerCase())
      .filter(Boolean)
      .slice(0, 15),
    featured: input.featured === true,
    author_name: text(input.author_name, 80) || 'BMU Team',
    cover_image_url: image(input.cover_image_url) || null,
    cover_image_alt: optional(input.cover_image_alt, 200),
    meta_title: optional(input.meta_title, 120),
    meta_description: optional(input.meta_description, 300),
    main_keyword: optional(input.main_keyword, 80),
    content,
    faqs,
    read_minutes: readMinutes(content, faqs),
  };
}

// ---------- Actions ----------

/** "New post": an empty draft, then straight into the editor */
export async function createPost() {
  const profile = await writer();
  if (!profile) return;
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('blog_posts')
    .insert({
      title: 'Untitled post',
      slug: `draft-${Date.now().toString(36)}`,
      author_name: 'BMU Team',
      created_by: profile.id,
    })
    .select('id')
    .single();
  if (error || !data) throw new Error('Could not create the post');
  redirect(`/dashboard/blogs/${data.id}`);
}

/**
 * Save (drafts autosave through this; published posts save with "Update"). `publish`:
 *   undefined – keep the status as it is
 *   { at: null } – publish now (or keep the original date if it's already published)
 *   { at: '…' } – publish / schedule for that moment
 */
export async function savePost(
  id: string,
  input: PostInput,
  expectedUpdatedAt: string,
  publish?: { at: string | null }
): Promise<SaveResult> {
  if (!(await writer())) return DENIED;
  const supabase = await createClient();

  const { data: current } = await supabase
    .from('blog_posts')
    .select('slug, status, published_at, updated_at')
    .eq('id', id)
    .single();
  if (!current) return { ok: false, error: 'This post no longer exists.' };
  if (current.updated_at !== expectedUpdatedAt) {
    return {
      ok: false,
      conflict: true,
      error: 'Someone else updated this post. Reload to see their changes.',
    };
  }

  const post = clean(input);
  const isPublished = current.status === 'published';
  if (isPublished) post.slug = current.slug; // a live address never changes
  if (!SLUG.test(post.slug)) {
    return { ok: false, error: 'The address may only use lowercase letters, numbers and dashes.' };
  }
  if (RESERVED.includes(post.slug)) {
    return { ok: false, error: 'This address is used by the site itself – please choose another.' };
  }

  const { data: taken } = await supabase
    .from('blog_posts')
    .select('id')
    .eq('slug', post.slug)
    .neq('id', id)
    .maybeSingle();
  if (taken) return { ok: false, error: 'Another post already uses this address – change the slug.' };

  let status = current.status as BlogPost['status'];
  let publishedAt = current.published_at as string | null;
  if (publish) {
    const missing = missingEssentials(post);
    if (missing.length) return { ok: false, error: `Before publishing, add ${missing.join(', ')}.` };
    if (publish.at) {
      const at = new Date(publish.at);
      if (Number.isNaN(at.getTime())) return { ok: false, error: 'Please pick a valid date and time.' };
      publishedAt = at.toISOString();
    } else if (!isPublished || !publishedAt) {
      publishedAt = new Date().toISOString();
    }
    status = 'published';
  }

  const { data, error } = await supabase
    .from('blog_posts')
    .update({ ...post, status, published_at: publishedAt })
    .eq('id', id)
    .select('updated_at')
    .single();
  if (error || !data) {
    console.error('[blog] could not save a post:', error?.message);
    return FAILED;
  }

  if (status === 'published') refreshSite(post.slug);
  else revalidatePath('/dashboard/blogs');
  return { ok: true, updatedAt: data.updated_at, slug: post.slug, status, publishedAt };
}

/** Back to draft – the post leaves the website */
export async function unpublishPost(id: string): Promise<SaveResult> {
  if (!(await writer())) return DENIED;
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('blog_posts')
    .update({ status: 'draft', published_at: null })
    .eq('id', id)
    .select('slug, updated_at')
    .single();
  if (error || !data) return FAILED;
  refreshSite(data.slug);
  return { ok: true, updatedAt: data.updated_at, slug: data.slug, status: 'draft', publishedAt: null };
}

/** Delete for good (the dashboard asks first; the editor then goes back to the list) */
export async function deletePost(id: string): Promise<{ ok: true } | { ok: false; error: string }> {
  if (!(await writer())) return DENIED;
  const supabase = await createClient();
  const { data, error } = await supabase.from('blog_posts').delete().eq('id', id).select('slug').single();
  if (error || !data) return FAILED;
  refreshSite(data.slug);
  return { ok: true };
}
