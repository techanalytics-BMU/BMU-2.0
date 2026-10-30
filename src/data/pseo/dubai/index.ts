import type { DubaiArea, DubaiAreaProfile } from '@/types/pseo';
import { DUBAI_AREA_SLUGS, dubaiAreaBase, type DubaiAreaSlug } from '../abroad';
import { creekAreas } from './creek';
import { newDubaiAreas } from './new-dubai';

// Every Dubai area needs a written profile – a missing one is a type error here
const profiles: Record<DubaiAreaSlug, DubaiAreaProfile> = { ...creekAreas, ...newDubaiAreas };

export const dubaiAreas = Object.fromEntries(
  DUBAI_AREA_SLUGS.map((slug) => [slug, { ...dubaiAreaBase[slug], ...profiles[slug], slug }])
) as Record<DubaiAreaSlug, DubaiArea>;
