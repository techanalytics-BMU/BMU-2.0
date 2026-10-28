import type { WorkListingContent } from '@/types/work';

// Text for the articles listing on /work (the posts themselves are in ./posts.ts)
export const workListing: WorkListingContent = {
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
  clearFilters: 'Clear filters',
  readArticle: 'Read article',
};
