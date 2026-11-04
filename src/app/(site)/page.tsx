import type { Metadata } from 'next';
import { businessSchema, websiteSchema } from '@/lib/pseo/schema';
import {
  LandingAllServices,
  LandingConversionRate,
  LandingCore,
  LandingFreeTrial,
  LandingHero,
  LandingPricing,
} from '@/sections/landing';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

// Structured data for Google, as one JSON-LD graph ("<" escaped so the text can never close the
// script tag) – the same way the pSEO and blog pages add theirs
const schema = JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [websiteSchema(), businessSchema()],
}).replace(/</g, '\\u003c');

// Landing page – add new sections below in display order
export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <LandingHero />
      <LandingAllServices />
      <LandingConversionRate />
      <LandingPricing />
      <LandingCore />
      <LandingFreeTrial />
    </main>
  );
}
