import { redirect } from 'next/navigation';
import { getProfile, isStaff } from '@/lib/auth/session';

// /dashboard opens each person's first section: leads for admins and managers, the blog for
// SEO writers (who only have the blog)
export default async function DashboardPage() {
  const profile = await getProfile();
  redirect(profile && isStaff(profile.role) ? '/dashboard/leads' : '/dashboard/blogs');
}
