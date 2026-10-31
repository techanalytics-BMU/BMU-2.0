import type { NavLink, ServicesMenuContent } from '@/types/navigation';

// Home is the logo
export const navLinks: NavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', menu: 'services' },
  { label: 'Work', href: '/work' },
  { label: 'Team', href: '/team' },
];

// Buttons on the right: the main one (with the phone icon), then Login – which becomes Dashboard
// (admins, managers, SEO writers) or My account (clients) while someone is logged in
export const navCta: NavLink = { label: 'Call Us', href: '/contact' };
export const navLogin: NavLink = { label: 'Login', href: '/login' };
export const navDashboard: NavLink = { label: 'Dashboard', href: '/dashboard' };
export const navAccount: NavLink = { label: 'My account', href: '/account' };

// "Services" in the navbar: a hover panel on desktop, a list inside the menu sheet on phones.
// The six service groups, each opening its overview page (src/data/pseo/groups.ts).
export const servicesMenu: ServicesMenuContent = {
  items: [
    {
      title: 'Brand & Design',
      href: '/services/brand-and-design',
      description: 'Logos, identity and packaging that look like you.',
      icon: '/icons/common/services/brand-design.svg',
    },
    {
      title: 'Web & AI',
      href: '/services/web-and-ai',
      description: 'Fast websites and AI tools that win you enquiries.',
      icon: '/icons/common/services/web-ai.svg',
    },
    {
      title: 'UGC & Creator Marketing',
      href: '/services/ugc-and-creator-marketing',
      description: 'Creators and reviews that build trust fast.',
      icon: '/icons/common/services/ugc-creator.svg',
    },
    {
      title: 'Social & Personal Brand',
      href: '/services/social-and-personal-brand',
      description: 'Reels and a founder voice people follow.',
      icon: '/icons/common/services/social-brand.svg',
    },
    {
      title: 'Marketing & Visibility',
      href: '/services/marketing-and-visibility',
      description: 'SEO, ads and Maps rankings so buyers find you.',
      icon: '/icons/common/services/marketing-visibility.svg',
    },
    {
      title: 'Content & Production',
      href: '/services/content-and-production',
      description: 'Shoots, reels and video production.',
      icon: '/icons/common/services/content-production.svg',
    },
  ],
};
