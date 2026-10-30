// One brand name, one address, one phone – used in page titles, structured data (JSON-LD) and the
// sitemap, so every page and profile describes the business the same way.

export const site = {
  name: 'BMU Marketing',
  url: 'https://bmumarketing.in', // the live domain – canonical URLs and the sitemap are built from it
  phone: '+91 81054 91414',
  phoneHref: 'tel:+918105491414',
  whatsapp: 'https://wa.me/918105491414',
  email: 'hello@bmumarketing.in',
  address: {
    street: 'JP Nagar 9th Phase', // add the full street address once confirmed
    locality: 'Bengaluru',
    region: 'Karnataka',
    postalCode: '', // add the PIN code – it's left out of structured data until set
    country: 'IN',
  },
  // The studio, for distances on locality pages
  coords: [12.889, 77.578] as [number, number],
  // Social profiles (Organization "sameAs") – add each URL once it's final
  sameAs: [] as string[],
} as const;
