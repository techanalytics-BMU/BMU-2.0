import type { NavLink } from './navigation';

export type LandingHeroContent = {
  badge: string;
  headingLine1: string;
  headingLine2: string;
  description: string;
  primaryCta: NavLink;
  secondaryCta: NavLink;
};

export type LandingAllServicesTile = {
  title: string;
  image?: string; // .webp screenshot – a white placeholder with the title is shown until set
};

export type LandingConversionRateMarker = {
  label: string;
  highlight?: boolean; // taller stem + ring marker
};

export type LandingConversionRateContent = {
  badge: string;
  headingStart: string;
  headingHighlight: string; // shown in green
  description: string;
  timeline: LandingConversionRateMarker[];
  inputs: string[]; // left box of the flow diagram
  strategy: string[]; // middle box
  testLabel: string; // between the two browser mock-ups
  variants: [string, string];
  cta: NavLink;
};

export type LandingPricingPlan = {
  name: string;
  price: string;
  period: string;
  tagline: string; // who the plan is for
  cta: string; // button label
  features: string[];
  featured?: boolean; // highlighted green card
};

export type LandingPricingTab = {
  id: string;
  label: string;
  plans: LandingPricingPlan[]; // empty → shows `emptyMessage`
};

export type LandingPricingContent = {
  heading: string;
  description: string;
  descriptionDim: string; // end of the description, shown dimmed
  tabs: LandingPricingTab[];
  emptyMessage: string;
};

export type LandingCoreItem = {
  letter: string;
  number: string; // large faded number behind the title
  title: string;
  description: string;
};

export type LandingCoreContent = {
  eyebrow: string;
  heading: string;
  items: LandingCoreItem[];
};

export type LandingAllServicesContent = {
  heading: string;
  subheading: string;
  tiles: LandingAllServicesTile[];
};
