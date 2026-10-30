import type { Locality, LocalityProfile } from '@/types/pseo';
import { localityBase } from '../sheet/localities';
import { LOCALITY_SLUGS, type LocalitySlug } from '../slugs';
import { centralLocalities } from './central';
import { eastLocalities } from './east';
import { northLocalities } from './north';
import { southLocalities } from './south';
import { westLocalities } from './west';

// Sheet rows that name a locality already listed under another spelling. They get no pages of
// their own (two pages for one place would compete in Google) – their URLs redirect instead
// (see next.config.ts).
export const LOCALITY_ALIASES = { krishnarajapuram: 'kr-puram' } as const satisfies Partial<
  Record<LocalitySlug, LocalitySlug>
>;
type AliasSlug = keyof typeof LOCALITY_ALIASES;
export type PagedLocalitySlug = Exclude<LocalitySlug, AliasSlug>;

// Every other locality needs a written profile – a missing one is a type error here
const profiles: Record<PagedLocalitySlug, LocalityProfile> = {
  ...centralLocalities,
  ...northLocalities,
  ...eastLocalities,
  ...southLocalities,
  ...westLocalities,
};

export const LOCALITY_PAGE_SLUGS = LOCALITY_SLUGS.filter(
  (slug): slug is PagedLocalitySlug => !(slug in LOCALITY_ALIASES)
);

// The sheet's facts (name, zone, PIN code) plus the written profile
export const localities = Object.fromEntries(
  LOCALITY_PAGE_SLUGS.map((slug) => [slug, { ...localityBase[slug], ...profiles[slug], slug }])
) as Record<PagedLocalitySlug, Locality>;
