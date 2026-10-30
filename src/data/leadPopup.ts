import type { LeadPopupContent } from '@/types/leadPopup';

// The lead popup shown over the site (src/components/layout/LeadPopup). Times are in milliseconds.
export const leadPopup: LeadPopupContent = {
  timing: { firstDelay: 5000, repeatDelay: 30000, maxCloses: 2 },
  hiddenOn: ['/login', '/contact'], // /contact already has the full form
  closeLabel: 'Close',
  headingStart: 'Let’s build your next',
  headingHighlight: 'growth move.',
  description: 'Share your goals and discover the strategies that move your business forward.',
  explore: { label: 'Curious what we do?', href: '/services' },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      placeholder: 'Enter your name',
      required: true,
      half: true,
      autoComplete: 'name',
    },
    {
      name: 'phone',
      label: 'Phone',
      type: 'tel',
      placeholder: 'Enter your phone',
      required: true,
      error: 'Please enter your phone number',
      half: true,
      autoComplete: 'tel',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
      required: true,
      autoComplete: 'email',
    },
  ],
  submit: 'Submit',
  sending: 'Sending…',
  consent: {
    text: 'By submitting, you agree to our',
    link: { label: 'Privacy Policy', href: '/privacy-policy' },
  },
  failed: {
    text: 'Something went wrong. Please try again, or',
    link: { label: 'WhatsApp us', href: 'https://wa.me/918105491414' },
  },
  successTitle: 'Thanks, {name}!',
  successText: 'We’ll call you within one working day.',
  successCta: { label: 'Want a faster reply? WhatsApp us', href: 'https://wa.me/918105491414' },
};
