import { LandingAllServices, LandingHero } from '@/sections/landing';

// Landing page – add new sections below in display order
export default function Home() {
  return (
    <main>
      <LandingHero />
      <LandingAllServices />
    </main>
  );
}
