export type ContactFormField = {
  name: string; // sent with the form
  label: string;
  type: 'text' | 'email' | 'tel' | 'select';
  placeholder?: string;
  required?: boolean;
  options?: string[]; // select only – the first one is pre-selected
  half?: boolean; // half width on desktop (sits next to the following half-width field)
};

export type ContactDetail = {
  icon: 'mail' | 'phone' | 'location' | 'briefcase';
  label: string;
  value: string;
  href?: string; // mailto: / tel: / map link – plain text until set
};

export type ContactFaqItem = {
  question: string;
  answer: string;
};

export type ContactFaqContent = {
  badge: string;
  headingStart: string;
  headingHighlight: string; // shown in green
  items: ContactFaqItem[]; // the first one starts open
};

export type ContactHeroContent = {
  watermark: string; // huge faded word behind the section
  badge: string;
  headingStart: string;
  headingHighlight: string; // shown in green
  description: string;
  details: ContactDetail[];
  form: {
    fields: ContactFormField[];
    submit: string;
    sending: string;
    successTitle: string;
    successText: string;
  };
};
