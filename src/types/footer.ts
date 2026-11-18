// Items without `href` render as plain text – add the link later and they become clickable.
export type FooterLink = {
  label: string;
  href?: string;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

// One contact line under the logo: address, email or phone
export type FooterContactItem = {
  icon: 'location' | 'mail' | 'phone'; // icon in public/icons/common
  label: string; // for screen readers
  value: string;
  href?: string; // mailto: / tel: – plain text without one
};

export type FooterNewsletter = {
  placeholder: string;
  button: string;
  sending: string; // button text while sending
  success: string; // shown in place of the form once subscribed
  error: string; // shown under the field for an invalid email
};

export type FooterContent = {
  contact: FooterContactItem[]; // address, email and phone under the logo
  columns: FooterColumn[];
  // Newsletter card
  join: {
    title: string; // small label
    heading: string;
    description: string;
    newsletter: FooterNewsletter;
  };
  wordmark: string; // huge faded name that dissolves into the green horizon
  backToTop: string; // glass chip on the horizon line
  // Bottom line: "© 2026 BMU Marketing · Bengaluru, India" (email is not shown at the moment)
  bottom: {
    copyright: string;
    location: string;
    email: string;
  };
};

// Service areas: the link groups in the footer (Services / Industries / Locations), one block each
export type ServiceAreasItem = {
  label: string;
  href?: string; // plain text until a link is added
};

export type ServiceAreasGroup = {
  id: string;
  label: string; // small green label above the heading
  heading: string;
  items: ServiceAreasItem[]; // one list, flowing across four columns
  total?: number; // shown in the count badge when the list is a selection of a longer one
  more?: ServiceAreasItem; // link to the full list, after the items
};

// On a page about a service, the footer's Locations and Industries link to that service's pages
// (/seo/pune, /seo-for-real-estate) – the footer picks the service from the page's address. The
// places and industries are the same for every service; only the service in the link changes.
// Locations is in titled columns – Bangalore / India / Dubai / International.
export type FooterPlace = {
  name: string; // 'Koramangala'
  path: string; // after the service – 'bengaluru/koramangala', 'pune', 'dubai/business-bay'
};

export type FooterPlaceColumn = {
  title: string; // 'India'
  places: FooterPlace[]; // the best-known first
  all: string; // the button that opens the whole column – 'All 146 Indian cities'
  local?: boolean; // Bangalore's areas – only services with neighbourhood pages have them
};

export type FooterIndustry = {
  slug: string; // 'real-estate'
  title: string; // 'Real Estate' – each link reads '<service> for <title>'
};

export type FooterService = {
  title: string; // 'SEO' – for the headings
  noun: string; // 'SEO Agency' – each place link reads '<noun> in <place>'
  places: boolean; // has place pages (Indian cities, Dubai, abroad)
  local: boolean; // and pages for Bangalore's areas
  industries: number[]; // its industry pages – positions in FooterServiceLinks.industries
};

export type FooterServiceLinks = {
  columns: FooterPlaceColumn[];
  industries: FooterIndustry[]; // every industry with pages, the biggest first
  services: Record<string, FooterService>; // every service, by slug
  fallback: string; // Locations on pages without a service of their own – 'digital-marketing'
};

export type ServiceAreasContent = {
  groups: ServiceAreasGroup[]; // Services, Industries – for pages that aren't about a service
  links: FooterServiceLinks; // Locations, and Industries on a service's pages
};
