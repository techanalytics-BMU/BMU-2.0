import type { LandingConversionRateContent } from '@/types/landing';

export const landingConversionRate: LandingConversionRateContent = {
  badge: 'Conversion rate optimisation',
  headingStart: 'Most Websites Peak on',
  headingHighlight: 'Launch Day',
  description:
    "We combine user research, behavioral insights, and continuous experimentation to turn more visitors into customers. Because a great website doesn't just look good—it performs better over time.",
  timeline: [
    { label: 'Birth!' },
    { label: '“Good, but can you change the music?”', highlight: true },
    { label: 'Death.' },
  ],
  inputs: ['User Research', 'GA4 Analysis', 'Heatmap Analysis', 'CRO | UX Audit'],
  strategy: ['Hypothesis', 'CRO Roadmap'],
  testLabel: 'A/B Test',
  variants: ['A', 'B'],
  cta: { label: 'Check Your Eligibility', href: '/contact' },
};
