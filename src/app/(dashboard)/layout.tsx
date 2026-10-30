import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import DashboardShell from '@/components/dashboard/DashboardShell/DashboardShell';
import { displayName, getProfile, getUserId, isStaff } from '@/lib/auth/session';
import { getUnseenLeads } from '@/lib/leads/queries';

export const metadata: Metadata = {
  title: 'Dashboard – BMU Marketing',
  robots: { index: false },
};

// The staff area – admins and managers only. Logged out → /login; clients → /account.
// (src/proxy.ts already turns logged-out visitors away; this is the real role check.)
export default async function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  if (!(await getUserId())) redirect('/login?next=/dashboard');
  const profile = await getProfile();
  if (!profile || !isStaff(profile.role)) redirect('/account');

  const unseen = await getUnseenLeads();

  return (
    <DashboardShell
      user={{ name: displayName(profile), email: profile.email, role: profile.role }}
      unseen={unseen}
    >
      {children}
    </DashboardShell>
  );
}
