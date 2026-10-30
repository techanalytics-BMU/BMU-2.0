'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useRef, useState, useTransition } from 'react';
import { dashboardLeads } from '@/data/dashboard/dashboardLeads';
import { dashboardShell } from '@/data/dashboard/dashboardShell';
import { useDismiss } from '@/hooks/useDismiss';
import { timeAgo } from '@/lib/leads/format';
import { markAllLeadsSeen } from '@/lib/leads/manage';
import type { UnseenLead } from '@/types/leads';
import DashboardIcon from '../DashboardIcon/DashboardIcon';
import menu from '../DashboardPopover/DashboardPopover.module.css';
import styles from './DashboardBell.module.css';

// The bell: how many leads you haven't opened yet (lime badge), and the newest of them.
// Picking one opens it on the leads page; "Mark all as seen" clears the count.
export default function DashboardBell({ count, leads }: { count: number; leads: UnseenLead[] }) {
  const t = dashboardShell.bell;
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [pending, startTransition] = useTransition();
  const close = useCallback(() => setOpen(false), []);
  useDismiss(ref, open, close);

  const openLead = (id: string) => {
    setOpen(false);
    router.push(`/dashboard/leads?lead=${id}`, { scroll: false });
  };

  return (
    <div ref={ref} className={menu.anchor}>
      <button
        type="button"
        className={menu.iconButton}
        aria-label={count ? `${t.label} (${count} new)` : t.label}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <DashboardIcon name="bell" />
        {count > 0 && <span className={styles.badge}>{count > 99 ? '99+' : count}</span>}
      </button>

      {open && (
        <div className={`${menu.panel} ${styles.panel}`}>
          <p className={menu.heading}>{t.title}</p>
          {leads.length === 0 ? (
            <p className={styles.empty}>{t.empty}</p>
          ) : (
            <>
              <ul className={styles.list}>
                {leads.map((lead) => (
                  <li key={lead.id}>
                    <button type="button" className={menu.item} onClick={() => openLead(lead.id)}>
                      <span className={styles.dot} aria-hidden="true" />
                      <span className={styles.text}>
                        <span className={styles.name}>{lead.name}</span>
                        <span className={styles.meta}>
                          {dashboardLeads.sources[lead.source]} · {timeAgo(lead.created_at)}
                        </span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
              <div className={menu.divider} />
              <button
                type="button"
                className={`${menu.item} ${styles.markAll}`}
                disabled={pending}
                onClick={() =>
                  startTransition(async () => {
                    await markAllLeadsSeen();
                    setOpen(false);
                  })
                }
              >
                {t.markAll}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
