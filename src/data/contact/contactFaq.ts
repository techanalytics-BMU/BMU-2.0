import type { ContactFaqContent } from '@/types/contact';

// The message WhatsApp opens with (also shown as a chat bubble on the card)
const preview = 'Hi BMU! I have a question about…';

export const contactFaq: ContactFaqContent = {
  badge: 'Read FAQ',
  headingStart: 'General',
  headingHighlight: 'questions.',
  items: [
    {
      question: 'What makes BMU different?',
      answer:
        'One team runs your SEO, social, ads, website and video under a single plan, with a live dashboard and plain-language monthly reports. You never have to coordinate five vendors.',
    },
    // Answers below are drafts – confirm with the team
    {
      question: 'How much does it cost?',
      answer:
        'Monthly retainers start at ₹35,000 for Launch, ₹85,000 for Growth and ₹2L+ for Scale. Every plan is tailored after a free audit, so you only pay for the channels that move your numbers.',
    },
    {
      question: 'How soon will I see results?',
      answer:
        'Ads and social usually show movement in the first 2–4 weeks. SEO and organic growth build over 3–6 months. You can follow every change on your live dashboard from week one.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Send us the form above or call us. We reply within one working day, run a free audit of your current marketing, and share a plan and quote before anything begins.',
    },
  ],
  more: {
    eyebrow: 'Still have a question?',
    title: 'Ask us on WhatsApp',
    text: 'Message the team directly – a real person replies within one working day.',
    preview,
    // WhatsApp opens with the preview message already typed in
    cta: {
      label: 'Chat on WhatsApp',
      href: `https://wa.me/918105491414?text=${encodeURIComponent(preview)}`,
    },
  },
};
