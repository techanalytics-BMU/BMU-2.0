import type { AboutStoryContent } from '@/types/about';

export const aboutStory: AboutStoryContent = {
  badge: 'Our story',
  heading: 'The story behind BMU',
  description: 'From selling homes to building the marketing partner we couldn’t find.',
  chapters: [
    {
      title: 'It started with real estate',
      text: 'In 2018 we launched BMU as a real estate agency, and we got very good at it: understanding buyers, running site visits and closing deals. But selling property in a digital market meant we needed marketing, and a lot of it.',
      figure: '2018',
      caption: 'Founded as a real estate agency in Bengaluru',
    },
    {
      title: 'Then came the five-agency problem',
      text: 'One agency handled our marketing. Another built our website. Someone else ran social media, and a fourth team ran our ads. Each had its own invoice and its own timeline, and when results slipped, each one pointed at the others.',
      figure: '5',
      caption: 'Agencies, invoices and timelines – for one business',
    },
    {
      title: 'So we built what we wished existed',
      text: 'That frustration became BMU Marketing: one platform where every digital service a business needs sits under one roof, with one team accountable for the result.',
      figure: '1',
      caption: 'Team for every digital service',
    },
  ],
};
