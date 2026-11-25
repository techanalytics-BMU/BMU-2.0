// One brand name, one address, one phone – used in page titles, structured data (JSON-LD) and the
// sitemap, so every page and profile describes the business the same way.

export const site = {
  name: 'BMU Marketing',
  url: 'https://www.bmumarketing.in', // the live domain – canonical URLs and the sitemap are built from it
  // For Google and other sites: solid, so it reads on any background (the tab icon is src/app/icon.svg)
  logo: '/images/common/bmu-logo-tile.png',
  phone: '+91 81054 91414',
  phoneHref: 'tel:+918105491414',
  whatsapp: 'https://wa.me/918105491414',
  email: 'support@bmumarketing.in',
  // The same address as the footer (src/data/footer.ts)
  address: {
    street: '376, Phase 9, Royal Park Residency Layout, JP Nagar 9th Phase',
    locality: 'Bengaluru',
    region: 'Karnataka',
    postalCode: '560108',
    country: 'IN',
  },
  // The studio, for distances on locality pages
  coords: [12.889, 77.578] as [number, number],
  // What BMU is, in one sentence – the business description search engines and AI assistants read
  description:
    'BMU Marketing is a digital marketing and growth studio in Bengaluru (Bangalore), India – SEO, ads, social media, branding, websites, AI tools and business software for companies in India, the UAE and GCC, the USA and Canada.',
  foundingYear: '2018', // the About page: founded in Bengaluru, 2018
  // Countries with pages of their own (see src/lib/pseo/regions.ts)
  areaServed: ['India', 'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Oman', 'Kuwait', 'Bahrain', 'United States', 'Canada'],
  // Opening hours – the same as the Google Business Profile and Bing Places listings
  hours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:30',
    closes: '18:30',
  },
  // Public profiles (Organization "sameAs") – each one the business's own page, not a post or a
  // feed.
  sameAs: [
    'https://www.instagram.com/bmu_marketing_official',
    'https://www.linkedin.com/company/111769100/',
    'https://www.facebook.com/profile.php?id=61596078105445',
    'https://x.com/BMUmarketing',
    'https://www.youtube.com/@BMU_Marketing_official',
    'https://www.threads.com/@bmu_marketing_official',
    'https://www.pinterest.com/bmumarketing02/',
    'https://www.quora.com/profile/BMU-Marketing',
    'https://medium.com/@social_23354',
  ] as string[],
} as const;
