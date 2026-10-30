'use client';

import { dashboardLeads } from '@/data/dashboard/dashboardLeads';
import { STATUSES } from '@/lib/leads/filters';
import type { LeadFilters, LeadStats } from '@/types/leads';
import styles from './DashboardLeads.module.css';
import { useLeadNavigation } from './useLeadNavigation';

// Summary cards for the chosen dates: total, one per status (click to show only that status –
// click again for all) and the conversion rate (converted ÷ total)
export default function DashboardLeadsStats({ stats, filters }: { stats: LeadStats; filters: LeadFilters }) {
  const t = dashboardLeads;
  const { setFilters } = useLeadNavigation(filters);
  const conversion = stats.total ? Math.round((stats.converted / stats.total) * 100) : 0;

  return (
    <div className={styles.stats}>
      <div className={styles.stat}>
        <span className={styles.statLabel}>{t.stats.total}</span>
        <span className={styles.statValue}>{stats.total}</span>
      </div>

      {STATUSES.map((status) => (
        <button
          key={status}
          type="button"
          className={styles.stat}
          data-status={status}
          aria-pressed={filters.status === status}
          onClick={() => setFilters({ status: filters.status === status ? null : status })}
        >
          <span className={styles.statLabel}>
            <span className={styles.statusDot} aria-hidden="true" />
            {t.statuses[status]}
          </span>
          <span className={styles.statValue}>{stats[status]}</span>
        </button>
      ))}

      <div className={`${styles.stat} ${styles.statHighlight}`}>
        <span className={styles.statLabel}>{t.stats.conversion}</span>
        <span className={styles.statValue}>{conversion}%</span>
        <span className={styles.statHint}>{t.stats.conversionHint}</span>
      </div>
    </div>
  );
}
