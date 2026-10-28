'use client';

import Badge from '@/components/ui/Badge/Badge';
import { useInView } from '@/hooks/useInView';
import type { AboutHeaderContent } from '@/types/about';
import styles from './AboutHeader.module.css';

type Props = AboutHeaderContent & { className?: string };

// The opening of every About section, in the site's style (see LandingPricing and LandingHero):
// pill badge, centred heading – its optional second line in lime – and a short line under it.
// The parts rise in one after another when it scrolls into view.
export default function AboutHeader({
  badge,
  heading,
  accent,
  description,
  className = '',
}: Props) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });

  return (
    <div ref={ref} className={`${styles.header} ${className}`} data-in-view={inView}>
      <div className={styles.rise} style={{ '--i': 0 } as React.CSSProperties}>
        <Badge>{badge}</Badge>
      </div>
      <h2 className={styles.heading}>
        <span
          className={`${styles.line} ${styles.rise}`}
          style={{ '--i': 1 } as React.CSSProperties}
        >
          {heading}
        </span>
        {accent && (
          <span
            className={`${styles.accent} ${styles.rise}`}
            style={{ '--i': 2 } as React.CSSProperties}
          >
            {accent}
          </span>
        )}
      </h2>
      {description && (
        <p
          className={`${styles.description} ${styles.rise}`}
          style={{ '--i': 3 } as React.CSSProperties}
        >
          {description}
        </p>
      )}
    </div>
  );
}
