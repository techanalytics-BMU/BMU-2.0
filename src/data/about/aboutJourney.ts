import type { AboutJourneyContent } from '@/types/about';

export const aboutJourney: AboutJourneyContent = {
  badge: 'Our journey',
  heading: 'From real estate',
  accent: 'to everything digital.',
  description: 'Eight years, one business and a lot of lessons – here’s how BMU got here.',
  liveLabel: 'Live',
  milestones: [
    {
      marker: '2018',
      title: 'BMU is founded',
      text: 'A real estate agency in Bengaluru, built on closing deals.',
    },
    {
      marker: 'The spark',
      title: 'Five agencies, one business',
      text: 'Juggling vendors shows us what businesses are missing.',
    },
    {
      marker: 'The build',
      title: 'Research and restarts',
      text: 'Years of testing, failing and rebuilding the model.',
    },
    {
      marker: '2026',
      title: 'BMU Marketing goes live',
      text: 'Every digital service, one team, reasonable prices.',
      current: true,
    },
  ],
};
