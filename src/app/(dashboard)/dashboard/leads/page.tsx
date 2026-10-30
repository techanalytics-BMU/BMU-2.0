import type { Metadata } from 'next';
import { getProfile } from '@/lib/auth/session';
import { parseFilters } from '@/lib/leads/filters';
import { getLeadsPage, getLeadsPerDay, getLeadStats } from '@/lib/leads/queries';
import { DashboardLeads } from '@/sections/dashboard';

export const metadata: Metadata = { title: 'Leads – BMU' };

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

// Leads dashboard (/dashboard/leads). The filters live in the address (?range=7d&status=new…),
// `?lead=<id>` opens a lead in the side panel. Staff only – checked in the (dashboard) layout.
export default async function LeadsPage({ searchParams }: Props) {
  const params = await searchParams;
  const profile = (await getProfile())!;
  const isAdmin = profile.role === 'admin';

  const filters = parseFilters(params);
  if (!isAdmin) filters.view = 'active'; // archived leads are for admins only

  const [page, stats, days] = await Promise.all([
    getLeadsPage(filters),
    getLeadStats(filters),
    getLeadsPerDay(filters),
  ]);
  return (
    <DashboardLeads
      filters={filters}
      rows={page.rows}
      total={page.total}
      stats={stats}
      days={days}
      isAdmin={isAdmin}
    />
  );
}
