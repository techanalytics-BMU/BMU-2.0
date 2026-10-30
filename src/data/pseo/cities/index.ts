import type { City, CityProfile } from '@/types/pseo';
import { cityBase } from '../sheet/cities';
import { CITY_SLUGS, type CitySlug } from '../slugs';
import { citiesPart1 } from './part-1';
import { citiesPart2 } from './part-2';

// Only cities with a written profile get pages: every Tier 1–2 city on the sheet (Phase 1) plus a
// few Tier 3 Karnataka cities written earlier. The other Tier 3 cities wait for Phase 3.
const profiles: Partial<Record<CitySlug, CityProfile>> = { ...citiesPart1, ...citiesPart2 };

export const CITY_PAGE_SLUGS = CITY_SLUGS.filter((slug) => slug in profiles);

// The sheet's facts (name, state, tier) plus the written profile
export const cities = Object.fromEntries(
  CITY_PAGE_SLUGS.map((slug) => [slug, { ...cityBase[slug], ...profiles[slug], slug }])
) as Partial<Record<CitySlug, City>>;
