import Link from 'next/link';
import Button from '@/components/ui/Button/Button';
import type { PseoPage, SectionItem } from '@/types/pseo';
import styles from './ServiceGroupPage.module.css';

// What every page's own hero and services section are given
export type VibeProps = {
  page: PseoPage;
  price: string; // where engagements start – 'From ₹35,000/month'
  offers: SectionItem[]; // title, text, price (meta) and link (href, when it has a page of its own)
};

// Custom properties for the stylesheet (React's style type doesn't know them)
export const vars = (values: Record<string, string | number>) => values as React.CSSProperties;

export const pad = (n: number) => String(n).padStart(2, '0');

// The words every hero carries. The id lets the phone bar appear once the button has scrolled away.
export function HeroText({
  page,
  price,
  className = '',
  children,
}: Pick<VibeProps, 'page' | 'price'> & { className?: string; children?: React.ReactNode }) {
  return (
    <div className={`${styles.heroText} ${className}`}>
      <h1 className={styles.h1}>
        <span className={styles.enter}>{page.h1}</span>
        <span className={`${styles.tagline} ${styles.enter}`} style={vars({ '--i': 1 })}>
          {page.h1Accent}
        </span>
      </h1>
      <p className={`${styles.intro} ${styles.enter}`} style={vars({ '--i': 2 })}>
        {page.intro}
      </p>
      {children /* a page's own extra, between the words and the button */}
      <div
        id="pseo-hero-actions"
        className={`${styles.actions} ${styles.enter}`}
        style={vars({ '--i': 3 })}
      >
        <Button href="/contact" variant="accent">
          Know more
        </Button>
        <span className={styles.price}>{price}</span>
      </div>
    </div>
  );
}

export function SectionHead({
  eyebrow,
  heading,
  intro,
}: {
  eyebrow?: string;
  heading: string;
  intro?: string;
}) {
  return (
    <header className={styles.head}>
      {eyebrow && <p className={`${styles.eyebrow} ${styles.rise}`}>{eyebrow}</p>}
      <h2 className={`${styles.heading} ${styles.rise}`} style={vars({ '--i': 1 })}>
        {heading}
      </h2>
      {intro && (
        <p className={`${styles.sub} ${styles.rise}`} style={vars({ '--i': 2 })}>
          {intro}
        </p>
      )}
    </header>
  );
}

// A service: a link when it has a page of its own, a plain block when it doesn't yet
export function Offer({
  item,
  className,
  style,
  children,
}: {
  item: SectionItem;
  className: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return item.href ? (
    <Link href={item.href} className={className} style={style}>
      {children}
    </Link>
  ) : (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
