import type { TeamMembersContent } from '@/types/team';

// The team, in display order. `photo` is a portrait .webp in public/images/team/members/: a colour
// cut-out with a transparent background, framed
// to fit the photo area (lowest 60% of the pill) at 0.65 wide : 1 tall – shown black and white, in colour on hover.
// `funFact` is the sticker that pops on when a pill is hovered – keep it short and fun.
export const teamMembers: TeamMembersContent = {
  badge: 'Our team',
  heading: 'One team, every channel',
  description:
    'The specialists who plan, create and run your marketing – SEO, ads, social, video and web.',
  members: [
    {
      name: 'Yashas',
      role: 'Branch Manager',
      photo: '/images/team/members/team-members-yashas-pill.webp',
      tone: 'mist',
      funFact: 'Runs on calendar invites',
    },
    {
      name: 'Harisha',
      role: 'UI/UX & Development Lead',
      photo: '/images/team/members/team-members-harisha-pill.webp',
      tone: 'mist',
      funFact: 'Designs it, then builds it',
    },
    {
      name: 'Prajna',
      role: 'HR & Finance',
      photo: '/images/team/members/team-members-prajna-pill.webp',
      tone: 'mist',
      funFact: 'Knows where every rupee went',
    },
    {
      name: 'Tanmayadev',
      role: 'SEO Analyst',
      photo: '/images/team/members/team-members-tanmayadev-pill.webp',
      tone: 'mist',
      funFact: 'Googles things for fun',
    },
    {
      name: 'Vinod',
      role: 'Senior Developer',
      photo: '/images/team/members/team-members-vinod-pill.webp',
      tone: 'mist',
      funFact: 'Has seen every bug twice',
    },
    {
      name: 'Dhanush',
      role: 'Full Stack Developer',
      photo: '/images/team/members/team-members-dhanush-pill.webp',
      tone: 'mist',
      funFact: 'Fluent in console.log',
    },
    {
      name: 'Hariprasath',
      role: 'Full Stack Developer',
      photo: '/images/team/members/team-members-hariprasath-pill.webp',
      tone: 'mist',
      funFact: 'It works on my machine',
    },
    {
      name: 'Raffi',
      role: 'Graphic Designer',
      photo: '/images/team/members/team-members-raffi-pill.webp',
      tone: 'mist',
      funFact: 'Has opinions about kerning',
    },
    {
      name: 'Tushara',
      role: 'UI/UX Designer',
      photo: '/images/team/members/team-members-tushara-pill.webp',
      tone: 'mist',
      funFact: 'Counts pixels in her sleep',
    },
    {
      name: 'Bhupal',
      role: 'Video Editor',
      photo: '/images/team/members/team-members-bhupal-pill.webp',
      tone: 'mist',
      funFact: 'Ctrl+Z is a lifestyle',
    },
    {
      name: 'Yethindra',
      role: 'Video Editor',
      photo: '/images/team/members/team-members-yethindra-pill.webp',
      tone: 'mist',
      funFact: 'Says “one more take” a lot',
    },
    {
      name: 'Lokeshwari',
      role: 'Social Media Manager',
      photo: '/images/team/members/team-members-lokeshwari-pill.webp',
      tone: 'mist',
      funFact: 'Fluent in emoji',
    },
  ],
  hiring: {
    title: 'This could be you',
    text: 'We’re hiring',
    href: '/contact',
  },
};
