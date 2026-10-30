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
  linkable,
  localities,
  markets,
  services,
  type AreaSlug,
} from '@/lib/pseo/catalog';
import { paths } from '@/lib/pseo/paths';
import { titleCase } from '@/lib/pseo/text';
import type { ServiceAreasContent, ServiceAreasItem } from '@/types/footer';

// The footer's link groups, one block each. Every item links to a real programmatic page (built
// from the same data), and only to pages Google may index. Server-only – the footer passes the
// finished lists to its client component, so none of the page content reaches the browser.

const FOOTER_SERVICE = 'digital-marketing'; // the service the place links use

// The best-known places in each column; the rest are an "All …" link away
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

const label = (where: string) => `Digital Marketing Agency in ${where}`;
const hubSection = (id: string) => `${paths.serviceHub(FOOTER_SERVICE)}#${id}`;

const topIndustries: IndustrySlug[] = INDUSTRY_SLUGS_BY_PRIORITY.slice(0, 16);

// How many place pages each column stands for (the Locations count badge adds them up)
const indianCities = CITY_PAGE_SLUGS.filter((city) => indexable.serviceCity(FOOTER_SERVICE, city));
const placeCount =
  LOCALITY_PAGE_SLUGS.length +
  indianCities.length +
  DUBAI_AREA_SLUGS.length +
  1 + // Dubai itself
  OTHER_MARKET_SLUGS.length;

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
    {
      id: 'locations',
      label: 'Locations',
      heading: 'Digital Marketing Across Bangalore, India & Abroad',
      total: placeCount,
      columns: [
        {
          title: 'Bangalore',
          items: live(
            POPULAR_AREAS.map((area) => ({
              label: label(localities[area].name),
              href: paths.serviceLocality(FOOTER_SERVICE, area),
              live: indexable.serviceLocality(FOOTER_SERVICE, area),
            }))
          ),
          more: {
            label: `All ${LOCALITY_PAGE_SLUGS.length} Bangalore areas`,
            href: hubSection('areas-central'),
          },
        },
        {
          title: 'India',
          items: live(
            POPULAR_CITIES.map((city) => ({
              label: label(getCity(city).name),
              href: paths.serviceCity(FOOTER_SERVICE, city),
              live: indexable.serviceCity(FOOTER_SERVICE, city),
            }))
          ),
          more: { label: `All ${indianCities.length} Indian cities`, href: hubSection('cities') },
        },
        {
          title: 'Dubai',
          items: live([
            {
              label: label('Dubai'),
              href: paths.serviceMarket(FOOTER_SERVICE, 'dubai'),
              live: indexable.serviceMarket(FOOTER_SERVICE, 'dubai'),
            },
            ...POPULAR_DUBAI_AREAS.map((area) => ({
              label: label(dubaiAreas[area].name),
              href: paths.serviceDubaiArea(FOOTER_SERVICE, area),
              live: indexable.serviceDubaiArea(FOOTER_SERVICE, area),
            })),
          ]),
          more: { label: `All ${DUBAI_AREA_SLUGS.length} Dubai areas`, href: hubSection('dubai') },
        },
        {
          title: 'International',
          items: live(
            POPULAR_MARKETS.map((market) => ({
              label: label(markets[market].name),
              href: paths.serviceMarket(FOOTER_SERVICE, market),
              live: indexable.serviceMarket(FOOTER_SERVICE, market),
            }))
          ),
          more: {
            label: `All ${OTHER_MARKET_SLUGS.length} cities abroad`,
            href: hubSection('international'),
          },
        },
      ],
    },
  ],
};
