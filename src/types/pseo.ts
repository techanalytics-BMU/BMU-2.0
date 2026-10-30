import type { DubaiAreaSlug, DubaiDistrict, MarketRegion, MarketSlug } from '@/data/pseo/abroad';
import type { CityBase } from '@/data/pseo/sheet/cities';
import type { IndustryBase } from '@/data/pseo/sheet/industries';
import type { LocalityBase } from '@/data/pseo/sheet/localities';
import type { BusinessBase } from '@/data/pseo/sheet/businesses';
import type {
  BusinessSlug,
  CitySlug,
  IndustrySlug,
  LocalitySlug,
  ServiceSlug,
} from '@/data/pseo/slugs';

// ---------- The entities every programmatic page is built from ----------
// Base facts (names, zones, tiers, PIN codes, priorities) come from the spreadsheet – see
// src/data/pseo/sheet/. The written profiles below add what makes each page specific.

export type Faq = { q: string; a: string };
export type Point = { title: string; text: string };

// The six service groups, as in the navbar's Services menu
export type ServiceGroup =
  | 'Marketing & Visibility'
  | 'Social & Personal Brand'
  | 'UGC & Creator Marketing'
  | 'Brand & Design'
  | 'Web & AI'
  | 'Content & Production';

export type Service = {
  slug: ServiceSlug;
  name: string; // short, used inside sentences – 'SEO', 'Google Ads', 'website development'
  title: string; // as a page heading – 'SEO', 'Google Ads', 'Website Development'
  agencyNoun: string; // how people search for the provider – 'SEO agency', 'website development company'
  group: ServiceGroup;
  summary: string; // one line, under 140 characters – meta descriptions and link cards
  intro: string; // 2–3 sentences: what it is and what it does for a business
  whyItMatters: string; // 2 sentences: what goes wrong without it
  deliverables: Point[]; // 6 – what BMU actually does / hands over
  process: Point[]; // 4 steps, in order
  timeline: string; // 1–2 sentences: when results usually show, honestly
  reportsOn: string[]; // 4 metrics the client sees
  faqs: Faq[]; // 4 general questions about the service
  localAngle: string; // 2 sentences: how this service works for a business serving one neighbourhood
  related: ServiceSlug[]; // 3–4 services that pair well with it
  // Deliverable texts that name Indian platforms, reworded for pages outside India (by title)
  abroad?: Record<string, string>;
  // Real BMU prices only – leave out until confirmed (no price is shown without it)
  pricing?: { from: number; unit: 'one-time' | 'per month' | 'per project'; note?: string };
};

// The written part of an industry (the sheet adds its name, sub-segments and priority)
export type IndustryProfile = {
  name: string; // in a sentence – 'healthcare and hospitals', 'clinics and doctors'
  title: string; // as a heading – 'Healthcare & Hospitals'
  marketingLabel: string; // 'Hospital marketing', 'Real estate marketing'
  businessNoun: string; // one business of this kind – 'hospital', 'clinic'
  audience: string; // who BMU works with – 'developers, builders and channel partners'
  customers: string; // who THEIR customers are – 'home buyers and investors'
  intro: string; // 2–3 sentences
  challenges: Point[]; // 4 marketing problems specific to this industry
  buyerJourney: { stage: string; text: string }[]; // 4 stages of how their customer decides
  // The channel mix: 6–10 services ranked by how much they matter for this industry, each with
  // 1–2 sentences on what it does for THIS industry. A Service × Industry page is only built for
  // the services listed here.
  channels: { service: ServiceSlug; why: string }[];
  seasonality: string; // 1–2 sentences: when demand peaks (Indian calendar)
  compliance?: string; // 1–2 sentences on advertising rules – only where clearly known
  kpis: string[]; // 4 numbers that show marketing is working
  faqs: Faq[]; // 4 general questions
  localAngle: string; // 1–2 sentences: how this industry wins customers in a neighbourhood
};
export type Industry = IndustryProfile & IndustryBase & { slug: IndustrySlug; sheetName: string };

// The written part of a local business type (the sheet adds its name, category and value)
export type BusinessProfile = {
  name: string; // in a sentence, plural – 'dental clinics', 'packers and movers'
  title: string; // as a heading – 'Dental Clinics'
  businessNoun: string; // one of them – 'dental clinic', 'packers and movers company'
  industry: IndustrySlug; // the industry it belongs to (from the 58)
  customers: string; // who their customers are
  intro: string; // 2 sentences
  challenges: Point[]; // 3 marketing problems specific to this kind of business
  searches: string[]; // 3–5 searches their customers really type – 'dentist near me open now'
  // 4–7 services ranked by fit, each with 1–2 sentences on what it does for THIS kind of business.
  // A Service × Business page is only built for the services listed here.
  channels: { service: ServiceSlug; why: string }[];
  faqs: Faq[]; // 3
  localAngle: string; // 1–2 sentences: how this business wins customers nearby
};
export type Business = BusinessProfile & BusinessBase & { slug: BusinessSlug; sheetName: string };

export type Competition = 'high' | 'medium' | 'low';

