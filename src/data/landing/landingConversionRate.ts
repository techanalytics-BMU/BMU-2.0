import type { LandingConversionRateContent } from '@/types/landing';

export const landingConversionRate: LandingConversionRateContent = {
  badge: 'Conversion rate optimisation',
  headingStart: 'Most Websites Peak on',
  headingHighlight: 'Launch Day',
  description:
    "We combine user research, behavioral insights, and continuous experimentation to turn more visitors into customers. Because a great website doesn't just look good—it performs better over time.",
  // A website's life, from launch to BMU bringing it back. Scrolled through left → right.
  timeline: [
    { label: 'Launch day!' },
    { label: '“Looks great… but where are the leads?”', highlight: true, tall: true },
    { label: 'Traffic flatlines.' },
    { label: 'Forgotten online.', tall: true },
    { label: 'BMU audits every click.' },
    { label: 'Test. Learn. Optimise.', tall: true },
    { label: 'Found & chosen. Every month.', highlight: true },
  ],
  // Business flow diagram: our 6 services → one team & plan → the two outcomes (placeholders – will change)
  inputs: [
    'Marketing and Visibility',
    'Social and Personal Brand',
    'UGC & Creator Marketing',
    'Brand & Design',
    'Content & Production',
    'Web & AI',
  ],
  strategy: ['One Team', 'Growth Plan'],
  testLabel: 'Results',
  variants: ['Found', 'Chosen'],
  cta: { label: 'Check Your Eligibility', href: '/contact' },
};
