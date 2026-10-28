import type { NavLink } from './navigation';

export type LandingHeroContent = {
  badge: string;
  headingLine1: string;
  headingLine2: string;
  description: string;
  cta: NavLink; // the one button
};

// The turning earth at the bottom of LandingHero (drawn by src/hooks/useEarthGlobe.ts)
export type LandingHeroEarthCity = {
  name: string;
  lat: number; // degrees, north +
  lon: number; // degrees, east +
};

export type LandingHeroEarth = {
  /**
   * Land map, 0.5° cells: rows north → south, comma-separated; each row west → east as run
   * lengths in 2-character base 36, starting with sea (made from Natural Earth via world-atlas)
   */
  land: string;
  cities: LandingHeroEarthCity[]; // glowing city lights
  routes: [string, string][]; // arcs (by city name) for the still globe – while turning, arcs pick random cities
  /**
   * India's official outline (Natural Earth, India's point of view) – not drawn; it keeps India's town
   * lights inside the country. Rings joined by '|', points by ';', each point "lon,lat". The first
   * ring is the mainland.
   */
  india: string;
  // India's cities at night: each becomes a cluster of warm lights, bigger for a bigger `weight` (1–3)
  indiaCities: (LandingHeroEarthCity & { weight: number })[];
};

export type LandingAllServicesTile = {
  title: string;
  href?: string; // "View More" link – a plain button until set
  image?: string; // .webp screenshot – a white placeholder with the title is shown until set
};

export type LandingConversionRateMarker = {
  label: string;
  highlight?: boolean; // ring marker instead of a dot
  tall?: boolean; // taller stem – alternate with short ones so labels never overlap
};

export type LandingConversionRateContent = {
  badge: string;
  headingStart: string;
  headingHighlight: string; // shown in green
  description: string;
  timeline: LandingConversionRateMarker[];
  inputs: string[]; // left box of the flow diagram (our services)
  strategy: string[]; // middle box
  testLabel: string; // between the two browser mock-ups
  variants: [string, string]; // short words shown in the two browser mock-ups
  cta: NavLink;
};

export type LandingPricingPlan = {
  name: string;
  price: string;
  period: string;
  tagline: string; // who the plan is for
  billing: string; // small line under the price
  cta: string; // button label
  features: string[];
  featured?: boolean; // highlighted card: green glow and green button
  badge?: string; // small gradient pill next to the name
};

export type LandingPricingTab = {
  id: string;
  label: string;
  shortLabel?: string; // shown on phones instead of `label`, so the toggle fits on one line
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

// Left panel of the website-builder mock-up
export type LandingFreeTrialEditor = {
  back: string; // small "‹ PAGES" link at the top
  title: string; // page being edited
  search: string; // search box placeholder
  queue: string; // heading of the question queue, which moves on with each question
};

// A question people search on Google / ask AI tools, typed out as the post title
export type LandingFreeTrialQuestion = {
  service: string; // shown with the industry in the small green tag above the question
  industry: string;
  question: string; // keep it under ~55 characters so it fits on two lines
};

// The website being edited in the mock-up (its navbar mirrors the real one)
export type LandingFreeTrialSite = {
  url: string; // shown in the browser bar
  links: string[];
  cta: string; // pill button in the site's navbar
  author: string; // byline under the question
  status: string; // next to the byline, while the answer is "being written"
  questions: LandingFreeTrialQuestion[]; // a new one every 6 seconds, in this order
};

export type LandingFreeTrialContent = {
  badge: string; // small pill above the heading
  headingLine1: string;
  headingLine2: string;
  note: string; // small print under the heading
  cta: NavLink;
  chip: NavLink; // glass pill on the green horizon under the mock-up
  editor: LandingFreeTrialEditor;
  site: LandingFreeTrialSite;
};

export type LandingAllServicesContent = {
  heading: string;
  subheading: string;
  tiles: LandingAllServicesTile[];
};
