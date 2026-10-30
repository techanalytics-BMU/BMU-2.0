import type { DubaiAreaSlug, MarketSlug } from './abroad';
import type { CityBase } from './sheet/cities';
import type { BusinessSlug, IndustrySlug, LocalitySlug } from './slugs';

// Which programmatic pages Google may index right now. Every page is built and can be previewed,
// but pages outside the current batch get "noindex" and are left out of the sitemap. To publish
// in smaller batches, replace an 'all' with a list of slugs and widen it once Search Console
// shows most of the last batch indexed.

type Batch<T extends string> = readonly T[] | 'all';

export const launch: {
  serviceHubs: boolean;
  industryHubs: boolean;
  serviceIndustry: Batch<IndustrySlug>; // /[service]-for-[industry], by industry
  serviceBusiness: Batch<BusinessSlug>; // /[service]-for-[business], by business type
  serviceLocality: Batch<LocalitySlug>; // /[service]/bengaluru/[area], by area
  serviceCityTiers: readonly CityBase['tier'][]; // /[service]/[city], by the sheet's city tier
  serviceDubaiArea: Batch<DubaiAreaSlug>; // /[service]/dubai/[area], by area
  serviceMarket: Batch<MarketSlug>; // /[service]/[market] – Dubai and cities abroad
  industryLocality: Batch<LocalitySlug>; // /industries/[industry]/bengaluru/[area], by area
} = {
  // Phase 1 of the sheet's plan (patterns 1, 2a, 3 and 5), plus the high-priority business types
  serviceHubs: true,
  industryHubs: true,
  serviceIndustry: 'all',
  serviceBusiness: 'all',
  serviceLocality: 'all',
  serviceCityTiers: [1, 2], // Tier 3 cities are Phase 3
  // Dubai and the UAE & GCC / USA & Canada cities (not on the sheet – added for the footer)
  serviceDubaiArea: 'all',
  serviceMarket: 'all',
  // Not in the sheet's plan yet – built for preview only
  industryLocality: [],
};
