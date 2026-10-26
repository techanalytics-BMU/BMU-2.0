import styles from './Badge.module.css';

type BadgeProps = {
  children: React.ReactNode;
};

// Small pill label with a green dot
export default function Badge({ children }: BadgeProps) {
  return (
    <span className={styles.badge}>
      <span className={styles.dot} aria-hidden="true" />
      {children}
    </span>
  );
}
