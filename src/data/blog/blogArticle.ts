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
    copyByHand: 'Press Ctrl+C (⌘C on a Mac) to copy the link',
  },
  // The card beside the article (under it on phones)
  enquiry: {
    eyebrow: 'Free audit',
    title: 'Want results like these?',
    text: 'Tell us about your business – we’ll review your Google profile, website and ads for free and send a plan.',
    cta: { label: 'Book a free audit', href: '/contact' },
    call: 'Call',
    whatsapp: 'WhatsApp',
    servicesLabel: 'Services in this article',
    categoryLabel: 'More on {category}',
  },
  faqHeading: 'Frequently asked questions',
  relatedHeading: 'Keep reading',
  ctaHeading: 'Want this working for your brand?',
  ctaText: 'Tell us where you want to grow – we reply within one working day.',
  cta: { label: 'Let’s talk growth', href: '/contact' },
};
