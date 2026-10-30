import type { BlogArticleContent } from '@/types/blog';

// Text around every article page (/blog/<slug>)
export const blogArticle: BlogArticleContent = {
  breadcrumb: { home: 'Home', blog: 'Blog' },
  minRead: '{count} min read',
  updated: 'Updated {date}',
  contents: 'In this article',
  share: {
    heading: 'Share',
    whatsapp: 'WhatsApp',
    linkedin: 'LinkedIn',
    copy: 'Copy link',
    copied: 'Link copied',
  },
  faqHeading: 'Frequently asked questions',
  relatedHeading: 'Keep reading',
  ctaHeading: 'Want this working for your brand?',
  ctaText: 'Tell us where you want to grow – we reply within one working day.',
  cta: { label: 'Let’s talk growth', href: '/contact' },
};
