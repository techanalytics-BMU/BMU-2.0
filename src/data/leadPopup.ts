import type { LeadPopupContent } from '@/types/leadPopup';

// The lead popup: appears 5s after landing on any page except /login, and again 30s after each close,
// until the form is sent. Saving the details (Supabase) will be added later.
export const leadPopup: LeadPopupContent = {
  headingStart: "Let's build your next",
  headingHighlight: 'growth move.',
  description: 'Share your goals and discover the strategies that move your business forward.',
  chip: { label: 'Curious what we do?', href: '/services' },
  fields: [
    {
      name: 'name',
      label: 'Name',
      placeholder: 'Enter your name',
      type: 'text',
      autoComplete: 'name',
      error: 'Please enter your name',
      half: true,
    },
    {
      name: 'phone',
      label: 'Phone',
      placeholder: 'Enter your phone',
      type: 'tel',
      autoComplete: 'tel',
      error: 'Please enter a valid phone number',
      half: true,
    },
    {
      name: 'email',
      label: 'Email',
      placeholder: 'Enter your email',
      type: 'email',
      autoComplete: 'email',
      error: 'Please enter a valid email',
    },
  ],
  submit: 'Submit',
  sending: 'Sending…',
  successTitle: 'Thanks, {name}!',
  successText: 'We’ll call you within one working day to talk about your next growth move.',
  close: 'Close',
};
