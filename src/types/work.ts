export type WorkClientLogo = {
  name: string; // also the alt text
  logo?: string; // .svg / .webp in public/images/work/clients/ – a placeholder wordmark is shown until set
};

export type WorkHeroContent = {
  badge: string;
  heading: string;
  clientsLabel: string; // small line above the logo strip
  clients: WorkClientLogo[];
};

// ---------- Blog posts (src/data/work/posts.ts) ----------

// The body of a post, block by block
export type WorkPostBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'quote'; text: string }
  | { type: 'image'; src: string; alt: string; caption?: string };

export type WorkPost = {
  slug: string; // the page address: /work/<slug> – lowercase words joined by dashes, never reused
  title: string;
  excerpt: string; // one or two sentences – shown on the featured card, under the title and in search results
  category: string; // one of the service groups in src/data/navigation.ts (gives the filter, colour and icon)
  date: string; // published date, 'YYYY-MM-DD'
  readTime: number; // minutes
  author: string;
  cover?: string; // cut-out .webp/.png (transparent background) in public/images/work/posts/ –
  // the category's chrome icon is shown until set
  featured?: boolean; // the newest featured post is shown large at the top of /work
  body: WorkPostBlock[];
};

// Labels for the listing on /work (src/data/work/workListing.ts)
export type WorkListingContent = {
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
  clearFilters: string;
  readArticle: string; // link text on the featured card
};

// Labels for an article page (src/data/work/workArticle.ts)
export type WorkArticleContent = {
  minRead: string; // '{count} min read'
  relatedHeading: string;
  ctaHeading: string;
  ctaText: string;
  cta: { label: string; href: string };
};
