import type { ContactHeroContent } from '@/types/contact';

export const contactHero: ContactHeroContent = {
  watermark: 'Contact',
  badge: 'Contact us',
  headingStart: 'Lets have a',
  headingHighlight: 'coffee!',
  description:
    'Tell us about your business. We reply within one working day, or drop by the studio in Bengaluru.',
  // Phone and address are the same as in the footer (src/data/footer.ts)
  details: [
    {
      icon: 'mail',
      label: 'Email address',
      value: 'hello@bmumarketing.in',
      href: 'mailto:hello@bmumarketing.in',
    },
    {
      icon: 'phone',
      label: 'Phone / WhatsApp',
      value: '+91 81054 91414',
      href: 'tel:+918105491414',
    },
    {
      icon: 'location',
      label: 'Studio location',
      value: 'JP Nagar 9th Phase, Bengaluru',
    },
    {
      icon: 'briefcase',
      label: 'Careers',
      value: 'careers@bmumarketing.in', // placeholder from the design – confirm the real address
    },
  ],
  form: {
    fields: [
      { name: 'firstName', label: 'First name', type: 'text', placeholder: 'First name', required: true, half: true },
      { name: 'lastName', label: 'Last name', type: 'text', placeholder: 'Last name', required: true, half: true },
      { name: 'email', label: 'Business email', type: 'email', placeholder: 'you@business.com', required: true, half: true },
      { name: 'phone', label: 'Phone number', type: 'tel', placeholder: '+91', required: true, half: true },
      { name: 'company', label: 'Company name', type: 'text', placeholder: 'Company name', required: true, half: true },
      {
        name: 'employees',
        label: 'Number of employees',
        type: 'select',
        required: true,
        half: true,
        options: ['Self-employed', '2–10', '11–50', '51–200', '201–500', '500+'],
      },
      { name: 'city', label: 'City (optional)', type: 'text', placeholder: 'e.g. Bengaluru' },
    ],
    submit: 'Send message',
    sending: 'Sending…',
    successTitle: 'Thank you!',
    successText: 'We have your message and will reply within one working day.',
  },
};
