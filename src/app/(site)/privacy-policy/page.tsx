import type { Metadata } from 'next';
import { PrivacyPolicy } from '@/sections/privacy';

export const metadata: Metadata = {
  title: 'Privacy Policy – BMU Marketing',
  description:
    'How BMU Marketing collects, uses, stores and protects your personal information – and your rights over it.',
};

// Privacy Policy page – add new sections below in display order
export default function PrivacyPolicyPage() {
  return (
    <main>
      <PrivacyPolicy />
    </main>
  );
}
