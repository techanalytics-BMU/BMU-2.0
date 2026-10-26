import type { FooterContent } from '@/types/footer';

// Content from bmumarketing.in (approved for the footer).
// No links yet – add `href` to any item to make it clickable.
export const footer: FooterContent = {
  tagline:
    'AI-first growth partner for businesses and real estate. Strategy, creative, media and software from one team.',
  contact: [
    {
      type: 'address',
      label:
        '376, Phase 9, Royal Park Residency Layout, JP Nagar 9th Phase, J. P. Nagar, Bengaluru, Karnataka 560108',
    },
    { type: 'email', label: 'buildmyuniversee@gmail.com' },
    { type: 'phone', label: '+91 81054 91414' },
  ],
  social: [
    { platform: 'instagram', label: 'Instagram' },
    { platform: 'linkedin', label: 'LinkedIn' },
  ],
  columns: [
    {
      title: 'Services',
      links: [
        { label: 'Marketing and Visibility' },
        { label: 'Social and Personal Brand' },
        { label: 'UGC & Creator Marketing' },
        { label: 'Brand & design' },
        { label: 'Content & Production' },
        { label: 'Web & AI' },
      ],
    },
    {
      title: 'Products',
      links: [
        { label: 'BMU QR' },
        { label: 'Smart Review' },
        { label: 'BMU Connect' },
        { label: 'BMU AI Studio' },
        { label: 'Real Estate Suite' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Case studies' },
        { label: 'Industries' },
        { label: 'Pricing' },
        { label: 'Resources' },
        { label: 'About' },
        { label: 'Contact' },
        { label: 'QR & NFC store' },
        { label: 'Partners & white label' },
        { label: 'Join as a creator' },
        { label: 'Client dashboard' },
      ],
    },
  ],
  copyright: '© 2026 BMU.Marketing - Bengaluru, India',
  legal: [{ label: 'Privacy' }, { label: 'Terms' }],
};
