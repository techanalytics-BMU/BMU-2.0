import type { LandingFreeTrialContent } from '@/types/landing';

export const landingFreeTrial: LandingFreeTrialContent = {
  badge: 'Built for Google & AI search',
  headingLine1: 'Start your free',
  headingLine2: 'website trial today',
  note: 'No credit card required. Cancel anytime.',
  cta: { label: 'Get Started', href: '/contact' },
  chip: { label: 'Get Funded', href: '/contact' },
  // Website-builder mock-up (labels are shown in capitals where the design uses them)
  editor: {
    back: 'Pages',
    title: 'We Are Good At',
    search: 'Search questions',
    queue: 'Top questions',
  },
  site: {
    url: 'bmumarketing.in/we-are-good-at',
    links: ['Services', 'Industries', 'Work'],
    cta: 'Book a Call',
    author: 'BMU Marketing',
    status: 'Writing the answer',
    // Questions businesses search on Google and ask ChatGPT / Gemini / Perplexity when looking
    // for an agency – each pairs one of our services with one of our industries
    questions: [
      {
        service: 'SEO',
        industry: 'Real Estate',
        question: 'Best SEO agency for real estate in Bangalore?',
      },
      {
        service: 'Google Ads',
        industry: 'Clinics',
        question: 'How much do Google Ads cost for a clinic?',
      },
      {
        service: 'AI Search',
        industry: 'Restaurants',
        question: 'How do I get my restaurant recommended by ChatGPT?',
      },
      {
        service: 'Local SEO',
        industry: 'Hospitals',
        question: 'How do I rank my hospital on Google Maps?',
      },
      {
        service: 'Meta Ads',
        industry: 'Interior Designers',
        question: 'Do Instagram ads work for interior designers?',
      },
      {
        service: 'Website Design',
        industry: 'Schools',
        question: 'Who builds school websites that bring admissions?',
      },
      {
        service: 'Performance Marketing',
        industry: 'Ecommerce',
        question: 'Best performance marketing agency for ecommerce?',
      },
      {
        service: 'Social Media',
        industry: 'Hotels',
        question: 'Who manages social media for hotels in Bangalore?',
      },
      {
        service: 'Branding',
        industry: 'Startups',
        question: 'How much does branding cost for a startup in India?',
      },
      {
        service: 'WhatsApp Automation',
        industry: 'Builders',
        question: 'Is WhatsApp marketing worth it for builders?',
      },
      {
        service: 'UGC Videos',
        industry: 'Beauty Brands',
        question: 'Where can I find UGC creators for my beauty brand?',
      },
      {
        service: 'Lead Generation',
        industry: 'Manufacturing',
        question: 'How do manufacturers get B2B leads online?',
      },
      {
        service: 'Reputation Management',
        industry: 'Doctors',
        question: 'How can doctors get more 5-star Google reviews?',
      },
    ],
  },
};
