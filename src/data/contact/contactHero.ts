import type { ContactHeroContent } from '@/types/contact';

// The phone number is also the footer's WhatsApp link (src/data/footer.ts)
const whatsapp = 'https://wa.me/918105491414';

export const contactHero: ContactHeroContent = {
  headingStart: 'Let’s have a',
  headingHighlight: 'coffee.',
  description:
    'Questions about growing your business, or just want to say hello? Tell us a little – we reply within one working day.',
  form: {
    fields: [
      {
        name: 'name',
        label: 'Your name',
        type: 'text',
        placeholder: 'Full name',
        required: true,
        half: true,
        autoComplete: 'name',
      },
      {
        name: 'phone',
        label: 'Phone / WhatsApp',
        type: 'tel',
        placeholder: '98765 43210',
        prefix: '+91',
        required: true,
        error: 'Please enter your phone number',
        half: true,
        autoComplete: 'tel-national',
      },
      {
        name: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'you@business.com',
        required: true,
        half: true,
        autoComplete: 'email',
      },
      {
        name: 'business',
        label: 'Business or website',
        type: 'text',
        placeholder: 'e.g. greenleafcafe.in',
        required: true,
        error: 'Please enter your business name or website',
        half: true,
        autoComplete: 'organization',
      },
      {
        name: 'message',
        label: 'Message',
        type: 'textarea',
        placeholder: 'Hi! We’re looking to get more customers from Google and Instagram…',
      },
    ],
    submit: 'Book my coffee chat',
    sending: 'Sending…',
    privacy: 'No spam. We reply within one working day.',
    consent: {
      text: 'By submitting, you agree to our',
      link: { label: 'Privacy Policy', href: '/privacy-policy' },
    },
    failed: {
      text: 'Something went wrong. Please try again, or',
      link: { label: 'WhatsApp us', href: whatsapp },
    },
    successTitle: 'Thanks, {name}! The coffee’s on us.',
    successText: 'Here’s what happens next:',
    successCta: { label: 'Want a faster reply? WhatsApp us', href: whatsapp },
  },
  // From the FAQ's "How do we get started?" answer
  next: { badge: 'What happens next', heading: 'From hello', highlight: 'to a plan.' },
  nextSteps: [
    {
      title: 'We reply within one working day',
      text: 'A real person from our team calls or WhatsApps you.',
      icon: 'reply',
    },
    {
      title: 'A free audit',
      text: 'We review your website, Google listing, ads and social.',
      icon: 'audit',
    },
    {
      title: 'A plan and a quote',
      text: 'You see exactly what we’d do and what it costs – then decide.',
      icon: 'plan',
    },
  ],
  mobileBar: {
    whatsapp: { label: 'WhatsApp', href: whatsapp },
    form: 'Book a coffee chat',
  },
};
