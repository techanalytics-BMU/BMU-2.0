import type { ServiceGroupContent } from '@/types/pseo';

// The six service groups – the cards in the navbar's Services menu – each with an overview page at
// /services/[group] (built in src/lib/pseo/pages.ts → serviceGroupPage). Content and prices are
// BMU's own, from the live bmumarketing.in group pages. An offer's `service` links its card to that
// service's page here; offers without one (no page of their own yet) are plain cards.
export const serviceGroups = {
  'marketing-and-visibility': {
    group: 'Marketing & Visibility',
    tagline: 'Be seen by the right people',
    intro:
      'Paid campaigns, SEO and local search planned around qualified leads, so the right people find you first.',
    price: 'From ₹35,000/month',
    offers: [
      {
        title: 'Digital Marketing',
        text: 'Meta and Google campaigns planned around cost per qualified lead, optimised every week.',
        price: 'From ₹25,000',
        service: 'digital-marketing',
      },
      {
        title: 'ChatGPT Ads',
        text: 'Show up where people now ask AI assistants for recommendations in your category.',
        price: 'From ₹20,000',
        service: 'ai-search-visibility',
      },
      {
        title: 'SEO',
        text: 'Technical fixes, keyword plans and content that build rankings month after month.',
        price: 'From ₹15,000',
        service: 'seo',
      },
      {
        title: 'Google Business Profile',
        text: 'Setup, posts, photos and review replies that lift your local search visibility.',
        price: 'From ₹7,500',
        service: 'google-business-profile',
      },
    ],
    stats: [
      { value: '4', label: 'Channels covered', text: 'Meta, Google, ChatGPT and local search' },
      { value: 'Weekly', label: 'Optimisation', text: 'Budgets, bids and creative reviewed' },
      { value: '3 days', label: 'Written plan', text: 'Strategy agreed before any spend' },
      { value: 'Monthly', label: 'Reporting', text: 'What worked and what’s next' },
    ],
    phases: [
      {
        title: 'Audit and set up',
        points: [
          'Ad account and tracking audit',
          'Google Business Profile cleanup',
          'Keyword and audience research',
        ],
      },
      {
        title: 'Launch',
        points: ['Meta and Google campaigns live', 'SEO fixes and first content', 'ChatGPT Ads test'],
      },
      {
        title: 'Scale',
        points: [
          'Budget moved to what works',
          'Local ranking and review push',
          'Monthly report and next plan',
        ],
      },
    ],
    cta: {
      heading: 'Tell us what you’re trying to grow',
      text: 'A 30-minute call, a look at your current numbers, and a written plan within three working days. No deck, no pressure.',
    },
  },

  'brand-and-design': {
    group: 'Brand & Design',
    tagline: 'One system, every format',
    intro:
      'Identity, guidelines, packaging, UI/UX and pitch decks designed as one coherent system.',
    price: 'From ₹1,20,000 per project',
    offers: [
      {
        title: 'Complete Branding',
        text: 'Strategy, identity, guidelines and brand assets built as one coherent system.',
        price: 'From ₹40,000',
        service: 'brand-identity',
      },
      {
        title: 'Logo & Brand Kit',
        text: 'A logo with colours, typography and ready-to-use files for every format.',
        price: 'From ₹15,000',
        service: 'brand-identity',
      },
      {
        title: 'Graphic Designing',
        text: 'Social posts, ads, brochures and print material designed on brand.',
        price: 'From ₹10,000',
      },
    ],
    stats: [
      { value: '3', label: 'Design services', text: 'Branding, brand kits and graphics' },
      { value: '1', label: 'Brand system', text: 'One identity across every format' },
      { value: 'All', label: 'Formats covered', text: 'Social, ads, packaging and print' },
      { value: '3 days', label: 'Written plan', text: 'Scope agreed before design starts' },
    ],
    phases: [
      {
        title: 'Discover',
        points: ['Brand and competitor audit', 'Positioning and audience', 'Moodboards and direction'],
      },
      {
        title: 'Design',
        points: ['Logo and identity routes', 'Colour and type system', 'Brand kit files'],
      },
      {
        title: 'Roll out',
        points: [
          'Brand guidelines',
          'Social, ads and print templates',
          'Handover and launch support',
        ],
      },
    ],
    cta: {
      heading: 'Ready for a brand people remember?',
      text: 'Tell us where your brand is today. We’ll share a direction and a written plan within three working days.',
    },
  },

  'web-and-ai': {
    group: 'Web & AI',
    tagline: 'Built to convert and scale',
    intro:
      'Fast websites and web apps, plus AI creative, chatbots and automation that save your team hours.',
    price: 'From ₹85,000 per project',
    offers: [
      {
        title: 'Website Design & Development',
        text: 'Fast, responsive websites and stores built to convert and easy to update.',
        price: 'From ₹25,000',
        service: 'website-development',
      },
      {
        title: 'AI Chatbots',
        text: 'Website and WhatsApp chatbots that answer questions and capture leads around the clock.',
        price: 'From ₹10,000',
        service: 'ai-chatbots',
      },
    ],
    stats: [
      { value: '2', label: 'Core services', text: 'Websites and AI chatbots' },
      { value: '24/7', label: 'Lead capture', text: 'Chatbots that reply around the clock' },
      { value: 'Mobile', label: 'First design', text: 'Fast and responsive on every screen' },
      { value: 'Monthly', label: 'Reporting', text: 'Traffic, leads and what’s next' },
    ],
    phases: [
      {
        title: 'Plan',
        points: ['Sitemap and user flows', 'Content and wireframes', 'Chatbot use cases'],
      },
      {
        title: 'Build',
        points: ['Design and development', 'AI chatbot setup', 'Speed and mobile testing'],
      },
      {
        title: 'Launch',
        points: ['Go live with tracking', 'Team handover', 'Monthly improvements'],
      },
    ],
    cta: {
      heading: 'Ready for a site that works while you sleep?',
      text: 'Tell us what your website needs to do. We’ll review your current site and send a written plan within three working days.',
    },
  },

  'social-and-personal-brand': {
    group: 'Social & Personal Brand',
    tagline: 'A voice people follow',
    intro:
      'Social media management and founder-led personal branding that builds trust before the first call.',
    price: 'From ₹45,000/month',
    offers: [
      {
        title: 'Social Media Management',
        text: 'Content calendar, posting, community replies and monthly reporting across channels.',
        price: 'From ₹25,000',
        service: 'social-media-management',
      },
      {
        title: 'Social Media Management – Brands',
        text: 'Always-on social for businesses: campaigns, launches and a consistent voice.',
        price: 'From ₹25,000',
        service: 'social-media-management',
      },
      {
        title: 'Social Media Management – Influencers',
        text: 'Content planning, posting and growth support for creators and public figures.',
        price: 'From ₹25,000',
        service: 'instagram-marketing',
      },
      {
        title: 'Personal Branding',
        text: 'Founder and leadership profiles on LinkedIn and Instagram that build trust.',
        price: 'From ₹20,000',
        service: 'personal-branding',
      },
    ],
    stats: [
      { value: '4', label: 'Service tracks', text: 'Brands, influencers and founders' },
      { value: 'Planned', label: 'Content calendar', text: 'Approved by you before it goes live' },
      { value: '2', label: 'Key platforms', text: 'LinkedIn and Instagram growth' },
      { value: 'Monthly', label: 'Reporting', text: 'Reach, engagement and next steps' },
    ],
    phases: [
      {
        title: 'Plan',
        points: [
          'Audit of current profiles',
          'Content pillars and voice',
          'Monthly calendar for approval',
        ],
      },
      {
        title: 'Create',
        points: ['Posts, reels and stories', 'Founder content and scripts', 'Community replies'],
      },
      {
        title: 'Grow',
        points: ['Engagement and follower growth', 'Profile optimisation', 'Monthly report'],
      },
    ],
    cta: {
      heading: 'Ready to build an audience that stays?',
      text: 'Share your profiles and goals. We’ll review what’s working and send a written content plan within three working days.',
    },
  },

  'content-and-production': {
    group: 'Content & Production',
    tagline: 'Shot, edited, ready to post',
    intro:
      'Photography, reels, drone and video production, planned on a calendar and delivered ready to publish.',
    price: 'From ₹60,000/month',
    offers: [
      {
        title: 'Video Editing',
        text: 'Reels, ads and long-form edits with captions, sound design and quick turnaround.',
        price: 'From ₹12,000',
        service: 'video-production',
      },
      {
        title: 'Business Video Shoots',
        text: 'Brand films, product videos and testimonials shot by our in-house crew.',
        price: 'From ₹12,000',
        service: 'video-production',
      },
      {
        title: 'Podcast Shoots',
        text: 'Multi-camera podcast recording, editing and short clips for every platform.',
        price: 'From ₹15,000',
      },
    ],
    stats: [
      { value: '3', label: 'Production services', text: 'Editing, business shoots and podcasts' },
      { value: 'In-house', label: 'Crew', text: 'Shoots handled by our own team' },
      { value: 'Multi-cam', label: 'Podcast setup', text: 'Recorded, edited and clipped' },
      { value: 'All', label: 'Formats', text: 'Cut for reels, ads and long-form' },
    ],
    phases: [
      {
        title: 'Pre-production',
        points: ['Brief and creative concept', 'Scripts and shot list', 'Location and crew planning'],
      },
      {
        title: 'Production',
        points: ['Shoot or podcast recording', 'Multi-camera capture', 'Behind-the-scenes content'],
      },
      {
        title: 'Post-production',
        points: ['Editing, captions and sound', 'Cuts for reels, ads, long-form', 'Delivered ready to post'],
      },
    ],
    cta: {
      heading: 'Got a story worth shooting?',
      text: 'Tell us what you want to make. We’ll come back with a concept, shot list and a written plan within three working days.',
    },
  },

  'ugc-and-creator-marketing': {
    group: 'UGC & Creator Marketing',
    tagline: 'Real people, real reach',
    intro:
      'Creator partnerships and user-generated videos that feel native to the feed and perform like ads.',
    price: 'From ₹30,000/month',
    offers: [
      {
        title: 'UGC Content',
        text: 'Authentic videos from real creators, made for your ads and social feeds.',
        price: 'From ₹15,000',
        service: 'ugc',
      },
      {
        title: 'UGC Ads',
        text: 'Creator-led ads scripted for strong hooks and tested across Meta and YouTube.',
        price: 'From ₹15,000',
        service: 'ugc',
      },
      {
        title: 'UGC Outsourcing',
        text: 'We source, brief and manage creators so you get content without the admin.',
        price: 'From ₹10,000',
        service: 'ugc',
      },
      {
        title: 'UGC Promotions',
        text: 'Creators post about your brand on their own channels to reach new audiences.',
        price: 'From ₹25,000',
        service: 'influencer-marketing',
      },
      {
        title: 'Brand Collaborations',
        text: 'Partnerships with creators and brands that match your audience and goals.',
        price: 'From ₹25,000',
        service: 'influencer-marketing',
      },
      {
        title: 'Experiential Ads',
        text: 'On-ground activations and events, captured as content for social and ads.',
        price: 'From ₹25,000',
      },
    ],
    stats: [
      { value: '6', label: 'Creator services', text: 'From UGC ads to experiential' },
      { value: 'Real', label: 'Creators', text: 'Authentic voices your audience trusts' },
      { value: 'Managed', label: 'End to end', text: 'Sourcing, briefs and approvals' },
      { value: 'Monthly', label: 'Reporting', text: 'Views, clicks and cost per result' },
    ],
    phases: [
      {
        title: 'Brief',
        points: ['Goals, audience and hooks', 'Creator shortlist', 'Scripts and guidelines'],
      },
      {
        title: 'Create',
        points: ['Creator shoots', 'Review and revisions', 'Usage rights agreed'],
      },
      {
        title: 'Launch',
        points: ['Ads and organic posts', 'Hook and format testing', 'Report on cost per result'],
      },
    ],
    cta: {
      heading: 'Ready to give your brand a voice?',
      text: 'Tell us your product and audience. We’ll suggest creators, hooks and a written plan within three working days.',
    },
  },
} satisfies Record<string, ServiceGroupContent>;

export type ServiceGroupSlug = keyof typeof serviceGroups;
export const SERVICE_GROUP_SLUGS = Object.keys(serviceGroups) as ServiceGroupSlug[];
