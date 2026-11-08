import type { ServiceSlug } from './slugs';

// Two short lines per service, for the "…, service by service" cards on the six group pages
// (/services/web-and-ai …) – about 75–85 characters each, so every card reads two lines. The full
// description is on each service's own page.
export const serviceCardLines: Record<ServiceSlug, string> = {
  seo: 'Get found for what your customers search – technical fixes, service pages and content.',
  'local-seo': 'Rank in Google Maps and “near me” searches with reviews, citations and location pages.',
  'google-business-profile':
    'Your Google profile set up and kept current – photos, posts and replies to reviews.',
  'google-ads': 'Search, Performance Max and YouTube ads, with conversion tracking set up first.',
  'meta-ads': 'Facebook and Instagram ads that bring leads, with creative testing and lead forms.',
  'performance-marketing': 'Paid ads across Google and Meta, judged on the leads and sales they bring.',
  'ai-search-visibility':
    'Help ChatGPT, Gemini and Google AI Overviews find and recommend your business.',
  'digital-marketing': 'SEO, Google and Meta ads and social media on one monthly plan, with one report.',
  'content-marketing': 'Blogs, guides and page copy that answer customers, rank in Google and get quoted.',
  'social-media-management':
    'Instagram, Facebook and LinkedIn run monthly – calendar, reels, posting and replies.',
  'instagram-marketing': 'Instagram growth with a reels-first calendar, stories, collabs and DM replies.',
  'personal-branding':
    'A personal brand for founders, doctors and experts, with scripted videos and posts.',
  'linkedin-branding':
    'LinkedIn for founders and B2B companies – a profile rewrite and ghostwritten posts.',
  ugc: 'Videos made with real creators – unboxings, reviews and testimonials for your ads.',
  'influencer-marketing':
    'Campaigns with Instagram and YouTube creators – matching, briefs and tracking.',
  'brand-identity':
    'Logo, colours, typography and guidelines that make your business look consistent.',
  'packaging-design': 'Boxes, labels and pouches with print-ready dielines, made to stand out on shelf.',
  'ui-ux-design': 'Research, wireframes and Figma prototypes for websites, web apps and mobile apps.',
  'pitch-decks': 'Investor and sales decks – story, structure, copy and design that’s easy to act on.',
  'website-design': 'Websites that turn visits into enquiries, with clear call, form and WhatsApp buttons.',
  'website-development':
    'Fast, mobile-first websites built for enquiries, with SEO setup and tracking.',
  'web-apps': 'Customer portals, booking systems, dashboards and tools built around how you work.',
  'mobile-apps': 'Android and iOS apps – designed, built, launched on both stores and kept updated.',
  'ai-chatbots': 'Chatbots for your website and WhatsApp that answer questions and qualify leads.',
  'whatsapp-automation':
    'WhatsApp broadcasts, automated follow-ups and a team inbox, so no enquiry slips.',
  'marketing-automation':
    'CRM setup, lead routing and automated follow-ups, so every lead gets a fast reply.',
  photography: 'Products, food, interiors and teams, edited and ready for ads, sites and marketplaces.',
  'video-production': 'Reels, ads, brand films and testimonials – scripted, shot and edited for social.',
  'drone-shoots': 'Aerial video and photos for real estate, resorts, events and construction sites.',
};
