// A block of text in a policy section: a paragraph, or a bulleted list
// (a list item can start with a bold term, e.g. "Offer Updates:")
export type PrivacyBlock =
  | { type: 'p'; text: string }
  | { type: 'list'; items: { term?: string; text: string }[] };

export type PrivacySection = {
  id: string; // anchor for the contents list, e.g. "information-we-collect"
  title: string; // without the number – numbers are added in order
  blocks: PrivacyBlock[];
};

export type PrivacyPolicyContent = {
  heading: string;
  updated: string; // shown as "Last updated: …"
  company: string;
  website: { label: string; href: string };
  sections: PrivacySection[];
  closing: string; // last line, after the sections
};
