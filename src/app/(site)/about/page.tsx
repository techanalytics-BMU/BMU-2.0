import type { Metadata } from 'next';
import {
  AboutBenefits,
  AboutCta,
  AboutFounder,
  AboutHero,
  AboutJourney,
  AboutModel,
  AboutPrinciples,
  AboutStory,
} from '@/sections/about';

export const metadata: Metadata = {
  title: 'About',
  description:
    'From a Bengaluru real estate agency to one team for every digital service – the story, principles and people behind BMU Marketing.',
};

// About page – add new sections below in display order.
// It reads as one story: who we are → why we exist → the one-team idea → how we got here →
// what we promise → what that does for you → the founder's note → let's talk.
export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutModel />
      <AboutJourney />
      <AboutPrinciples />
      <AboutBenefits />
      <AboutFounder />
      <AboutCta />
    </main>
  );
}
