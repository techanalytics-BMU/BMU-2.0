import type { ContactFormField } from './contact';
import type { NavLink } from './navigation';

// Lead popup (src/data/leadPopup.ts) – shown over every page except `hiddenOn`
export type LeadPopupContent = {
  // When it shows: `firstDelay` ms after arriving; after a close, again `repeatDelay` ms later –
  // until it has been closed `maxCloses` times this visit. After a submit it stays away for the
  // rest of the visit and comes back on the next.
  timing: { firstDelay: number; repeatDelay: number; maxCloses: number };
  hiddenOn: string[]; // pages it never shows on (and their sub-pages) – waits until the visitor leaves
  closeLabel: string; // the ✕ button, for screen readers
  headingStart: string;
  headingHighlight: string; // the end of the heading, in grey
  description: string;
  explore: NavLink; // the small pill under the description
  fields: ContactFormField[]; // same field options as the contact form
  submit: string;
  sending: string;
  consent: { text: string; link: NavLink }; // small line under the button
  failed: { text: string; link: NavLink }; // when saving fails – with a way to reach us anyway
  successTitle: string; // {name} is replaced with the first name they gave
  successText: string;
  successCta: NavLink; // e.g. a faster reply on WhatsApp
};
