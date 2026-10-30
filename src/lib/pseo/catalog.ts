import {
  DUBAI_AREA_SLUGS,
  MARKET_SLUGS,
  type DubaiAreaSlug,
  type MarketSlug,
} from '@/data/pseo/abroad';
import { businesses } from '@/data/pseo/businesses';
import { CITY_PAGE_SLUGS, cities } from '@/data/pseo/cities';
import { dubaiAreas } from '@/data/pseo/dubai';
import { markets } from '@/data/pseo/markets';
import { industries } from '@/data/pseo/industries';
import { launch } from '@/data/pseo/launch';
import { LOCALITY_PAGE_SLUGS, localities, type PagedLocalitySlug } from '@/data/pseo/localities';
import { services } from '@/data/pseo/services';
import {
  BUSINESS_SLUGS,
  INDUSTRY_SLUGS,
  LOCAL_SERVICE_SLUGS,
  SERVICE_SLUGS,
  type BusinessSlug,
  type CitySlug,
  type IndustrySlug,
  type LocalServiceSlug,
  type ServiceSlug,
} from '@/data/pseo/slugs';
import type { City } from '@/types/pseo';
import { paths } from './paths';

// Which programmatic pages exist, and which of them Google may index.
//
// A page EXISTS only when its entities give it something specific to say (the quality gate):
// - Service × Industry / × Business type: only where the industry or business lists the service
//   in its channel mix
// - Service × Locality / City / Dubai area / city abroad: only the 10 local services (the sheet's
//   "BMU Services" tab), only in places with a written profile
// - Industry × Locality: only the industries in LOCAL_INDUSTRIES
// A page is INDEXABLE when it is also inside the current launch batch (src/data/pseo/launch.ts).

export { businesses, cities, dubaiAreas, industries, localities, markets, services };
export { CITY_PAGE_SLUGS, DUBAI_AREA_SLUGS, LOCALITY_PAGE_SLUGS, MARKET_SLUGS };

// Cities abroad other than Dubai (Dubai's page lives at /[service]/dubai, beside its areas)
export const OTHER_MARKET_SLUGS = MARKET_SLUGS.filter((slug) => slug !== 'dubai');

// Industries in the sheet's priority order (High, Medium, Low – sheet order within each)
const PRIORITY_ORDER = { High: 0, Medium: 1, Low: 2 } as const;
export const INDUSTRY_SLUGS_BY_PRIORITY = [...INDUSTRY_SLUGS].sort(
  (a, b) => PRIORITY_ORDER[industries[a].priority] - PRIORITY_ORDER[industries[b].priority]
);

// A Bengaluru locality that has pages (sheet rows that duplicate another locality are left out)
export type AreaSlug = PagedLocalitySlug;

export const localServices: readonly LocalServiceSlug[] = LOCAL_SERVICE_SLUGS;
export const isLocalService = (slug: ServiceSlug): slug is LocalServiceSlug =>
  (LOCAL_SERVICE_SLUGS as readonly string[]).includes(slug);

// Industries that also get a page per Bengaluru locality – the ones people look for nearby
export const LOCAL_INDUSTRIES = [
  'real-estate',
  'healthcare-and-hospitals',
  'clinics-and-doctors',
  'restaurants-and-food',
] as const satisfies readonly IndustrySlug[];
export const isLocalIndustry = (slug: IndustrySlug) =>
  (LOCAL_INDUSTRIES as readonly string[]).includes(slug);

const inBatch = <T extends string>(batch: readonly T[] | 'all', slug: T) =>
  batch === 'all' || batch.includes(slug);

export const getCity = (slug: CitySlug): City => {
  const city = cities[slug];
  if (!city) throw new Error(`No profile for city "${slug}"`);
  return city;
};

// The services an industry's / business type's channel mix lists, in rank order
export const channelsOf = (industry: IndustrySlug) =>
  industries[industry].channels.filter((channel) => channel.service in services);
export const businessChannelsOf = (business: BusinessSlug) =>
  businesses[business].channels.filter((channel) => channel.service in services);

export const industriesUsing = (service: ServiceSlug) =>
  INDUSTRY_SLUGS.filter((industry) =>
    channelsOf(industry).some((channel) => channel.service === service)
  );
export const businessesUsing = (service: ServiceSlug) =>
  BUSINESS_SLUGS.filter((business) =>
    businessChannelsOf(business).some((channel) => channel.service === service)
  );

// ---------- Existence ----------
export const exists = {
  serviceIndustry: (service: ServiceSlug, industry: IndustrySlug) =>
    channelsOf(industry).some((channel) => channel.service === service),
  serviceBusiness: (service: ServiceSlug, business: BusinessSlug) =>
    businessChannelsOf(business).some((channel) => channel.service === service),
  serviceLocality: (service: ServiceSlug) => isLocalService(service),
  industryLocality: (industry: IndustrySlug) => isLocalIndustry(industry),
  serviceCity: (service: ServiceSlug, city: CitySlug) => isLocalService(service) && city in cities,
  serviceMarket: (service: ServiceSlug) => isLocalService(service),
  serviceDubaiArea: (service: ServiceSlug) => isLocalService(service),
};

