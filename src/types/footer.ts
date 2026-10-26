// Items without `href` render as plain text – add the link later and they become clickable.
export type FooterLink = {
  label: string;
  href?: string;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export type FooterContact = {
  type: 'address' | 'email' | 'phone';
  label: string;
  href?: string; // e.g. mailto: / tel:
};

export type FooterSocial = {
  platform: 'instagram' | 'linkedin';
  label: string; // for screen readers
  href?: string;
};

export type FooterContent = {
  tagline: string;
  contact: FooterContact[];
  social: FooterSocial[];
  columns: FooterColumn[];
  copyright: string;
  legal: FooterLink[];
};
