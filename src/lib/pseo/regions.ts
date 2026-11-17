import type { MarketSlug } from '@/data/pseo/abroad';
import type { CitySlug, ServiceSlug } from '@/data/pseo/slugs';
import { cities, indexable, isCityService, linkable, markets, services } from './catalog';
import { paths } from './paths';

// A service with location pages has one for India (the service page, written for Bengaluru), one
// per Indian city, and one for Dubai and each city abroad. Two things send people in another
// place to their own version:
// 1. hreflang – the service page and each country's main page name each other, so Google shows a
//    searcher in the UAE the Dubai page instead of the Bengaluru one, and so on.
// 2. nearbyFor() – a line under the hero offering the visitor's own city's page (via /api/nearby).
// Never an automatic redirect: Google crawls from the US, so it would only ever see New York.

type Country = 'IN' | 'AE' | 'SA' | 'QA' | 'OM' | 'KW' | 'BH' | 'US' | 'CA';

// Each country's name in a sentence, its hreflang and its main page (India's is the service page)
const COUNTRIES: Record<Country, { name: string; hreflang: string; main: MarketSlug | null }> = {
  IN: { name: 'India', hreflang: 'en-IN', main: null },
  AE: { name: 'the UAE', hreflang: 'en-AE', main: 'dubai' },
  SA: { name: 'Saudi Arabia', hreflang: 'en-SA', main: 'riyadh' },
  QA: { name: 'Qatar', hreflang: 'en-QA', main: 'doha' },
  OM: { name: 'Oman', hreflang: 'en-OM', main: 'muscat' },
  KW: { name: 'Kuwait', hreflang: 'en-KW', main: 'kuwait-city' },
  BH: { name: 'Bahrain', hreflang: 'en-BH', main: 'manama' },
  US: { name: 'the US', hreflang: 'en-US', main: 'new-york' },
  CA: { name: 'Canada', hreflang: 'en-CA', main: 'toronto' },
};

const COUNTRY_CODES: Record<string, Country> = {
  'United Arab Emirates': 'AE',
  'Saudi Arabia': 'SA',
  Qatar: 'QA',
  Oman: 'OM',
  Kuwait: 'KW',
  Bahrain: 'BH',
  'United States': 'US',
  Canada: 'CA',
};

// Other spellings of a city, as a visitor's location may give it
const ALIASES: Record<string, string> = {
  bangalore: 'bengaluru',
  'bengaluru-urban': 'bengaluru',
  bombay: 'mumbai',
  madras: 'chennai',
  calcutta: 'kolkata',
  gurgaon: 'gurugram',
  mysore: 'mysuru',
  cochin: 'kochi',
  trivandrum: 'thiruvananthapuram',
  baroda: 'vadodara',
  kuwait: 'kuwait-city',
  'al-kuwait': 'kuwait-city',
  washington: 'washington-dc',
};

type Place = { key: string; name: string; country: Country; path: string; indexable: boolean };

const india = (service: ServiceSlug): Place => ({
  key: 'bengaluru',
  name: 'Bengaluru',
  country: 'IN',
  path: paths.serviceHub(service),
  indexable: indexable.serviceHub(),
});

const city = (service: ServiceSlug, slug: CitySlug): Place => ({
  key: slug,
  name: cities[slug]?.name ?? slug,
  country: 'IN',
  path: paths.serviceCity(service, slug),
  indexable: indexable.serviceCity(service, slug),
});

const market = (service: ServiceSlug, slug: MarketSlug): Place => ({
  key: slug,
  name: markets[slug].name,
  country: COUNTRY_CODES[markets[slug].country],
  path: paths.serviceMarket(service, slug),
  indexable: indexable.serviceMarket(service, slug),
});

const mainPlace = (service: ServiceSlug, country: Country) => {
  const main = COUNTRIES[country].main;
  return main ? market(service, main) : india(service);
};

// The service and the place a page is written for, from its address – only pages of services
// with location pages: /services/seo, /seo/bengaluru/indiranagar, /seo/pune, /seo/dubai/deira…
function placeOf(path: string): { service: ServiceSlug; place: Place } | null {
  const parts = path.split('/').filter(Boolean);
  const service = (parts[0] === 'services' ? parts[1] : parts[0]) as ServiceSlug;
  if (!(service in services) || !isCityService(service)) return null;

  if (parts[0] === 'services') return parts.length === 2 ? { service, place: india(service) } : null;
  const where = parts[1];
  if (where === 'bengaluru') return { service, place: india(service) };
  if (where in markets) return { service, place: market(service, where as MarketSlug) };
  if (where in cities) return { service, place: city(service, where as CitySlug) };
  return null;
}

// Whether a page has versions for other places – those show the visitor's own (PseoNearby)
export const hasPlaces = (path: string) => placeOf(path) !== null;

// hreflang links for the service page and each country's main page; none for the other pages
export function regionalAlternates(path: string): Record<string, string> | undefined {
  const here = placeOf(path);
  if (!here) return undefined;
  const set = (Object.keys(COUNTRIES) as Country[])
    .map((country) => mainPlace(here.service, country))
    .filter((place) => place.indexable);
  if (set.length < 2 || !set.some((place) => place.path === path)) return undefined;

  return {
    ...Object.fromEntries(set.map((place) => [COUNTRIES[place.country].hreflang, place.path])),
    'x-default': india(here.service).path,
  };
}

const slugify = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

// The visitor's own city's page, if this service has one there
function cityPage(service: ServiceSlug, country: Country, cityName: string): Place | null {
  const slug = ALIASES[slugify(cityName)] ?? slugify(cityName);
  if (!slug) return null;
  let place: Place | null = null;
  if (country === 'IN') {
    if (slug === 'bengaluru') place = india(service);
    else if (slug in cities) place = city(service, slug as CitySlug);
  } else if (slug in markets && COUNTRY_CODES[markets[slug as MarketSlug].country] === country) {
    place = market(service, slug as MarketSlug);
  }
  return place && linkable(place.indexable) ? place : null;
}

export type Nearby = { lead: string; label: string; href: string };

// What to offer a visitor on this page: their own city's page if there is one, else – when they
// are in another country – that country's main page. Nothing if they're already in the right place.
export function nearbyFor(path: string, countryCode: string, cityName: string): Nearby | null {
  const here = placeOf(path);
  const country = countryCode.toUpperCase() as Country;
  if (!here || !(country in COUNTRIES)) return null;

  const own = cityPage(here.service, country, cityName);
  const target = own ?? (country !== here.place.country ? mainPlace(here.service, country) : null);
  if (!target || target.key === here.place.key || !linkable(target.indexable)) return null;

  const service = services[here.service].name;
  return {
    lead: `In ${own ? own.name : COUNTRIES[country].name}?`,
    label: `${service.charAt(0).toUpperCase()}${service.slice(1)} in ${target.name}`,
    href: target.path,
  };
}
