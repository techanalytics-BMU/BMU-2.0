import type { Metadata } from 'next';
import { WorkHero, WorkListing } from '@/sections/work';

export const metadata: Metadata = {
  title: 'Our Work – BMU Marketing',
  description:
    'Brands, websites, campaigns and films BMU Marketing has built for businesses across Bengaluru and India.',
};

// Work page – add new sections below in display order
export default function WorkPage() {
  return (
    <main>
      <WorkHero />
      <WorkListing />
    </main>
  );
}
