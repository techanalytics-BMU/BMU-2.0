import type { Industry, IndustryProfile } from '@/types/pseo';
import { industryBase } from '../sheet/industries';
import { INDUSTRY_SLUGS, type IndustrySlug } from '../slugs';
import { industriesPart1 } from './part-1';
import { industriesPart2 } from './part-2';
import { industriesPart3 } from './part-3';

// Every one of the 58 industries needs a written profile – a missing one is a type error here
const profiles: Record<IndustrySlug, IndustryProfile> = {
  ...industriesPart1,
  ...industriesPart2,
  ...industriesPart3,
};

// The sheet's facts plus the written profile. `name` is the profile's in-sentence form; the
// sheet's own label is kept as `sheetName`.
export const industries = Object.fromEntries(
  INDUSTRY_SLUGS.map((slug) => [
    slug,
    { ...industryBase[slug], ...profiles[slug], slug, sheetName: industryBase[slug].name },
  ])
) as Record<IndustrySlug, Industry>;
