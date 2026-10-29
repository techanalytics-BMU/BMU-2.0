import type { TeamMembersContent } from '@/types/team';

// PLACEHOLDERS – replace the names and roles, and add `photo` (portrait .webp in
// public/images/team/members/). Photos can be in colour: they are shown black and white.
// `funFact` is the sticker that pops on when a pill is hovered – keep it short and fun.
export const teamMembers: TeamMembersContent = {
  badge: 'Our team',
  heading: 'One team, every channel',
  description:
    'The specialists who plan, create and run your marketing – SEO, ads, social, video and web.',
  members: [
    {
      name: 'Manager Name',
      role: 'Manager',
      tone: 'lime',
      funFact: 'Runs on calendar invites',
    },
    { name: 'Team Member', role: 'SEO Lead', tone: 'mist', funFact: 'Googles things for fun' },
    {
      name: 'Team Member',
      role: 'Performance Marketer',
      tone: 'sand',
      funFact: 'Dreams in ROAS',
    },
    {
      name: 'Team Member',
      role: 'Brand Designer',
      tone: 'sage',
      funFact: 'Has opinions about kerning',
    },
    {
      name: 'Team Member',
      role: 'Video Producer',
      tone: 'mist',
      funFact: 'Says “one more take” a lot',
    },
    {
      name: 'Team Member',
      role: 'Social Media Manager',
      tone: 'sand',
      funFact: 'Fluent in emoji',
    },
    {
      name: 'Team Member',
      role: 'Web Developer',
      tone: 'sage',
      funFact: 'It works on my machine',
    },
  ],
  hiring: {
    title: 'This could be you',
    text: 'We’re hiring',
    href: '/contact',
  },
};
