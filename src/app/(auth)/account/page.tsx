import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { authAccount } from '@/data/auth/authAccount';
import { canOpenDashboard, displayName, getProfile, getUserId, homeFor } from '@/lib/auth/session';
import { AuthAccount } from '@/sections/auth';

export const metadata: Metadata = {
  title: 'Your Account',
  robots: { index: false },
};

// A client's page after logging in. Logged out → /login; staff and SEO writers → their dashboard.
// (Also where anyone whose account has no profile row lands – it says so instead of looping.)
export default async function AccountPage() {
  if (!(await getUserId())) redirect('/login?next=/account');
  const profile = await getProfile();
  if (profile && canOpenDashboard(profile.role)) redirect(homeFor(profile.role));

  return profile ? (
    <AuthAccount name={displayName(profile)} />
  ) : (
    <AuthAccount name="" description={authAccount.notSetUp} />
  );
}
