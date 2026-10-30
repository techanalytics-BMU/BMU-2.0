import type { Business, BusinessProfile } from '@/types/pseo';
import { businessBase } from '../sheet/businesses';
import { BUSINESS_SLUGS, type BusinessSlug } from '../slugs';
import { businessesPart1 } from './part-1';
import { businessesPart2 } from './part-2';

// Every business type needs a written profile – a missing one is a type error here
const profiles: Record<BusinessSlug, BusinessProfile> = { ...businessesPart1, ...businessesPart2 };

// The sheet's facts plus the written profile. `name` is the profile's in-sentence form; the
// sheet's own label is kept as `sheetName`.
export const businesses = Object.fromEntries(
  BUSINESS_SLUGS.map((slug) => [
    slug,
    { ...businessBase[slug], ...profiles[slug], slug, sheetName: businessBase[slug].name },
  ])
) as Record<BusinessSlug, Business>;
