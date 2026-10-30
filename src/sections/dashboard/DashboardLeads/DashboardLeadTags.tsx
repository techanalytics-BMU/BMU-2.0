import { dashboardLeads } from '@/data/dashboard/dashboardLeads';
import { todayIST } from '@/lib/leads/filters';
import { formatDate } from '@/lib/leads/format';
import type { Lead } from '@/types/leads';
import styles from './DashboardLeads.module.css';

type Props = {
  lead: Pick<Lead, 'status' | 'follow_up_on'>;
  isNew?: boolean; // not opened yet by the signed-in person
  isRepeat?: boolean; // the same phone or email sent a lead before
};

// Small tags beside a lead's name: NEW (lime), REPEAT (outlined) and, for Follow-up leads with a
// date, Overdue (red) / Due today (amber) / Follow up 2 Nov
export default function DashboardLeadTags({ lead, isNew, isRepeat }: Props) {
  const t = dashboardLeads.tags;
  const today = todayIST();
  const due =
    lead.status === 'follow_up' && lead.follow_up_on
      ? lead.follow_up_on < today
        ? 'overdue'
        : lead.follow_up_on === today
          ? 'due'
          : 'later'
      : null;

  if (!isNew && !isRepeat && !due) return null;

  return (
    <span className={styles.tags}>
      {isNew && <span className={`${styles.tag} ${styles.tagNew}`}>{t.new}</span>}
      {isRepeat && <span className={`${styles.tag} ${styles.tagRepeat}`}>{t.repeat}</span>}
      {due && (
        <span className={`${styles.tag} ${styles.tagDue}`} data-due={due}>
          {due === 'overdue'
            ? t.overdue
            : due === 'due'
              ? t.due
              : t.followUp.replace('{date}', formatDate(lead.follow_up_on!, false))}
        </span>
      )}
    </span>
  );
}
