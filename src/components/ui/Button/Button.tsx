import Link from 'next/link';
import styles from './Button.module.css';

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md';
  className?: string;
};

// primary = light filled button, secondary = dark outlined button
export default function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}: ButtonProps) {
  return (
    <Link href={href} className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}>
      {children}
    </Link>
  );
}
