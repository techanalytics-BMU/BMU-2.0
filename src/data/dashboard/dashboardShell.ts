import type { DashboardShellContent } from '@/types/dashboard';

// The staff area's frame: sidebar, top bar, bell and user menu
export const dashboardShell: DashboardShellContent = {
  nav: [
    { label: 'Leads', href: '/dashboard/leads', icon: 'leads', roles: ['admin', 'manager'] },
    { label: 'Blogs', href: '/dashboard/blogs', icon: 'blogs', roles: ['seo'] }, // the SEO writer only
    { label: 'Clients', icon: 'clients', roles: ['admin', 'manager'] },
    { label: 'Users', icon: 'users', roles: ['admin', 'manager'] },
    { label: 'Settings', icon: 'settings', roles: ['admin', 'manager'] },
  ],
  soon: 'Soon',
  backToSite: 'Back to website',
  roles: { admin: 'Admin', manager: 'Manager', seo: 'SEO writer', client: 'Client' },
  menu: {
    alerts: 'Sound & desktop alerts',
    alertsOn: 'On',
    alertsOff: 'Off',
    changePassword: 'Change password',
    logout: 'Log out',
  },
  bell: {
    label: 'Notifications',
    title: 'New leads',
    empty: 'You’re all caught up.',
    markAll: 'Mark all as seen',
  },
  alert: {
    title: 'New lead',
    body: '{name} · {source}',
    open: 'View',
    tabTitle: '({count}) Leads – BMU',
    tabTitleNone: 'Leads – BMU',
  },
  password: {
    title: 'Change password',
    password: 'New password',
    confirmPassword: 'Confirm new password',
    placeholder: '8+ characters',
    submit: 'Save password',
    sending: 'Saving…',
    done: 'Your password has been changed.',
    close: 'Close',
  },
};
