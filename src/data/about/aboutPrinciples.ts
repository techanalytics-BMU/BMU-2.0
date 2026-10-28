import type { AboutPrinciplesContent } from '@/types/about';

export const aboutPrinciples: AboutPrinciplesContent = {
  badge: 'How we work',
  heading: 'What we won’t compromise on',
  description: 'These come straight from our years as the client.',
  // Each principle plays a small scene in the panel next to the list (see AboutPrinciples.tsx)
  items: [
    {
      title: 'One team, full accountability',
      text: 'Strategy, creative, ads and web all sit with us. When numbers slip, there’s no other agency to point at.',
      icon: 'team',
      scene: {
        caption: 'Who’s accountable?',
        rows: [
          { label: 'Strategy', value: 'BMU' },
          { label: 'Creative', value: 'BMU' },
          { label: 'Ads', value: 'BMU' },
          { label: 'Website', value: 'BMU' },
        ],
        badge: 'One team',
      },
    },
    {
      title: 'Fair, clear pricing',
      text: 'We know what agency bills feel like from the client’s side. Our plans are published, with no setup fees.',
      icon: 'pricing',
      scene: {
        caption: 'Your plan',
        rows: [
          { label: 'Monthly plan', value: 'Published' },
          { label: 'Setup fee', value: '₹0' },
          { label: 'Hidden extras', value: 'None' },
        ],
        badge: 'No surprises',
      },
    },
    {
      title: 'We report the misses too',
      text: 'If a campaign underperforms, it’s in the report before you have to ask, along with what we’re changing.',
      icon: 'report',
      scene: {
        caption: 'Monthly report',
        rows: [
          { label: 'Missed target', value: 'Flagged' },
          { label: 'Next step', value: 'What we’re changing' },
        ],
        badge: 'Before you ask',
      },
    },
    {
      title: 'You own everything',
      text: 'Ad accounts, pages, domains and data are set up in your name from day one.',
      icon: 'own',
      scene: {
        caption: 'Account owner',
        rows: [
          { label: 'Google Ads', value: 'You' },
          { label: 'Meta Business', value: 'You' },
          { label: 'Domain & website', value: 'You' },
          { label: 'Analytics data', value: 'You' },
        ],
        badge: 'Yours from day one',
      },
    },
  ],
};