// The written part of a Bengaluru locality (the sheet adds its name, zone and PIN code)
export type LocalityProfile = {
  coords: [number, number]; // approximate [lat, lng] – for distances and nearby areas
  character: string; // 2–3 sentences: what the area is like and who lives / works there
  businesses: string[]; // 5–7 kinds of business common here – 'cafés and microbreweries'
  landmarks: string[]; // 2–4 well-known roads, tech parks, malls or markets
  nearby: LocalitySlug[]; // 4–6 neighbouring localities from the full list
  competition: Competition; // how crowded local search and ads are here
  searchHabits: string; // 1–2 sentences: how local customers look for businesses
  realEstate: string; // 1–2 sentences: the property market here (used on real estate pages)
  industries: IndustrySlug[]; // 3–5 industries that are strongest here
};
export type Locality = LocalityProfile & LocalityBase & { slug: LocalitySlug };

// The written part of a city (the sheet adds its name, state and tier)
export type CityProfile = {
  coords: [number, number];
  character: string; // 2–3 sentences: the city's economy and business scene
  businesses: string[]; // 5–7 kinds of business important here
  languages: string; // languages customers use – 'Kannada and English'
  competition: Competition;
  searchHabits: string; // 1–2 sentences
  industries: IndustrySlug[]; // 3–5 strongest industries
  presence: boolean; // BMU has real clients or case studies here
};
export type City = CityProfile & CityBase & { slug: CitySlug };

// The written part of a Dubai area (src/data/pseo/abroad.ts adds its name and district)
export type DubaiAreaProfile = {
  coords: [number, number];
  character: string; // 2–3 sentences: what the area is like, who lives and works there
  businesses: string[]; // 5–7 kinds of business common here
  landmarks: string[]; // 2–4 well-known towers, malls, souks, metro stations, roads
  nearby: DubaiAreaSlug[]; // 3–5 neighbouring Dubai areas from the list
  competition: Competition;
  searchHabits: string; // 1–2 sentences: how customers here look for businesses
  industries: IndustrySlug[]; // 3–5 strongest industries
  freeZone?: string; // the free zone based here, only where there is one – 'DMCC', 'DIFC'
};
export type DubaiArea = DubaiAreaProfile & {
  slug: DubaiAreaSlug;
  name: string;
  district: DubaiDistrict;
};

// The written part of a city abroad (src/data/pseo/abroad.ts adds its name, country and region)
export type MarketProfile = {
  coords: [number, number];
  character: string; // 2–3 sentences: the city's economy and business scene
  businesses: string[]; // 5–7 kinds of business important here
  languages: string; // 'English and Arabic', 'English, Arabic, Hindi and Malayalam'
  competition: Competition;
  searchHabits: string; // 1–2 sentences
  industries: IndustrySlug[]; // 3–5 strongest industries
  timeDifference: string; // short, for the facts strip – '1 h 30 min behind India'
  workingHours: string; // 1 sentence: how BMU's working day in India overlaps with theirs
  currency: string; // 'AED', 'USD'
  indianCommunity?: string; // 1 sentence on the Indian / NRI business community – only if well established
};
export type Market = MarketProfile & {
  slug: MarketSlug;
  name: string;
  country: string;
  region: MarketRegion;
};

// ---------- One page, ready for the template ----------

export type PageKind =
  | 'index'
  | 'service-hub'
  | 'industry-hub'
  | 'service-industry'
  | 'service-business'
  | 'service-locality'
  | 'industry-locality'
  | 'service-city'
  | 'service-market'
  | 'service-dubai-area';

export type PageLink = { label: string; href: string; note?: string };

// One card / step / tick in a section; a tag is a small label on it ("#1", "Where SEO helps")
export type SectionItem = { title: string; text?: string; href?: string; tag?: string };

// The blocks a page is built from, in order. The one template knows how to draw each kind.
export type PageSection =
  | { kind: 'prose'; id: string; eyebrow?: string; heading: string; paragraphs: string[] }
  | {
      kind: 'cards' | 'steps' | 'checks';
      id: string;
      eyebrow?: string;
      heading: string;
      intro?: string;
      items: SectionItem[];
    }
  | {
      kind: 'links';
      id: string;
      eyebrow?: string;
      heading: string;
      intro?: string;
      links: PageLink[];
      compact?: boolean; // plain text columns instead of cards – for long lists
    };

export type PseoPage = {
  kind: PageKind;
  path: string; // '/seo/bengaluru/koramangala'
  title: string; // <title>
  description: string; // meta description, under 155 characters
  eyebrow: string; // pill badge above the H1
  h1: string;
  h1Accent?: string; // second line of the H1, in the lime accent
  intro: string;
  facts: { label: string; value: string }[]; // "at a glance" strip under the hero
  sections: PageSection[];
  faqs: Faq[];
  related: { heading: string; links: PageLink[] }[]; // internal links at the bottom
  breadcrumbs: PageLink[];
  cta: { heading: string; text: string };
  indexable: boolean; // false → noindex and left out of the sitemap
  schema: Record<string, unknown>[]; // JSON-LD
};
