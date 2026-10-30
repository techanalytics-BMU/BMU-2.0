import Image from 'next/image';
import Link from 'next/link';
import styles from './AuthShell.module.css';

// The backdrop of /login, /signup and /account (added in src/app/(auth)/layout.tsx): black with a
// faint dot grid, a green horizon glowing along the bottom, the logo top left (home) and a way back
// to the website top right. The page's card sits in the middle.
export default function AuthShell({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.shell}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.horizon} aria-hidden="true" />

      <header className={styles.top}>
        <Link href="/" className={styles.logo} aria-label="BMU Marketing – home">
          <Image src="/images/common/bmu-logo-light.webp" alt="BMU Marketing" width={112} height={54} priority />
        </Link>
        <Link href="/" className={styles.back}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 12H5M11 6l-6 6 6 6" />
          </svg>
          Back to website
        </Link>
      </header>

      <main className={styles.main}>{children}</main>
    </div>
  );
}
