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

// The footer's link groups, one tab each. Every item links to a real programmatic page (built
// from the same data), and only to pages Google may index. Server-only – the footer passes the
// finished lists to its client component, so none of the page content reaches the browser.

const FOOTER_SERVICE = 'digital-marketing'; // the service the place links use

// The best-known areas and cities; the rest are a "View all" away
const POPULAR_AREAS: AreaSlug[] = [
  'koramangala',
  'indiranagar',
  'hsr-layout',
  'whitefield',
  'jp-nagar',
  'jayanagar',
  'btm-layout',
  'electronic-city',
  'marathahalli',
  'bellandur',
  'sarjapur-road',
  'hebbal',
  'yelahanka',
  'malleshwaram',
  'rajajinagar',
  'banashankari',
  'basavanagudi',
  'mg-road',
  'bannerghatta-road',
  'hennur',
  'kalyan-nagar',
  'rt-nagar',
  'frazer-town',
  'ulsoor',
  'domlur',
  'kr-puram',
  'mahadevapura',
  'brookefield',
  'kengeri',
  'vijayanagar',
  'yeshwanthpur',
  'sadashivanagar',
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
  'noida',
  'jaipur',
  'chandigarh',
  'kochi',
  'coimbatore',
  'mysuru',
  'mangaluru',
  'hubballi-dharwad',
  'visakhapatnam',
  'vijayawada',
  'indore',
  'bhopal',
  'lucknow',
  'nagpur',
  'surat',
  'vadodara',
  'navi-mumbai',
  'thiruvananthapuram',
  'madurai',
  'bhubaneswar',
  'dehradun',
  'ludhiana',
  'nashik',
  'patna',
];

// Keep only links to pages Google may index (all pages while developing)
const live = (items: (ServiceAreasItem & { live: boolean })[]): ServiceAreasItem[] =>
  items.filter((item) => linkable(item.live)).map(({ live: _live, ...item }) => item);

const label = (where: string) => `Digital Marketing Agency in ${where}`;

const topIndustries: IndustrySlug[] = INDUSTRY_SLUGS_BY_PRIORITY.slice(0, 32);

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
      id: 'bangalore',
      label: 'Bangalore',
      heading: 'Digital Marketing Across Bangalore',
      items: live(
        POPULAR_AREAS.map((area) => ({
          label: label(localities[area].name),
          href: paths.serviceLocality(FOOTER_SERVICE, area),
          live: indexable.serviceLocality(FOOTER_SERVICE, area),
        }))
      ),
      total: LOCALITY_PAGE_SLUGS.length,
      more: {
        label: `All ${LOCALITY_PAGE_SLUGS.length} Bangalore areas`,
        href: `${paths.serviceHub(FOOTER_SERVICE)}#areas-central`,
      },
    },
    {
      id: 'india',
      label: 'India',
      heading: 'Digital Marketing Across India',
      items: live(
        POPULAR_CITIES.map((city) => ({
          label: label(getCity(city).name),
          href: paths.serviceCity(FOOTER_SERVICE, city),
          live: indexable.serviceCity(FOOTER_SERVICE, city),
        }))
      ),
      total: CITY_PAGE_SLUGS.filter((city) => indexable.serviceCity(FOOTER_SERVICE, city)).length,
      more: {
        label: 'All Indian cities',
        href: `${paths.serviceHub(FOOTER_SERVICE)}#cities`,
      },
    },
    {
      id: 'dubai',
      label: 'Dubai',
      heading: 'Digital Marketing Across Dubai',
      items: live([
        {
          label: label('Dubai'),
          href: paths.serviceMarket(FOOTER_SERVICE, 'dubai'),
          live: indexable.serviceMarket(FOOTER_SERVICE, 'dubai'),
        },
        ...DUBAI_AREA_SLUGS.map((area) => ({
          label: label(dubaiAreas[area].name),
          href: paths.serviceDubaiArea(FOOTER_SERVICE, area),
          live: indexable.serviceDubaiArea(FOOTER_SERVICE, area),
        })),
      ]),
    },
    {
      id: 'international',
      label: 'International',
      heading: 'Digital Marketing in the GCC, USA & Canada',
      items: live(
        OTHER_MARKET_SLUGS.map((market) => ({
          label: label(markets[market].name),
          href: paths.serviceMarket(FOOTER_SERVICE, market),
          live: indexable.serviceMarket(FOOTER_SERVICE, market),
        }))
      ),
    },
  ],
};
