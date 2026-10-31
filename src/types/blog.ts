// ---------- Blog (Supabase table public.blog_posts – supabase/migrations/0005_blog.sql) ----------

// The body of a post, block by block. Text in paragraphs, intros, lists, tips and warnings may use
// **bold** and [links](/services/seo).
export type BlogBlock =
  | { type: 'intro'; text: string } // the larger opening paragraph – main keyword in the first sentence
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'tip'; text: string } // 💡 green box
  | { type: 'warning'; text: string } // ⚠️ amber box
  | { type: 'image'; src: string; alt: string; caption?: string; credit?: string }
  | { type: 'quote'; text: string }
  // Cards linking to BMU's service pages (/services/<slug>), each with one line on why it fits
  | { type: 'services'; items: { slug: string; name: string; reason: string }[] }
  | { type: 'cta'; text: string; buttonText: string; buttonLink: string };

export type BlogFaq = { question: string; answer: string };

export type BlogStatus = 'draft' | 'published';

/** A post as stored */
export type BlogPost = {
  id: string;
  slug: string; // the page address: /blog/<slug> – lowercase words joined by dashes
  status: BlogStatus;
  published_at: string | null; // in the future = scheduled
  title: string;
  excerpt: string;
  category: string | null; // one of the service groups in src/data/navigation.ts
  tags: string[];
  featured: boolean;
  author_name: string;
  cover_image_url: string | null;
  cover_image_alt: string | null;
  meta_title: string | null;
  meta_description: string | null;
  main_keyword: string | null;
  content: BlogBlock[];
  faqs: BlogFaq[];
  read_minutes: number;
  created_at: string;
  updated_at: string;
};

/** What the listing and the cards need */
export type BlogPostSummary = Pick<
  BlogPost,
  | 'slug'
  | 'title'
  | 'excerpt'
  | 'category'
  | 'featured'
  | 'author_name'
  | 'cover_image_url'
  | 'read_minutes'
  | 'published_at'
>;

// ---------- Text around the blog (src/data/blog) ----------

// The listing on /blog (and /work)
export type BlogListingContent = {
  heading: string;
  description: string;
  allLabel: string; // first filter chip
  featuredLabel: string; // tag on the featured card
  searchPlaceholder: string;
  sortNewest: string;
  sortOldest: string;
  results: string; // '{count} articles' – {count} is replaced
  resultsOne: string; // used when there is exactly one
  loadMore: string;
  emptyHeading: string;
  emptyText: string;
  noPostsHeading: string; // the blog has no posts yet
  noPostsText: string;
  clearFilters: string;
  readArticle: string; // link text on the featured card
};

// An article page (/blog/<slug>)
export type BlogArticleContent = {
  minRead: string; // '{count} min read'
  updated: string; // 'Updated {date}' – shown when edited a day or more after publishing
  contents: string; // the table of contents' label
  share: {
    heading: string;
    whatsapp: string;
    linkedin: string;
    copy: string;
    copied: string;
    copyByHand: string; // shown when the browser blocks copying
  };
  enquiry: {
    eyebrow: string;
    title: string;
    text: string;
    cta: { label: string; href: string };
    call: string;
    whatsapp: string;
    servicesLabel: string; // above the services the post links to
    categoryLabel: string; // 'More on {category}' – when the post links to no services
  };
  faqHeading: string;
  relatedHeading: string;
  ctaHeading: string;
  ctaText: string;
  cta: { label: string; href: string };
};
