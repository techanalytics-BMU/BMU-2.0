import Link from 'next/link';
import { authAccount } from '@/data/auth/authAccount';
import { logout } from '@/lib/auth/actions';
import AuthCard from '../AuthCard/AuthCard';
import styles from '../AuthCard/AuthCard.module.css';

type Props = {
  name: string; // first name – left out of the heading when empty
  description?: string; // in place of the usual line
};

// A client's landing page after logging in, until their dashboard is built
export default function AuthAccount({ name, description }: Props) {
  const t = authAccount;

  return (
    <AuthCard
      headingStart={name ? t.headingStart.replace('{name}', name) : t.headingStartNoName}
      headingHighlight={t.headingHighlight}
      description={description ?? t.description}
    >
      <div className={styles.actions}>
        <Link href={t.backToSite.href} className={styles.submit}>
          {t.backToSite.label}
        </Link>
        <form action={logout}>
          <button type="submit" className={styles.secondary}>
            {t.logout}
          </button>
        </form>
      </div>
    </AuthCard>
  );
}
