import type { NavLink, ServicesMenuContent } from '@/types/navigation';

// Home is the logo
export const navLinks: NavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', menu: 'services' },
  { label: 'Work', href: '/work' },
  { label: 'Team', href: '/team' },
];

// Buttons on the right: the main one (with the phone icon), then Login
export const navCta: NavLink = { label: 'Call Us', href: '/contact' };
export const navLogin: NavLink = { label: 'Login', href: '/login' }; // no login page yet

// "Services" in the navbar: a hover panel on desktop, a list inside the menu sheet on phones.
// The six service groups match the footer. No links yet – add `href` to make a card clickable.
export const servicesMenu: ServicesMenuContent = {
  items: [
    {
      title: 'Brand & Design',
      description: 'Logos, identity and packaging that look like you.',
      icon: '/icons/common/services/brand-design.svg',
    },
    {
      title: 'Web & AI',
      description: 'Fast websites and AI tools that win you enquiries.',
      icon: '/icons/common/services/web-ai.svg',
    },
    {
      title: 'UGC & Creator Marketing',
      description: 'Creators and reviews that build trust fast.',
      icon: '/icons/common/services/ugc-creator.svg',
    },
    {
      title: 'Social & Personal Brand',
      description: 'Reels and a founder voice people follow.',
      icon: '/icons/common/services/social-brand.svg',
    },
    {
      title: 'Marketing & Visibility',
      description: 'SEO, ads and Maps rankings so buyers find you.',
      icon: '/icons/common/services/marketing-visibility.svg',
    },
    {
      title: 'Content & Production',
      description: 'Shoots, reels and video production.',
      icon: '/icons/common/services/content-production.svg',
    },
  ],
};
