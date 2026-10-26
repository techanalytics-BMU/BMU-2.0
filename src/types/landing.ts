import type { NavLink } from './navigation';

export type LandingHeroContent = {
  badge: string;
  headingLine1: string;
  headingLine2: string;
  description: string;
  primaryCta: NavLink;
  secondaryCta: NavLink;
};

export type LandingAllServicesTile = {
  title: string;
  image?: string; // .webp screenshot – a white placeholder with the title is shown until set
};

export type LandingAllServicesContent = {
  heading: string;
  subheading: string;
  tiles: LandingAllServicesTile[];
};
