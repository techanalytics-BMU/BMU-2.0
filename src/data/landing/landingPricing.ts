import type { LandingPricingContent, LandingPricingPlan } from '@/types/landing';

// Monthly prices are fixed (in ₹)
const LAUNCH = 35_000;
const GROWTH = 85_000;
const SCALE_FROM = 2_00_000; // shown as "₹2L+"

// Our working month: 24 days × 9 hrs = 216 hrs.
// Hourly rates spread the monthly price over it, e.g. Launch: 35,000 ÷ 216 = 162.04 → ₹162 an hour.
const WORK_DAYS = 24;
const HOURS_PER_DAY = 9;
const HOURS_A_MONTH = WORK_DAYS * HOURS_PER_DAY;

// "₹" + Indian digit grouping, e.g. 35000 → "₹35,000"
const rupees = (amount: number) => `₹${amount.toLocaleString('en-IN')}`;

const launch: LandingPricingPlan = {
  name: 'Launch',
  price: rupees(LAUNCH),
  period: 'per month',
  tagline: 'For single-location businesses getting consistent online',
  billing: 'Billed monthly, plus your ad spend',
  cta: 'Start with Launch',
  features: [
    '2 ad platforms managed',
    '12 creatives a month',
    'Google Business optimisation',
    'Monthly performance report',
  ],
};

const growth: LandingPricingPlan = {
  name: 'Growth',
  price: rupees(GROWTH),
  period: 'per month',
  tagline: 'For brands scaling spend across channels and cities',
  billing: 'Billed monthly, plus your ad spend',
  cta: 'Start with Growth',
  featured: true,
  badge: 'Best value',
  features: [
    '4 platforms + retargeting',
    '30 creatives incl. UGC',
    'Full SEO retainer',
    'Automation and CRM setup',
  ],
};

const scale: LandingPricingPlan = {
  name: 'Scale',
  price: '₹2L+',
  period: 'per month',
  tagline: 'For multi-location groups and property developers',
  billing: 'Custom scope, billed monthly',
  cta: 'Request a proposal',
  features: [
    'Dedicated account team',
    'Drone and video production',
    'AI Studio access',
    'Client dashboard and reporting',
  ],
};

// The same card shown per hour, with its own billing line under the price.
// `from` adds a "+" for plans whose monthly price is a starting price.
const perHour = (
  plan: LandingPricingPlan,
  monthly: number,
  billing: string,
  from = false,
): LandingPricingPlan => ({
  ...plan,
  price: `${rupees(Math.round(monthly / HOURS_A_MONTH))}${from ? '+' : ''}`,
  period: 'per hour',
  billing,
});

const HOURLY_BILLING = 'Billed by the hour, plus your ad spend';

export const landingPricing: LandingPricingContent = {
  heading: 'Pricing that scales with you',
  description:
    "Whether you're a single café or a multi-city developer, BMU Marketing has a plan built around your growth. Start where you are today,",
  descriptionDim: 'and upgrade anytime as your results compound.',
  // Toggle order; the first tab is the one shown when the page opens
  tabs: [
    {
      // ₹162 / ₹394 / ₹926+ an hour (35,000, 85,000 and 2,00,000 ÷ 216, rounded)
      id: 'hourly',
      label: 'Hourly retainers',
      shortLabel: 'Hourly',
      plans: [
        perHour(launch, LAUNCH, HOURLY_BILLING),
        perHour(growth, GROWTH, HOURLY_BILLING),
        perHour(scale, SCALE_FROM, 'Custom scope, billed by the hour', true),
      ],
    },
    {
      id: 'monthly',
      label: 'Monthly retainers',
      shortLabel: 'Monthly',
      plans: [launch, growth, scale],
    },
    {
      id: 'bundles',
      label: 'Bundles',
      plans: [], // design to come
    },
  ],
  emptyMessage: 'Bundle plans are coming soon.',
};
