'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { dashboardShell } from '@/data/dashboard/dashboardShell';
import { useDismiss } from '@/hooks/useDismiss';
import { logout } from '@/lib/auth/actions';
import { alertsEnabled, setAlertsEnabled } from '@/lib/leads/alerts';
import type { AppRole } from '@/types/auth';
import DashboardIcon from '../DashboardIcon/DashboardIcon';
import menu from '../DashboardPopover/DashboardPopover.module.css';
import DashboardPasswordDialog from './DashboardPasswordDialog';
import styles from './DashboardUserMenu.module.css';

type Props = { user: { name: string; email: string; role: AppRole } };

// Top-right: initial, name and role; opens to the alerts switch, Change password and Log out
export default function DashboardUserMenu({ user }: Props) {
  const t = dashboardShell;
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [alerts, setAlerts] = useState(true);
  const [passwordOpen, setPasswordOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const closePassword = useCallback(() => setPasswordOpen(false), []);
  useDismiss(ref, open, close);

  // The saved choice is only readable in the browser
  useEffect(() => setAlerts(alertsEnabled()), []);

  const toggleAlerts = () => {
    setAlertsEnabled(!alerts);
    setAlerts(!alerts);
  };

  return (
    <div ref={ref} className={menu.anchor}>
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span className={styles.avatar} aria-hidden="true">
          {user.name.charAt(0)}
        </span>
        <span className={styles.who}>
          <span className={styles.name}>{user.name}</span>
          <span className={styles.role}>{t.roles[user.role]}</span>
        </span>
        <DashboardIcon name="chevronDown" size={16} className={styles.chevron} />
      </button>

      {open && (
        <div className={menu.panel} role="menu">
          <p className={styles.email}>{user.email}</p>
          <div className={menu.divider} />
          <button
            type="button"
            role="menuitemcheckbox"
            aria-checked={alerts}
            className={menu.item}
            onClick={toggleAlerts}
          >
            <DashboardIcon name="volume" size={16} />
            {t.menu.alerts}
            <span className={styles.switch} data-on={alerts}>
              {alerts ? t.menu.alertsOn : t.menu.alertsOff}
            </span>
          </button>
          <button
            type="button"
            role="menuitem"
            className={menu.item}
            onClick={() => {
              setOpen(false);
              setPasswordOpen(true);
            }}
          >
            <DashboardIcon name="key" size={16} />
            {t.menu.changePassword}
          </button>
          <div className={menu.divider} />
          <form action={logout}>
            <button type="submit" role="menuitem" className={menu.item}>
              <DashboardIcon name="logout" size={16} />
              {t.menu.logout}
            </button>
          </form>
        </div>
      )}

      {passwordOpen && <DashboardPasswordDialog onClose={closePassword} />}
    </div>
  );
}
