'use client';

import Badge from '@/components/ui/Badge/Badge';
import { landingConversionRate } from '@/data/landing/landingConversionRate';
import { useInView } from '@/hooks/useInView';
import styles from './LandingConversionRate.module.css';
import LandingConversionRateFlow from './LandingConversionRateFlow';
import LandingConversionRateTimeline from './LandingConversionRateTimeline';

// Conversion rate optimisation: header → website-lifecycle timeline → CRO process diagram.
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
    customerView,
    ownerView,
  } = landingConversionRate;
  const header = useInView<HTMLDivElement>();

  return (
    <section id="conversion-rate" className={styles.section}>
      <div ref={header.ref} className={styles.header} data-in-view={header.inView}>
        <div className={styles.reveal} style={{ '--delay': '0s' } as React.CSSProperties}>
          <Badge>{badge}</Badge>
        </div>
        <h2 className={`${styles.heading} ${styles.reveal}`} style={{ '--delay': '0.15s' } as React.CSSProperties}>
          {headingStart} <span className="text-accent">{headingHighlight}.</span>
        </h2>
        <p className={`${styles.description} ${styles.reveal}`} style={{ '--delay': '0.3s' } as React.CSSProperties}>
          {description}
        </p>
      </div>

      <div className={styles.visuals}>
        <LandingConversionRateTimeline markers={timeline} />
        <LandingConversionRateFlow
          inputs={inputs}
          strategy={strategy}
          testLabel={testLabel}
          customerView={customerView}
          ownerView={ownerView}
        />
      </div>
    </section>
  );
}
