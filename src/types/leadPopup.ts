// The lead popup shown on every page except /login (see components/layout/LeadPopup)
export type LeadPopupField = {
  name: 'name' | 'phone' | 'email';
  label: string;
  placeholder: string;
  type: 'text' | 'tel' | 'email';
  autoComplete: string;
  error: string; // shown when empty or not valid
  half?: boolean; // half width beside the next field (full width on phones)
};

export type LeadPopupContent = {
  headingStart: string;
  headingHighlight: string; // shown in grey
  description: string;
  chip: { label: string; href: string };
  fields: LeadPopupField[];
  submit: string;
  sending: string;
  successTitle: string; // {name} is replaced with their first name
  successText: string;
  close: string; // label for the ✕ button (screen readers)
};
