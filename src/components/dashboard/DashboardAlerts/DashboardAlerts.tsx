'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { dashboardLeads } from '@/data/dashboard/dashboardLeads';
import { dashboardShell } from '@/data/dashboard/dashboardShell';
import { alertsEnabled, notifyDesktop, playChime } from '@/lib/leads/alerts';
import { createClient } from '@/lib/supabase/client';
import type { Lead } from '@/types/leads';
import DashboardIcon from '../DashboardIcon/DashboardIcon';
import styles from './DashboardAlerts.module.css';

type Toast = { id: string; name: string; source: Lead['source'] };

const TOAST_TIME = 8000; // ms each notice stays

// Live new-lead alerts while the dashboard is open: Supabase sends each new lead the moment it's
// saved (only to staff – the database's rules apply). Each one shows a notice (bottom right),
// plays a chime and – if the tab is in the background – a desktop notification (both can be
// switched off in the user menu), then refreshes the list, cards and bell. The browser tab shows
// how many leads you haven't opened: "(3) Leads – BMU".
export default function DashboardAlerts({ unseenCount }: { unseenCount: number }) {
  const t = dashboardShell.alert;
  const router = useRouter();
  const pathname = usePathname();
  const [toasts, setToasts] = useState<Toast[]>([]);
  const routerRef = useRef(router);
  routerRef.current = router;

  // Tab title – again after every navigation, as each page sets its own
  useEffect(() => {
    document.title =
      unseenCount > 0 ? t.tabTitle.replace('{count}', String(unseenCount)) : t.tabTitleNone;
  }, [unseenCount, pathname, t]);

  useEffect(() => {
    const supabase = createClient();
    const openLead = (id: string) =>
      routerRef.current.push(`/dashboard/leads?lead=${id}`, { scroll: false });

    const channel = supabase
      .channel('dashboard-new-leads')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'leads' }, (payload) => {
        const lead = payload.new as Lead;
        const source = dashboardLeads.sources[lead.source];

        setToasts((current) => [...current, { id: lead.id, name: lead.name, source: lead.source }]);
        window.setTimeout(
          () => setToasts((current) => current.filter((toast) => toast.id !== lead.id)),
          TOAST_TIME
        );

        if (alertsEnabled()) {
          playChime();
          notifyDesktop(
            t.title,
            t.body.replace('{name}', lead.name).replace('{source}', source),
            () => openLead(lead.id)
          );
        }
        routerRef.current.refresh();
      })
      .subscribe();

    return () => {
      void supabase.removeChannel(channel);
    };
  }, [t]);

  if (!toasts.length) return null;

  return (
    <div className={styles.stack} role="status" aria-live="polite">
      {toasts.map((toast) => (
        <div key={toast.id} className={styles.toast}>
          <span className={styles.icon} aria-hidden="true">
            <DashboardIcon name="bell" size={16} />
          </span>
          <span className={styles.text}>
            <span className={styles.title}>{t.title}</span>
            <span className={styles.body}>
              {t.body
                .replace('{name}', toast.name)
                .replace('{source}', dashboardLeads.sources[toast.source])}
            </span>
          </span>
          <button
            type="button"
            className={styles.open}
            onClick={() => {
              setToasts((current) => current.filter((item) => item.id !== toast.id));
              router.push(`/dashboard/leads?lead=${toast.id}`, { scroll: false });
            }}
          >
            {t.open}
          </button>
        </div>
      ))}
    </div>
  );
}
