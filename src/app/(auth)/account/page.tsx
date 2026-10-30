import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { authAccount } from '@/data/auth/authAccount';
import { displayName, getProfile, getUserId, isStaff } from '@/lib/auth/session';
import { AuthAccount } from '@/sections/auth';

export const metadata: Metadata = {
  title: 'Your account – BMU Marketing',
  robots: { index: false },
};

// A client's page after logging in. Logged out → /login; staff → /dashboard.
// (Also where anyone whose account has no profile row lands – it says so instead of looping.)
export default async function AccountPage() {
  if (!(await getUserId())) redirect('/login?next=/account');
  const profile = await getProfile();
  if (profile && isStaff(profile.role)) redirect('/dashboard');

  return profile ? (
    <AuthAccount name={displayName(profile)} />
  ) : (
    <AuthAccount name="" description={authAccount.notSetUp} />
  );
}
