import {
  LandingAllServices,
  LandingConversionRate,
  LandingCore,
  LandingHero,
  LandingPricing,
  LandingServiceAreas,
} from '@/sections/landing';

// Landing page – add new sections below in display order
export default function Home() {
  return (
    <main>
      <LandingHero />
      <LandingAllServices />
      <LandingConversionRate />
      <LandingPricing />
      <LandingCore />
      <LandingServiceAreas />
    </main>
  );
}
