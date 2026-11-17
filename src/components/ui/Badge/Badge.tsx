import styles from './Badge.module.css';

type BadgeProps = {
  children: React.ReactNode;
};

// Small pill label
export default function Badge({ children }: BadgeProps) {
  return (
    <span className={styles.badge}>
      {children}
    </span>
  );
}
