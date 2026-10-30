import type { Metadata } from 'next';
import { ContactFaq, ContactHero } from '@/sections/contact';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Tell us about your business. We reply within one working day, or drop by the studio in Bengaluru.',
};

// Contact page – add new sections below in display order
export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactFaq />
    </main>
  );
}
