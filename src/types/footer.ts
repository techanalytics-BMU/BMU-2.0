// Items without `href` render as plain text – add the link later and they become clickable.
export type FooterLink = {
  label: string;
  href?: string;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export type FooterSocial = {
  platform: 'instagram' | 'linkedin' | 'youtube' | 'whatsapp'; // icon in public/icons/social
  label: string; // for screen readers
  href?: string;
};

export type FooterNewsletter = {
  placeholder: string;
  button: string;
  sending: string; // button text while sending
  success: string; // shown in place of the form once subscribed
  error: string; // shown under the field for an invalid email
};

export type FooterContent = {
  tagline: string;
  social: FooterSocial[]; // round buttons under the tagline
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

// Service areas: the link groups in the footer (Services / Industries / Bangalore / India /
// Dubai / International), one tab each
export type ServiceAreasItem = {
  label: string;
  href?: string; // plain text until a link is added
};

export type ServiceAreasGroup = {
  id: string;
  label: string; // the tab
  heading: string;
  items: ServiceAreasItem[];
  total?: number; // shown in the count badge when the list is a selection of a longer one
  more?: ServiceAreasItem; // link to the full list, after the items
};

export type ServiceAreasContent = {
  groups: ServiceAreasGroup[]; // tabs, in this order
};
