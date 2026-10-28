import Link from 'next/link';
import styles from './Button.module.css';

type ButtonProps = {
  href?: string; // with href → link, without → plain button
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md';
  shape?: 'pill' | 'rounded';
  type?: 'button' | 'submit'; // plain buttons only
  disabled?: boolean; // plain buttons only
  ariaLabel?: string; // for icon-only buttons
  className?: string;
  onClick?: () => void;
};

// Every button is the dark glowing pill (see Button.module.css); accent glows a little more.
// primary / secondary are kept so each place still says which button is the main one.
export default function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  shape = 'pill',
  type = 'button',
  disabled,
  ariaLabel,
  className = '',
  onClick,
}: ButtonProps) {
  const classes = [styles.button, styles[variant], styles[size], styles[shape], className]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </button>
  );
}
