import Link from 'next/link';
import styles from './Button.module.css';

type ButtonProps = {
  href?: string; // with href → link, without → plain button
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md';
  shape?: 'pill' | 'rounded';
  className?: string;
  onClick?: () => void;
};

// primary = light filled button, secondary = dark outlined button, accent = lime glowing button
export default function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  shape = 'pill',
  className = '',
  onClick,
}: ButtonProps) {
  const classes = `${styles.button} ${styles[variant]} ${styles[size]} ${styles[shape]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
