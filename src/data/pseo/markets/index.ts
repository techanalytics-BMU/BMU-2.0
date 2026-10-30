import type { Market, MarketProfile } from '@/types/pseo';
import { MARKET_SLUGS, marketBase, type MarketSlug } from '../abroad';
import { gccMarkets } from './gcc';
import { northAmericaMarkets } from './north-america';

// Every city abroad needs a written profile – a missing one is a type error here
const profiles: Record<MarketSlug, MarketProfile> = { ...gccMarkets, ...northAmericaMarkets };

export const markets = Object.fromEntries(
  MARKET_SLUGS.map((slug) => [slug, { ...marketBase[slug], ...profiles[slug], slug }])
) as Record<MarketSlug, Market>;
