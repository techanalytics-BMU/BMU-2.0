import type { ServiceSlug } from '@/data/pseo/slugs';
import { paths } from '@/lib/pseo/paths';
import type { LandingAllServicesContent } from '@/types/landing';

// One card per service – the ring has 40 places (8 columns × 5 rows), so up to 40
// services show without repeating. Edit or reorder the titles freely.
// Add `image: '/images/landing/all-services/landing-all-services-<name>.webp'` to a tile
// to show a screenshot instead of the title.
// Each card's "View More" opens the service page it belongs to (/services/[service]); cards
// without a page of their own point at the closest one.
const tile = (title: string, service: ServiceSlug) => ({ title, href: paths.serviceHub(service) });

export const landingAllServices: LandingAllServicesContent = {
  heading: 'Our Services',
  subheading: 'we are good at!',
  tiles: [
    tile('Marketing Strategy', 'digital-marketing'),
    tile('Search Engine Optimisation', 'seo'),
    tile('Google Ads', 'google-ads'),
    tile('Meta Ads', 'meta-ads'),
    tile('Social Media Management', 'social-media-management'),
    tile('Content Writing', 'content-marketing'),
    tile('Copywriting', 'content-marketing'),
    tile('Video Production', 'video-production'),
    tile('Photography', 'photography'),
    tile('Motion Graphics', 'video-production'),
    tile('Graphic Design', 'brand-identity'),
    tile('Brand Identity', 'brand-identity'),
    tile('Logo Design', 'brand-identity'),
    tile('Packaging Design', 'packaging-design'),
    tile('Website Design', 'website-design'),
    tile('Website Development', 'website-development'),
    tile('E-commerce Stores', 'website-development'),
    tile('Landing Pages', 'website-design'),
    tile('Email Marketing', 'marketing-automation'),
    tile('WhatsApp Marketing', 'whatsapp-automation'),
    tile('Influencer Marketing', 'influencer-marketing'),
    tile('Marketing Automation', 'marketing-automation'),
    tile('Online Reputation Management', 'google-business-profile'),
    tile('Analytics & Reporting', 'digital-marketing'),
    tile('Performance Marketing', 'performance-marketing'),
    tile('Lead Generation', 'performance-marketing'),
    tile('YouTube Marketing', 'video-production'),
    tile('LinkedIn Marketing', 'linkedin-branding'),
    tile('UI/UX Design', 'ui-ux-design'),
    tile('Public Relations', 'personal-branding'),
    tile('Event Promotion', 'social-media-management'),
    tile('Market Research', 'digital-marketing'),
    tile('Brand Strategy', 'brand-identity'),
    tile('Local SEO', 'local-seo'),
    tile('Social Media Ads', 'meta-ads'),
    tile('Conversion Optimisation', 'website-design'),
    tile('Product Photography', 'photography'),
    tile('Corporate Videos', 'video-production'),
    tile('Chatbot Development', 'ai-chatbots'),
    tile('Google Business Profile', 'google-business-profile'),
  ],
};
