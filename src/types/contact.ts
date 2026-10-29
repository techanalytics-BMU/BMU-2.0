import type { NavLink } from './navigation';

export type ContactFormField = {
  name: string; // sent with the form
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea';
  placeholder?: string;
  required?: boolean;
  error?: string; // shown when a required field is left empty (otherwise 'Please enter your …')
  prefix?: string; // fixed text in front of the box – '+91'
  half?: boolean; // half width on desktop (sits next to the following half-width field)
  autoComplete?: string; // lets the browser fill it in – 'name', 'tel', 'email', 'organization'…
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
  // The card under the questions: ask on WhatsApp, with a preview of the message it starts
  more: {
    eyebrow: string;
    title: string;
    text: string;
    preview: string; // the message WhatsApp opens with – shown as a chat bubble
    cta: NavLink;
  };
};

export type ContactHeroContent = {
  headingStart: string;
  headingHighlight: string; // the last word, in lime
  description: string;
  form: {
    fields: ContactFormField[];
    submit: string;
    sending: string;
    privacy: string; // small line under the button
    successTitle: string; // {name} is replaced with the first name they gave
    successText: string;
    successCta: NavLink; // e.g. a faster reply on WhatsApp
  };
  next: { badge: string; heading: string; highlight: string }; // the "what happens next" heading
  nextSteps: {
    title: string;
    text: string;
    icon: 'reply' | 'audit' | 'plan';
  }[]; // under the form, and again after sending
  mobileBar: { whatsapp: NavLink; form: string }; // phones: sticky bar once the form is out of view
};
