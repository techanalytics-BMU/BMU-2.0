import type { FooterContent } from '@/types/footer';

// Site footer. Items without `href` show as plain text – add the link once the page exists.
// The link tabs (Services / Industries / Bangalore / India / Dubai / International) are built in
// src/data/serviceAreas.ts.
export const footer: FooterContent = {
  contact: [
    {
      icon: 'location',
      label: 'Address',
      value:
        '376, Phase 9, Royal Park Residency Layout, JP Nagar 9th Phase, J. P. Nagar, Bengaluru, Karnataka 560108',
    },
    {
      icon: 'mail',
      label: 'Email',
      value: 'support@bmumarketing.in',
      href: 'mailto:support@bmumarketing.in',
    },
    { icon: 'phone', label: 'Phone', value: '+91 81054 91414', href: 'tel:+918105491414' },
  ],
  columns: [
    {
      title: 'Site map',
      links: [
        { label: 'FAQs', href: '/contact#faq' },
        { label: 'Contact us', href: '/contact' },
        { label: 'Our team', href: '/team' },
        { label: 'Blogs', href: '/blog' },
        { label: 'Client dashboard' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Terms of use' },
        { label: 'Privacy policy', href: '/privacy-policy' },
        { label: 'Refund policy' },
      ],
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
    email: 'support@bmumarketing.in',
  },
};
