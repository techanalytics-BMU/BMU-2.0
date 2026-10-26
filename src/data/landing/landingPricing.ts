import type { LandingPricingContent } from '@/types/landing';

export const landingPricing: LandingPricingContent = {
  heading: 'Pricing that scales with you',
  description:
    "Whether you're a single café or a multi-city developer, BMU Marketing has a plan built around your growth. Start where you are today,",
  descriptionDim: 'and upgrade anytime as your results compound.',
  tabs: [
    {
      id: 'monthly',
      label: 'Monthly retainers',
      plans: [
        {
          name: 'Launch',
          price: '₹35,000',
          period: 'per month',
          tagline: 'For single-location businesses getting consistent online',
          cta: 'Start with Launch',
          features: [
            '2 ad platforms managed',
            '12 creatives a month',
            'Google Business optimisation',
            'Monthly performance report',
          ],
        },
        {
          name: 'Growth',
          price: '₹85,000',
          period: 'per month',
          tagline: 'For brands scaling spend across channels and cities',
          cta: 'Start with Growth',
          featured: true,
          features: [
            '4 platforms + retargeting',
            '30 creatives incl. UGC',
            'Full SEO retainer',
            'Automation and CRM setup',
          ],
        },
        {
          name: 'Scale',
          price: '₹2L+',
          period: 'per month',
          tagline: 'For multi-location groups and property developers',
          cta: 'Request a proposal',
          features: [
            'Dedicated account team',
            'Drone and video production',
            'AI Studio access',
            'Client dashboard and reporting',
          ],
        },
      ],
    },
    {
      id: 'bundles',
      label: 'Bundles',
      plans: [], // design to come
    },
  ],
  emptyMessage: 'Bundle plans are coming soon.',
};
