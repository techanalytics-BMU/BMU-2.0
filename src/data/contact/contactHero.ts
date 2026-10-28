import type { ContactHeroContent } from '@/types/contact';

export const contactHero: ContactHeroContent = {
  badge: 'Contact us',
  headingStart: 'Let’s have a',
  headingHighlight: 'coffee!',
  description:
    'Tell us about your business. We reply within one working day, or drop by the studio in Bengaluru.',
  // From the FAQ's "How do we get started?" answer
  nextStepsLabel: 'What happens next',
  nextSteps: [
    {
      title: 'We reply within one working day',
      text: 'A real person from our team gets back to you.',
    },
    { title: 'A free audit', text: 'We review your current marketing – no charge.' },
    { title: 'A plan and a quote', text: 'You see both before anything begins.' },
  ],
  // The phone number is also the footer's WhatsApp link (src/data/footer.ts)
  details: [
    {
      icon: 'whatsapp',
      label: 'WhatsApp',
      value: 'Message us',
      href: 'https://wa.me/918105491414',
    },
    {
      icon: 'mail',
      label: 'Email',
      value: 'hello@bmumarketing.in',
      href: 'mailto:hello@bmumarketing.in',
    },
    {
      icon: 'phone',
      label: 'Call',
      value: '+91 81054 91414',
      href: 'tel:+918105491414',
    },
    {
      icon: 'location',
      label: 'Studio',
      value: 'JP Nagar 9th Phase, Bengaluru',
    },
  ],
  careers: {
    icon: 'briefcase',
    label: 'Looking for a job?',
    value: 'careers@bmumarketing.in', // placeholder from the design – confirm the real address
  },
  form: {
    duration: 'Takes about a minute',
    steps: [
      {
        label: 'Goals',
        title: 'What can we help with?',
        fields: [
          {
            name: 'services',
            label: 'Pick as many as you like',
            type: 'chips',
            multiple: true,
            required: true,
            options: [
              'SEO & Google Maps',
              'Social media',
              'Performance ads',
              'Website & AI',
              'Branding & design',
              'Video & reels',
              'Not sure yet',
            ],
          },
        ],
      },
      {
        label: 'Business',
        title: 'Tell us about your business',
        fields: [
          {
            name: 'company',
            autoComplete: 'organization',
            label: 'Business name',
            type: 'text',
            placeholder: 'e.g. Green Leaf Café',
            required: true,
            half: true,
          },
          {
            name: 'city',
            label: 'City',
            type: 'text',
            placeholder: 'e.g. Bengaluru',
            half: true,
            autoComplete: 'address-level2',
          },
          {
            name: 'website',
            label: 'Website or Instagram',
            type: 'text',
            placeholder: 'yourbusiness.com or @yourbusiness',
          },
          {
            // Ranges follow the plans in the FAQ (Launch ₹35k · Growth ₹85k · Scale ₹2L+)
            name: 'budget',
            label: 'Monthly marketing budget',
            type: 'chips',
            options: ['Under ₹35k', '₹35k – 85k', '₹85k – 2L', '₹2L+', 'Not sure yet'],
          },
        ],
      },
      {
        label: 'Details',
        title: 'Where should we reach you?',
        fields: [
          {
            name: 'name',
            label: 'Your name',
            type: 'text',
            placeholder: 'Full name',
            required: true,
            autoComplete: 'name',
          },
          {
            name: 'phone',
            autoComplete: 'tel',
            error: 'Please enter your phone number',
            label: 'Phone / WhatsApp',
            type: 'tel',
            placeholder: '+91',
            required: true,
            half: true,
          },
          {
            name: 'email',
            autoComplete: 'email',
            label: 'Email',
            type: 'email',
            placeholder: 'you@business.com',
            half: true,
          },
          {
            name: 'message',
            label: 'Anything else we should know?',
            type: 'textarea',
            placeholder: 'Goals, deadlines, what’s worked before…',
          },
        ],
      },
    ],
    next: 'Continue',
    back: 'Back',
    submit: 'Send message',
    sending: 'Sending…',
    privacy: 'No spam – we only use this to reply to you.',
    successTitle: 'Thanks, {name}!',
    successText: 'We have your message and will reply within one working day.',
    successCta: { label: 'Prefer WhatsApp? Message us', href: 'https://wa.me/918105491414' },
  },
};
