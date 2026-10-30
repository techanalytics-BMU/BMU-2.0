import type { DubaiAreaSlug, MarketSlug } from '@/data/pseo/abroad';
import type { ServiceGroupSlug } from '@/data/pseo/groups';
import type {
  BusinessSlug,
  CitySlug,
  IndustrySlug,
  LocalitySlug,
  ServiceSlug,
} from '@/data/pseo/slugs';

// Every programmatic URL pattern, in one place (from the pSEO plan)
export const paths = {
  services: () => '/services',
  industries: () => '/industries',
  serviceGroup: (group: ServiceGroupSlug) => `/services/${group}`,
  serviceHub: (service: ServiceSlug) => `/services/${service}`,
  industryHub: (industry: IndustrySlug) => `/industries/${industry}`,
  serviceIndustry: (service: ServiceSlug, industry: IndustrySlug) => `/${service}-for-${industry}`,
  serviceBusiness: (service: ServiceSlug, business: BusinessSlug) => `/${service}-for-${business}`,
  serviceLocality: (service: ServiceSlug, area: LocalitySlug) => `/${service}/bengaluru/${area}`,
  industryLocality: (industry: IndustrySlug, area: LocalitySlug) =>
    `/industries/${industry}/bengaluru/${area}`,
  serviceCity: (service: ServiceSlug, city: CitySlug) => `/${service}/${city}`,
  serviceMarket: (service: ServiceSlug, market: MarketSlug) => `/${service}/${market}`,
  serviceDubaiArea: (service: ServiceSlug, area: DubaiAreaSlug) => `/${service}/dubai/${area}`,
};
