import type { Metadata } from 'next';
import { AuthSignup } from '@/sections/auth';

export const metadata: Metadata = {
  title: 'Create an Account',
  robots: { index: false },
};

// Signup page – new accounts are clients; logged-in visitors are sent on by src/proxy.ts
export default function SignupPage() {
  return <AuthSignup />;
}
