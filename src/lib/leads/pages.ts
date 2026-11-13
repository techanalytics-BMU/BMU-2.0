import 'server-only';
import { dubaiAreas } from '@/data/pseo/dubai';
import { businesses } from '@/data/pseo/businesses';
import { cities } from '@/data/pseo/cities';
import { serviceGroups } from '@/data/pseo/groups';
import { industries } from '@/data/pseo/industries';
import { localities } from '@/data/pseo/localities';
import { markets } from '@/data/pseo/markets';
import { services } from '@/data/pseo/services';
import {
  isCity,
  isDubaiArea,
  isIndustry,
  isLocality,
  isMarket,
  isService,
  isServiceGroup,
  parseServiceFor,
} from '@/lib/pseo/catalog';

// The page a lead was sent from, as a name the team can read in the dashboard –
// '/digital-marketing/mumbai' → 'Digital Marketing · Mumbai'. Worked out from the address with the
// site's own names (the URL patterns are in src/lib/pseo/paths.ts), so every lead ever saved gets
// one – no extra column in the database.

const SITE_PAGES: Record<string, string> = {
  '/': 'Home',
  '/about': 'About',
  '/team': 'Team',
  '/work': 'Work',
  '/contact': 'Contact page',
  '/blog': 'Blog',
  '/privacy-policy': 'Privacy policy',
  '/services': 'All services',
  '/industries': 'All industries',
};

/** 'year-end-sale-ads' → 'Year End Sale Ads' – for addresses the site has no name for */
const words = (slug: string) =>
  decodeURIComponent(slug)
    .split('-')
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');

export function pageName(path: string | null): string | null {
  if (!path) return null;
  const clean = path.split(/[?#]/)[0].replace(/\/+$/, '') || '/';
  if (SITE_PAGES[clean]) return SITE_PAGES[clean];

  const [first, second, third, fourth] = clean.slice(1).split('/');

  // /services/[group] and /services/[service]
  if (first === 'services' && second && !third) {
    if (isServiceGroup(second)) return serviceGroups[second].group;
    if (isService(second)) return services[second].title;
  }

  // /industries/[industry] and /industries/[industry]/bengaluru/[area]
  if (first === 'industries' && second && isIndustry(second)) {
    const industry = industries[second].title;
    if (third === 'bengaluru' && fourth && isLocality(fourth)) {
      return `${industry} · ${localities[fourth].name}`;
    }
    return industry;
  }

  if (first === 'blog' && second) return `Blog · ${words(second)}`;

  // /[service]/[city or city abroad], /[service]/bengaluru/[area], /[service]/dubai/[area]
  if (isService(first) && second) {
    const service = services[first].title;
    if (second === 'bengaluru' && third && isLocality(third)) {
      return `${service} · ${localities[third].name}, Bengaluru`;
    }
    if (second === 'dubai' && third && isDubaiArea(third)) {
      return `${service} · ${dubaiAreas[third].name}, Dubai`;
    }
    if (!third && isCity(second)) return `${service} · ${cities[second]?.name ?? words(second)}`;
    if (!third && isMarket(second)) return `${service} · ${markets[second].name}`;
  }

  // /[service]-for-[industry or business type]
  if (first && !second) {
    const match = parseServiceFor(first);
    if (match) {
      const audience =
        match.kind === 'industry' ? industries[match.industry].title : businesses[match.business].title;
      return `${services[match.service].title} for ${audience}`;
    }
  }

  // Anything else: the last part of the address, in words
  return words(clean.split('/').pop() ?? clean) || clean;
}
