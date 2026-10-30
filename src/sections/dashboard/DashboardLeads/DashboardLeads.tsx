import DashboardIcon from '@/components/dashboard/DashboardIcon/DashboardIcon';
import { dashboardLeads } from '@/data/dashboard/dashboardLeads';
import { filtersToQuery } from '@/lib/leads/filters';
import type { LeadDay, LeadFilters, LeadRow, LeadStats } from '@/types/leads';
import styles from './DashboardLeads.module.css';
import DashboardLeadPanel from './DashboardLeadPanel';
import DashboardLeadsChart from './DashboardLeadsChart';
import DashboardLeadsFilters from './DashboardLeadsFilters';
import DashboardLeadsStats from './DashboardLeadsStats';
import DashboardLeadsTable from './DashboardLeadsTable';

type Props = {
  filters: LeadFilters;
  rows: LeadRow[];
  total: number; // leads matching the filters (all pages)
  stats: LeadStats;
  days: LeadDay[];
  isAdmin: boolean;
};

// The leads dashboard, top to bottom: heading (+ Export CSV for admins) → summary cards →
// "Leads per day" chart → filters → the list → the side panel for the open lead.
export default function DashboardLeads({ filters, rows, total, stats, days, isAdmin }: Props) {
  const t = dashboardLeads;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.heading}>{t.heading}</h1>
          <p className={styles.description}>{t.description}</p>
        </div>
        {isAdmin && (
          <a
            href={`/dashboard/leads/export${filtersToQuery({ ...filters, page: 1 })}`}
            className={styles.export}
            download
          >
            <DashboardIcon name="download" size={16} />
            {t.filters.export}
          </a>
        )}
      </header>

      <DashboardLeadsStats stats={stats} filters={filters} />
      <DashboardLeadsChart days={days} filters={filters} />
      <DashboardLeadsFilters filters={filters} isAdmin={isAdmin} />
      <DashboardLeadsTable rows={rows} total={total} filters={filters} />
      <DashboardLeadPanel rows={rows} filters={filters} isAdmin={isAdmin} />
    </div>
  );
}
