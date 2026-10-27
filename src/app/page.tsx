import {
  LandingAllServices,
  LandingConversionRate,
  LandingCore,
  LandingFreeTrial,
  LandingHero,
  LandingPricing,
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
      <LandingFreeTrial />
    </main>
  );
}
