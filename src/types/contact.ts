import type { NavLink } from './navigation';

export type ContactFormField = {
  name: string; // sent with the form
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'chips';
  placeholder?: string;
  required?: boolean;
  options?: string[]; // chips only
  multiple?: boolean; // chips only – pick as many as you like (otherwise just one)
  half?: boolean; // half width on desktop (sits next to the following half-width field)
  autoComplete?: string; // lets the browser fill it in – 'name', 'tel', 'email', 'organization'…
  error?: string; // shown when a required field is left empty (otherwise 'Please enter your …')
};

// One screen of the form: a question at the top, then its fields
export type ContactFormStep = {
  label: string; // short name in the progress bar – 'Goals'
  title: string; // the question – 'What can we help with?'
  fields: ContactFormField[];
};

export type ContactDetail = {
  icon: 'whatsapp' | 'mail' | 'phone' | 'location' | 'briefcase';
  label: string;
  value: string;
  href?: string; // wa.me / mailto: / tel: / map link – plain text until set
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
  more: { text: string; cta: NavLink }; // line under the questions
};

export type ContactHeroContent = {
  badge: string;
  headingStart: string;
  headingHighlight: string; // second line, in lime
  description: string;
  nextSteps: { title: string; text: string }[]; // "what happens next", under the heading
  nextStepsLabel: string;
  details: ContactDetail[]; // the ways to reach us, as small tiles
  careers: ContactDetail; // one quiet line under the tiles
  form: {
    duration: string; // next to the progress bar – 'Takes about a minute'
    steps: ContactFormStep[];
    next: string;
    back: string;
    submit: string;
    sending: string;
    privacy: string; // small line under the send button
    successTitle: string; // {name} is replaced with the first name they gave
    successText: string;
    successCta: NavLink; // e.g. continue on WhatsApp
  };
};
