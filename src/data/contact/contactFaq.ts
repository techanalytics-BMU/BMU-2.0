import type { ContactFaqContent } from '@/types/contact';

// The message WhatsApp opens with (also shown as a chat bubble on the card)
const preview = 'Hi BMU! I have a question about…';

export const contactFaq: ContactFaqContent = {
  badge: 'Read FAQ',
  headingStart: 'General',
  headingHighlight: 'questions.',
  items: [
    {
      question: 'Which areas or cities do you serve?',
      answer:
        'We work with businesses across Bengaluru, and we also handle projects for clients in other Indian cities and abroad, online. Meetings can happen at our office, at your place in Bengaluru or on a video call. Everything else, from design approvals to reports, works online.',
    },
    {
      question: 'Do you make websites in Kannada or other languages?',
      answer:
        'Yes. We can build your site in English and Kannada – and Hindi too, if your customers need it.',
    },
    {
      question: 'What budget do I need for marketing?',
      answer:
        'Most small Bengaluru businesses start with ₹7,500 to ₹60,000 a month in total. That covers our fee plus the money paid to Google or Meta for ads.',
    },
    {
      question: 'Will you run Google or Facebook ads?',
      answer:
        'Yes. We run Google Ads and Meta (Facebook and Instagram) ads, set up the tracking, and report your leads and cost per lead every month.',
    },
    {
      question: 'Can you help my cafe rank number 1 on Google?',
      answer:
        'We can get your cafe into the top results on Google Maps for searches near you. But no honest agency can promise the number 1 spot, because Google also looks at how close the searcher is to you.',
    },
    {
      question: 'What real results can you show?',
      answer:
        'For a cafe we manage in Bengaluru, the Google Business Profile got 6,769 views and 582 direction requests in September 2026 alone – after we fixed the profile and kept it active.',
    },
    // The three packages themselves are still to be added – the answer is as given for now
    {
      question: 'What are the packages for personal branding?',
      answer:
        'We suggest three packages, built around LinkedIn as the main platform – that’s where founders, doctors, consultants and coaches get business in India. Prices are market-level suggestions that BMU will finalise.',
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
