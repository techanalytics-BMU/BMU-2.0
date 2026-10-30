'use client';

import { dashboardLeads } from '@/data/dashboard/dashboardLeads';
import { PAGE_SIZE } from '@/lib/leads/filters';
import { formatDateTime, timeAgo } from '@/lib/leads/format';
import type { LeadFilters, LeadRow } from '@/types/leads';
import styles from './DashboardLeads.module.css';
import DashboardLeadStatus from './DashboardLeadStatus';
import DashboardLeadTags from './DashboardLeadTags';
import { useLeadNavigation } from './useLeadNavigation';

type Props = { rows: LeadRow[]; total: number; filters: LeadFilters };

// The list: newest first, 25 a page. Click a lead (or its name) to open it in the side panel;
// change its status straight from the pill. On phones each lead is a card.
export default function DashboardLeadsTable({ rows, total, filters }: Props) {
  const t = dashboardLeads;
  const { pending, setFilters, openLead } = useLeadNavigation(filters);
  const filtered =
    filters.range !== 'all' || Boolean(filters.status || filters.source || filters.q);

  if (!rows.length) {
    return (
      <div className={styles.empty}>
        <p>
          {filters.view === 'archived'
            ? t.table.emptyArchived
            : filtered
              ? t.table.emptyFiltered
              : t.table.empty}
        </p>
        {filtered && (
          <button
            type="button"
            className={styles.clearFilters}
            onClick={() =>
              setFilters({ range: 'all', from: null, to: null, status: null, source: null, q: '' })
            }
          >
            {t.table.clearFilters}
          </button>
        )}
      </div>
    );
  }

  const first = (filters.page - 1) * PAGE_SIZE + 1;
  const last = first + rows.length - 1;

  return (
    <div className={styles.tableCard} data-pending={pending}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">{t.table.name}</th>
            <th scope="col">{t.table.contact}</th>
            <th scope="col">{t.table.source}</th>
            <th scope="col">{t.table.received}</th>
            <th scope="col">{t.table.status}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((lead) => (
            <tr key={lead.id} className={styles.row} data-new={lead.isNew} onClick={() => openLead(lead.id)}>
              <td className={styles.cellName}>
                <button
                  type="button"
                  className={styles.nameButton}
                  onClick={(event) => {
                    event.stopPropagation();
                    openLead(lead.id);
                  }}
                >
                  {lead.name}
                </button>
                <DashboardLeadTags lead={lead} isNew={lead.isNew} isRepeat={lead.isRepeat} />
                {lead.business && <span className={styles.sub}>{lead.business}</span>}
              </td>
              <td className={styles.cellContact}>
                <span>{lead.phone}</span>
                <span className={styles.sub}>{lead.email}</span>
              </td>
              <td className={styles.cellSource}>{t.sources[lead.source]}</td>
              <td className={styles.cellReceived}>
                <time dateTime={lead.created_at} title={formatDateTime(lead.created_at)} suppressHydrationWarning>
                  {timeAgo(lead.created_at)}
                </time>
              </td>
              <td className={styles.cellStatus}>
                <DashboardLeadStatus leadId={lead.id} status={lead.status} followUpOn={lead.follow_up_on} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.pagination}>
        <span>
          {t.table.showing
            .replace('{from}', String(first))
            .replace('{to}', String(last))
            .replace('{total}', String(total))}
        </span>
        <div className={styles.pageButtons}>
          <button
            type="button"
            className={styles.chip}
            disabled={filters.page <= 1}
            onClick={() => setFilters({ page: filters.page - 1 })}
          >
            {t.table.previous}
          </button>
          <button
            type="button"
            className={styles.chip}
            disabled={last >= total}
            onClick={() => setFilters({ page: filters.page + 1 })}
          >
            {t.table.next}
          </button>
        </div>
      </div>
    </div>
  );
}
