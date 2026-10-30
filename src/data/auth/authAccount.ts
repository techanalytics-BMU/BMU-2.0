import type { AuthAccountContent } from '@/types/auth';

// Where a client lands after logging in (/account) – until the client dashboard is built
export const authAccount: AuthAccountContent = {
  headingStart: 'You’re in, {name}.',
  headingStartNoName: 'You’re in.',
  headingHighlight: 'Welcome.',
  description:
    'Your account is created. Your client dashboard is coming soon – we’ll let you know when it’s ready.',
  notSetUp:
    'You’re logged in, but your account isn’t fully set up yet. Please contact your BMU admin.',
  backToSite: { label: 'Back to the website', href: '/' },
  logout: 'Log out',
};
