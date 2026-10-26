import type { NavLink } from '@/types/navigation';

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Contact', href: '/contact' },
];

export const navCta: NavLink = { label: "Let's Talk Growth", href: '/contact' };