// ---------- Indexing ----------
export const indexable = {
  serviceHub: () => launch.serviceHubs,
  industryHub: () => launch.industryHubs,
  serviceIndustry: (_service: ServiceSlug, industry: IndustrySlug) =>
    inBatch(launch.serviceIndustry, industry),
  serviceBusiness: (_service: ServiceSlug, business: BusinessSlug) =>
    inBatch(launch.serviceBusiness, business),
  serviceLocality: (_service: ServiceSlug, area: AreaSlug) => inBatch(launch.serviceLocality, area),
  industryLocality: (_industry: IndustrySlug, area: AreaSlug) =>
    inBatch(launch.industryLocality, area),
  serviceCity: (_service: ServiceSlug, city: CitySlug) =>
    launch.serviceCityTiers.includes(getCity(city).tier),
  serviceMarket: (_service: ServiceSlug, market: MarketSlug) =>
    inBatch(launch.serviceMarket, market),
  serviceDubaiArea: (_service: ServiceSlug, area: DubaiAreaSlug) =>
    inBatch(launch.serviceDubaiArea, area),
};

// Internal links point only at indexable pages in production (no link equity spent on noindex
// pages), but at every page while developing, so all of them can be previewed.
export const linkable = (isIndexable: boolean) =>
  isIndexable || process.env.NODE_ENV !== 'production';

// ---------- Every page, for generateStaticParams and the sitemap ----------
// One sitemap per category (/sitemap/[id].xml); 'pages' holds the hand-built pages and articles
export const SITEMAP_IDS = [
  'pages',
  'hubs',
  'service-industry',
  'service-business',
  'service-locality',
  'industry-locality',
  'service-city',
  'service-dubai',
  'service-international',
] as const;
export type SitemapGroup = Exclude<(typeof SITEMAP_IDS)[number], 'pages'>;
export type CatalogEntry = { path: string; indexable: boolean; group: SitemapGroup };

export const catalog = (): CatalogEntry[] => {
  const entries: CatalogEntry[] = [];
  const add = (group: SitemapGroup, path: string, isIndexable: boolean) =>
    entries.push({ group, path, indexable: isIndexable });

  SERVICE_SLUGS.forEach((service) =>
    add('hubs', paths.serviceHub(service), indexable.serviceHub())
  );
  INDUSTRY_SLUGS.forEach((industry) =>
    add('hubs', paths.industryHub(industry), indexable.industryHub())
  );
  INDUSTRY_SLUGS.forEach((industry) =>
    channelsOf(industry).forEach(({ service }) =>
      add(
        'service-industry',
        paths.serviceIndustry(service, industry),
        indexable.serviceIndustry(service, industry)
      )
    )
  );
  BUSINESS_SLUGS.forEach((business) =>
    businessChannelsOf(business).forEach(({ service }) =>
      add(
        'service-business',
        paths.serviceBusiness(service, business),
        indexable.serviceBusiness(service, business)
      )
    )
  );
  localServices.forEach((service) =>
    LOCALITY_PAGE_SLUGS.forEach((area) =>
      add(
        'service-locality',
        paths.serviceLocality(service, area),
        indexable.serviceLocality(service, area)
      )
    )
  );
  LOCAL_INDUSTRIES.forEach((industry) =>
    LOCALITY_PAGE_SLUGS.forEach((area) =>
      add(
        'industry-locality',
        paths.industryLocality(industry, area),
        indexable.industryLocality(industry, area)
      )
    )
  );
  localServices.forEach((service) =>
    CITY_PAGE_SLUGS.forEach((city) =>
      add('service-city', paths.serviceCity(service, city), indexable.serviceCity(service, city))
    )
  );
  localServices.forEach((service) => {
    add(
      'service-dubai',
      paths.serviceMarket(service, 'dubai'),
      indexable.serviceMarket(service, 'dubai')
    );
    DUBAI_AREA_SLUGS.forEach((area) =>
      add(
        'service-dubai',
        paths.serviceDubaiArea(service, area),
        indexable.serviceDubaiArea(service, area)
      )
    );
  });
  localServices.forEach((service) =>
    OTHER_MARKET_SLUGS.forEach((market) =>
      add(
        'service-international',
        paths.serviceMarket(service, market),
        indexable.serviceMarket(service, market)
      )
    )
  );
  return entries;
};

// "/seo-for-real-estate" → an industry page, "/seo-for-dental-clinics" → a business type page
// (only for pages that exist)
export type ServiceFor =
  | { kind: 'industry'; service: ServiceSlug; industry: IndustrySlug }
  | { kind: 'business'; service: ServiceSlug; business: BusinessSlug };

export const parseServiceFor = (slug: string): ServiceFor | null => {
  const at = slug.indexOf('-for-');
  if (at < 0) return null;
  const service = slug.slice(0, at);
  const target = slug.slice(at + '-for-'.length);
  if (!isService(service)) return null;
  if (isIndustry(target) && exists.serviceIndustry(service, target))
    return { kind: 'industry', service, industry: target };
  if (isBusiness(target) && exists.serviceBusiness(service, target))
    return { kind: 'business', service, business: target };
  return null;
};

export const isService = (slug: string): slug is ServiceSlug => slug in services;
export const isIndustry = (slug: string): slug is IndustrySlug => slug in industries;
export const isBusiness = (slug: string): slug is BusinessSlug => slug in businesses;
export const isLocality = (slug: string): slug is AreaSlug => slug in localities;
export const isCity = (slug: string): slug is CitySlug => slug in cities;
export const isMarket = (slug: string): slug is MarketSlug => slug in markets;
export const isDubaiArea = (slug: string): slug is DubaiAreaSlug => slug in dubaiAreas;
