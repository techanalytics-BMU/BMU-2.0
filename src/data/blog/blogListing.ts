import type { BlogListingContent } from '@/types/blog';

// Text for the article list on /blog (and under the hero on /work). The posts themselves are
// written in the dashboard (/dashboard/blogs) and stored in Supabase.
export const blogListing: BlogListingContent = {
  heading: 'From the studio',
  description:
    'Guides, case studies and ideas from the BMU team – on getting found, chosen and remembered.',
  allLabel: 'All',
  featuredLabel: 'Featured',
  searchPlaceholder: 'Search articles',
  sortNewest: 'Newest first',
  sortOldest: 'Oldest first',
  results: '{count} articles',
  resultsOne: '1 article',
  loadMore: 'Load more',
  emptyHeading: 'Nothing here yet',
  emptyText: 'No articles match your search. Try another word or category.',
  noPostsHeading: 'New articles are on the way',
  noPostsText: 'Our first guides are being written right now – check back soon.',
  clearFilters: 'Clear filters',
  readArticle: 'Read article',
};
