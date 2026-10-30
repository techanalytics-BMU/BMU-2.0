import type { Metadata } from 'next';
import { authLogin } from '@/data/auth/authLogin';
import { AuthLogin } from '@/sections/auth';

export const metadata: Metadata = {
  title: 'Log in – BMU Marketing',
  robots: { index: false },
};

type Props = { searchParams: Promise<{ next?: string; notice?: string }> };

// Login page – logged-in visitors are sent on to their dashboard by src/proxy.ts
export default async function LoginPage({ searchParams }: Props) {
  const { next, notice } = await searchParams;
  return <AuthLogin next={next} notice={notice ? authLogin.notices[notice] : undefined} />;
}
