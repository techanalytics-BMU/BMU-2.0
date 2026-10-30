import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import DashboardShell from '@/components/dashboard/DashboardShell/DashboardShell';
import { canOpenDashboard, displayName, getProfile, getUserId, isStaff } from '@/lib/auth/session';
import { getUnseenLeads } from '@/lib/leads/queries';

export const metadata: Metadata = {
  title: 'Dashboard',
  robots: { index: false },
};

// The staff area – admins, managers and SEO writers. Logged out → /login; clients → /account.
// (src/proxy.ts already turns logged-out visitors away; this is the real role check.)
// Only admins and managers see leads, so only they get the bell and new-lead alerts.
export default async function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  if (!(await getUserId())) redirect('/login?next=/dashboard');
  const profile = await getProfile();
  if (!profile || !canOpenDashboard(profile.role)) redirect('/account');

  const unseen = isStaff(profile.role) ? await getUnseenLeads() : null;

  return (
    <DashboardShell
      user={{ name: displayName(profile), email: profile.email, role: profile.role }}
      unseen={unseen}
    >
      {children}
    </DashboardShell>
  );
}
