import type { AboutModelContent } from '@/types/about';

export const aboutModel: AboutModelContent = {
  badge: 'The one-team model',
  heading: 'Win today’s customer',
  accent: 'with one team, not five.',
  offLabel: 'Five agencies',
  onLabel: 'One BMU team',
  noOwner: 'No one owns the result',
  // The five-agency problem from "Our story" – each with its own invoice, timeline and excuse –
  // and the service BMU runs in its place
  vendors: [
    { role: 'Marketing agency', status: 'Invoice #1 due', service: 'Strategy & marketing' },
    { role: 'Website developer', status: 'Waiting on content', service: 'Website & AI' },
    { role: 'Social media team', status: 'Different brief', service: 'Social media' },
    { role: 'Ads agency', status: 'Blames the website', service: 'Performance ads' },
    { role: 'Video studio', status: 'Own timeline', service: 'Video & content' },
  ],
  team: {
    name: 'BMU Marketing',
    tag: 'BMU team',
  },
};
