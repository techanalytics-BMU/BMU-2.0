'use client';

import Badge from '@/components/ui/Badge/Badge';
import Button from '@/components/ui/Button/Button';
import { landingConversionRate } from '@/data/landing/landingConversionRate';
import { useInView } from '@/hooks/useInView';
import styles from './LandingConversionRate.module.css';
import LandingConversionRateFlow from './LandingConversionRateFlow';
import LandingConversionRateTimeline from './LandingConversionRateTimeline';

// Conversion rate optimisation: header → website-lifecycle timeline → CRO process diagram → CTA.
// Each part animates in when it scrolls into view (see src/hooks/useInView.ts).
export default function LandingConversionRate() {
  const {
    badge,
    headingStart,
    headingHighlight,
    description,
    timeline,
    inputs,
    strategy,
    testLabel,
    variants,
    cta,
  } = landingConversionRate;
  const header = useInView<HTMLDivElement>();
  const ctaView = useInView<HTMLDivElement>({ threshold: 0.6 });

  return (
    <section id="conversion-rate" className={styles.section}>
      <div ref={header.ref} className={styles.header} data-in-view={header.inView}>
        <div className={styles.reveal} style={{ '--delay': '0s' } as React.CSSProperties}>
          <Badge>{badge}</Badge>
        </div>
        <h2 className={`${styles.heading} ${styles.reveal}`} style={{ '--delay': '0.15s' } as React.CSSProperties}>
          {headingStart} <span className={styles.accent}>{headingHighlight}</span>
          <span className={styles.accent}>.</span>
        </h2>
        <p className={`${styles.description} ${styles.reveal}`} style={{ '--delay': '0.3s' } as React.CSSProperties}>
          {description}
        </p>
      </div>

      <div className={styles.visuals}>
        <LandingConversionRateTimeline markers={timeline} />
        <LandingConversionRateFlow inputs={inputs} strategy={strategy} testLabel={testLabel} variants={variants} />
      </div>

      <div ref={ctaView.ref} className={styles.cta} data-in-view={ctaView.inView}>
        <Button href={cta.href} variant="accent" shape="rounded">
          {cta.label}
        </Button>
      </div>
    </section>
  );
}
