import type { DubaiAreaSlug, MarketSlug } from '@/data/pseo/abroad';
import { SERVICE_SLUGS, type CitySlug, type IndustrySlug } from '@/data/pseo/slugs';
import {
  CITY_PAGE_SLUGS,
  DUBAI_AREA_SLUGS,
  INDUSTRY_SLUGS_BY_PRIORITY,
  LOCALITY_PAGE_SLUGS,
  OTHER_MARKET_SLUGS,
  dubaiAreas,
  getCity,
  indexable,
  industries,
  industriesUsing,
  isCityService,
  isLocalService,
  linkable,
  localities,
  markets,
  services,
  type AreaSlug,
} from '@/lib/pseo/catalog';
import { paths } from '@/lib/pseo/paths';
import { titleCase } from '@/lib/pseo/text';
import type {
  FooterIndustry,
  FooterPlace,
  FooterService,
  ServiceAreasContent,
  ServiceAreasItem,
} from '@/types/footer';

// The footer's link groups, one block each. Every item links to a real programmatic page (built
// from the same data), and only to pages Google may index. Server-only – the footer passes the
// finished lists to its client component, so none of the page content reaches the browser.

// Locations and Industries link to the pages of the service a page is about; Locations to this
// one's everywhere else
const FOOTER_SERVICE = 'digital-marketing';

// The best-known places, first in each column; the rest open with the column's "All …" button
const POPULAR_AREAS: AreaSlug[] = [
  'koramangala',
  'indiranagar',
  'hsr-layout',
  'whitefield',
  'jp-nagar',
  'jayanagar',
  'electronic-city',
  'marathahalli',
  'hebbal',
  'mg-road',
];

const POPULAR_CITIES: CitySlug[] = [
  'mumbai',
  'delhi',
  'chennai',
  'hyderabad',
  'pune',
  'kolkata',
  'ahmedabad',
  'gurugram',
  'kochi',
  'mysuru',
];

const POPULAR_DUBAI_AREAS: DubaiAreaSlug[] = [
  'business-bay',
  'downtown-dubai',
  'dubai-marina',
  'jlt',
  'difc',
  'deira',
  'bur-dubai',
  'al-barsha',
  'jumeirah',
];

const POPULAR_MARKETS: MarketSlug[] = [
  'abu-dhabi',
  'sharjah',
  'riyadh',
  'jeddah',
  'doha',
  'muscat',
  'kuwait-city',
  'new-york',
  'san-francisco',
  'toronto',
];

// Keep only links to pages Google may index (all pages while developing)
const live = (items: (ServiceAreasItem & { live: boolean })[]): ServiceAreasItem[] =>
  items.filter((item) => linkable(item.live)).map(({ live: _live, ...item }) => item);

// The popular ones first, then the rest in their usual order
const popularFirst = <T extends string>(popular: T[], all: readonly T[]) => [
  ...popular,
  ...all.filter((slug) => !popular.includes(slug)),
];

// A place: its name, and its address after the service ('/seo/pune' → 'pune'). Places whose
// pages Google may not index are left out – which pages those are doesn't depend on the service.
const place = (name: string, href: string, isLive: boolean): FooterPlace[] =>
  linkable(isLive) ? [{ name, path: href.slice(`/${FOOTER_SERVICE}/`.length) }] : [];

const areaPlaces = popularFirst(POPULAR_AREAS, LOCALITY_PAGE_SLUGS).flatMap((area) =>
  place(
    localities[area].name,
    paths.serviceLocality(FOOTER_SERVICE, area),
    indexable.serviceLocality(FOOTER_SERVICE, area)
  )
);
const cityPlaces = popularFirst(POPULAR_CITIES, CITY_PAGE_SLUGS).flatMap((city) =>
  place(
    getCity(city).name,
    paths.serviceCity(FOOTER_SERVICE, city),
    indexable.serviceCity(FOOTER_SERVICE, city)
  )
);
const dubaiPlaces = [
  ...place(
    'Dubai',
    paths.serviceMarket(FOOTER_SERVICE, 'dubai'),
    indexable.serviceMarket(FOOTER_SERVICE, 'dubai')
  ),
  ...popularFirst(POPULAR_DUBAI_AREAS, DUBAI_AREA_SLUGS).flatMap((area) =>
    place(
      dubaiAreas[area].name,
      paths.serviceDubaiArea(FOOTER_SERVICE, area),
      indexable.serviceDubaiArea(FOOTER_SERVICE, area)
    )
  ),
];
const marketPlaces = popularFirst(POPULAR_MARKETS, OTHER_MARKET_SLUGS).flatMap((market) =>
  place(
    markets[market].name,
    paths.serviceMarket(FOOTER_SERVICE, market),
    indexable.serviceMarket(FOOTER_SERVICE, market)
  )
);

// Every industry whose pages Google may index (which ones doesn't depend on the service), the
// biggest first
const industryList: FooterIndustry[] = INDUSTRY_SLUGS_BY_PRIORITY.filter((industry) =>
  linkable(indexable.serviceIndustry(FOOTER_SERVICE, industry))
).map((slug) => ({ slug, title: industries[slug].title }));

// Every service: its name, the words its place links start with, which place pages it has, and
// the industries it has a page for (positions in industryList, to keep the page light)
const footerServices = Object.fromEntries(
  SERVICE_SLUGS.map((slug): [string, FooterService] => {
    const using = new Set<string>(industriesUsing(slug));
    return [
      slug,
      {
        title: services[slug].title,
        noun: titleCase(services[slug].agencyNoun),
        places: isCityService(slug),
        local: isLocalService(slug),
        industries: industryList.flatMap((industry, i) => (using.has(industry.slug) ? [i] : [])),
      },
    ];
  })
);

const topIndustries: IndustrySlug[] = INDUSTRY_SLUGS_BY_PRIORITY.slice(0, 16);

export const serviceAreas: ServiceAreasContent = {
  groups: [
    {
      id: 'services',
      label: 'Services',
      heading: 'Marketing Services in Bangalore',
      items: live(
        SERVICE_SLUGS.map((slug) => ({
          label: `${titleCase(services[slug].agencyNoun)} in Bangalore`,
          href: paths.serviceHub(slug),
          live: indexable.serviceHub(),
        }))
      ),
    },
    {
      id: 'industries',
      label: 'Industries',
      heading: 'Industry Marketing in Bangalore',
      items: live(
        topIndustries.map((slug) => ({
          label: `${titleCase(industries[slug].marketingLabel)} in Bangalore`,
          href: paths.industryHub(slug),
          live: indexable.industryHub(),
        }))
      ),
      total: INDUSTRY_SLUGS_BY_PRIORITY.length,
      more: {
        label: `All ${INDUSTRY_SLUGS_BY_PRIORITY.length} industries`,
        href: paths.industries(),
      },
    },
  ],
  links: {
    columns: [
      {
        title: 'Bangalore',
        places: areaPlaces,
        all: `All ${areaPlaces.length} Bangalore areas`,
        local: true,
      },
      { title: 'India', places: cityPlaces, all: `All ${cityPlaces.length} Indian cities` },
      {
        title: 'Dubai',
        places: dubaiPlaces,
        all: `All ${dubaiPlaces.length - 1} Dubai areas`, // the first is Dubai itself
      },
      {
        title: 'International',
        places: marketPlaces,
        all: `All ${marketPlaces.length} cities abroad`,
      },
    ],
    industries: industryList,
    services: footerServices,
    fallback: FOOTER_SERVICE,
  },
};
