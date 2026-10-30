'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import DashboardIcon from '@/components/dashboard/DashboardIcon/DashboardIcon';
import menu from '@/components/dashboard/DashboardPopover/DashboardPopover.module.css';
import { dashboardLeads } from '@/data/dashboard/dashboardLeads';
import { useDismiss } from '@/hooks/useDismiss';
import { RANGES, SOURCES, STATUSES } from '@/lib/leads/filters';
import { formatDate } from '@/lib/leads/format';
import type { LeadFilters, LeadSource, LeadStatus } from '@/types/leads';
import styles from './DashboardLeads.module.css';
import DashboardLeadsCalendar from './DashboardLeadsCalendar';
import DashboardLeadsSelect from './DashboardLeadsSelect';
import { useLeadNavigation } from './useLeadNavigation';

const SEARCH_DELAY = 400; // ms after the last key before searching

// One row of filters above the list: date range chips (+ a calendar for your own dates), status,
// source, search – and for admins, Active / Archived
export default function DashboardLeadsFilters({ filters, isAdmin }: { filters: LeadFilters; isAdmin: boolean }) {
  const t = dashboardLeads;
  const { pending, setFilters } = useLeadNavigation(filters);
  const [query, setQuery] = useState(filters.q);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);
  const closeCalendar = useCallback(() => setCalendarOpen(false), []);
  useDismiss(calendarRef, calendarOpen, closeCalendar);

  // Search as they type, once they pause (only typing restarts the wait – not every re-render)
  useEffect(() => {
    if (query.trim() === filters.q) return;
    const timer = window.setTimeout(() => setFilters({ q: query.trim() }), SEARCH_DELAY);
    return () => window.clearTimeout(timer);
  }, [query, filters.q]);

  const customLabel =
    filters.range === 'custom' && filters.from && filters.to
      ? filters.from === filters.to
        ? formatDate(filters.from)
        : `${formatDate(filters.from, false)} – ${formatDate(filters.to)}`
      : t.ranges.custom;

  return (
    <div className={styles.filters} data-pending={pending}>
      <div className={styles.ranges} role="group" aria-label="Dates">
        {RANGES.filter((range) => range !== 'custom').map((range) => (
          <button
            key={range}
            type="button"
            className={styles.chip}
            aria-pressed={filters.range === range}
            onClick={() => setFilters({ range, from: null, to: null })}
          >
            {t.ranges[range]}
          </button>
        ))}

        <div ref={calendarRef} className={menu.anchor}>
          <button
            type="button"
            className={styles.chip}
            aria-pressed={filters.range === 'custom'}
            aria-expanded={calendarOpen}
            onClick={() => setCalendarOpen((open) => !open)}
          >
            <DashboardIcon name="calendar" size={15} />
            {customLabel}
          </button>
          {calendarOpen && (
            <DashboardLeadsCalendar
              from={filters.from}
              to={filters.to}
              onApply={(from, to) => {
                setCalendarOpen(false);
                setFilters({ range: 'custom', from, to });
              }}
              onClear={() => {
                setCalendarOpen(false);
                setFilters({ range: 'all', from: null, to: null });
              }}
            />
          )}
        </div>
      </div>

      <div className={styles.filterRow}>
        <DashboardLeadsSelect
          label={t.table.status}
          value={filters.status ?? ''}
          options={[
            { value: '', label: t.filters.allStatuses },
            ...STATUSES.map((status) => ({ value: status, label: t.statuses[status], status })),
          ]}
          onChange={(value) => setFilters({ status: (value || null) as LeadStatus | null })}
        />

        <DashboardLeadsSelect
          label={t.table.source}
          value={filters.source ?? ''}
          options={[
            { value: '', label: t.filters.allSources },
            ...SOURCES.map((source) => ({ value: source, label: t.sources[source] })),
          ]}
          onChange={(value) => setFilters({ source: (value || null) as LeadSource | null })}
        />

        <label className={styles.search}>
          <DashboardIcon name="search" size={16} />
          <span className={styles.srOnly}>{t.filters.search}</span>
          <input
            type="search"
            value={query}
            placeholder={t.filters.search}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>

        {isAdmin && (
          <div className={styles.views} role="group" aria-label="Show">
            {(['active', 'archived'] as const).map((view) => (
              <button
                key={view}
                type="button"
                className={styles.chip}
                aria-pressed={filters.view === view}
                onClick={() => setFilters({ view })}
              >
                {t.filters[view]}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
