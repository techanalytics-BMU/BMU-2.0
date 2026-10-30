// One brand name, one address, one phone – used in page titles, structured data (JSON-LD) and the
// sitemap, so every page and profile describes the business the same way.

export const site = {
  name: 'BMU Marketing',
  url: 'https://bmumarketing.in', // the live domain – canonical URLs and the sitemap are built from it
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
  // Social profiles (Organization "sameAs") – add each URL once it's final
  sameAs: [] as string[],
} as const;
