'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { dashboardShell } from '@/data/dashboard/dashboardShell';
import type { AppRole } from '@/types/auth';
import type { UnseenLead } from '@/types/leads';
import DashboardAlerts from '../DashboardAlerts/DashboardAlerts';
import DashboardBell from '../DashboardBell/DashboardBell';
import DashboardIcon from '../DashboardIcon/DashboardIcon';
import DashboardUserMenu from '../DashboardUserMenu/DashboardUserMenu';
import styles from './DashboardShell.module.css';

type Props = {
  user: { name: string; email: string; role: AppRole };
  unseen: { count: number; leads: UnseenLead[] } | null; // null: no leads for this person (SEO writer)
  children: React.ReactNode;
};

// The staff area's frame (added in src/app/(dashboard)/layout.tsx): sidebar with the sections this
// person may open (Leads and Blogs; Clients, Users and Settings marked "Soon"), a top bar with the
// bell and the user menu, and the live new-lead alerts – the bell and alerts only for people who
// see leads. On phones the sidebar slides in from the menu button.
export default function DashboardShell({ user, unseen, children }: Props) {
  const t = dashboardShell;
  const pathname = usePathname();
  const [menuOpenOn, setMenuOpenOn] = useState<string | null>(null);
  const menuOpen = menuOpenOn === pathname; // closes by itself on navigation
  const nav = t.nav.filter((item) => item.roles.includes(user.role));

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar} data-open={menuOpen}>
        <Link href="/dashboard" className={styles.logo} aria-label="BMU dashboard">
          <Image src="/images/common/bmu-logo-light.webp" alt="BMU Marketing" width={112} height={54} />
        </Link>

        <nav className={styles.nav} aria-label="Dashboard">
          {nav.map((item) =>
            item.href ? (
              <Link
                key={item.label}
                href={item.href}
                className={styles.navItem}
                aria-current={pathname.startsWith(item.href) ? 'page' : undefined}
              >
                <DashboardIcon name={item.icon} />
                {item.label}
                {item.icon === 'leads' && unseen && unseen.count > 0 && (
                  <span className={styles.navCount}>{unseen.count}</span>
                )}
              </Link>
            ) : (
              <span key={item.label} className={styles.navItem} aria-disabled="true">
                <DashboardIcon name={item.icon} />
                {item.label}
                <span className={styles.soon}>{t.soon}</span>
              </span>
            )
          )}
        </nav>

        <Link href="/" className={styles.back}>
          <DashboardIcon name="arrowLeft" size={16} />
          {t.backToSite}
        </Link>
      </aside>

      {menuOpen && (
        <button
          type="button"
          className={styles.scrim}
          aria-label="Close menu"
          onClick={() => setMenuOpenOn(null)}
        />
      )}

      <div className={styles.main}>
        <header className={styles.topbar}>
          <button
            type="button"
            className={styles.menuButton}
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpenOn(menuOpen ? null : pathname)}
          >
            <DashboardIcon name="menu" size={20} />
          </button>
          <div className={styles.topbarEnd}>
            {unseen && <DashboardBell count={unseen.count} leads={unseen.leads} />}
            <DashboardUserMenu user={user} />
          </div>
        </header>

        <div className={styles.content}>{children}</div>
      </div>

      {unseen && <DashboardAlerts unseenCount={unseen.count} />}
    </div>
  );
}
