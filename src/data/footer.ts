import type { FooterContent } from '@/types/footer';

// Site footer. Items without `href` show as plain text – add the link once the page exists.
// The link tabs (Services / Industries / Bangalore / India / Dubai / International) are built in
// src/data/serviceAreas.ts.
export const footer: FooterContent = {
  tagline:
    'AI-first growth partner for businesses and real estate. Strategy, creative, media and software from one team.',
  social: [
    { platform: 'instagram', label: 'Instagram' },
    { platform: 'linkedin', label: 'LinkedIn' },
    { platform: 'youtube', label: 'YouTube' },
    { platform: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/918105491414' },
  ],
  columns: [
    {
      title: 'Site map',
      links: [
        { label: 'FAQs', href: '/contact#faq' },
        { label: 'Contact us', href: '/contact' },
        { label: 'Our team', href: '/team' },
        { label: 'Case studies' },
        { label: 'Client dashboard' },
      ],
    },
    {
      title: 'Resources',
      links: [{ label: 'Terms of use' }, { label: 'Privacy policy' }, { label: 'Refund policy' }],
    },
  ],
  join: {
    title: 'Join us',
    heading: 'Growth ideas, straight to your inbox',
    description: 'Campaigns that worked and lessons from the BMU team. No spam.',
    newsletter: {
      placeholder: 'Enter your email',
      button: 'Subscribe',
      sending: 'Subscribing…',
      success: 'Thanks – you’re on the list.',
      error: 'Please enter a valid email',
    },
  },
  wordmark: 'BMU Marketing',
  backToTop: 'Back to top',
  bottom: {
    copyright: '© 2026 BMU Marketing',
    location: 'Bengaluru, India',
    email: 'hello@bmumarketing.in',
  },
};
