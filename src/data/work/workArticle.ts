import type { WorkArticleContent } from '@/types/work';

// Text around every article page (/work/<slug>)
export const workArticle: WorkArticleContent = {
  back: 'All articles',
  minRead: '{count} min read',
  relatedHeading: 'Keep reading',
  ctaHeading: 'Want this working for your brand?',
  ctaText: 'Tell us where you want to grow – we reply within one working day.',
  cta: { label: 'Let’s talk growth', href: '/contact' },
};
