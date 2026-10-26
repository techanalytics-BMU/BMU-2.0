'use client';

import Image from 'next/image';
import { useState } from 'react';
import Button from '@/components/ui/Button/Button';
import { landingPricing } from '@/data/landing/landingPricing';
import { useInView } from '@/hooks/useInView';
import styles from './LandingPricing.module.css';

// Pricing: header → tab toggle (Monthly retainers / Bundles) → plan cards.
// Desktop shows the cards side by side; mobile turns them into a swipe carousel.
export default function LandingPricing() {
  const { heading, description, descriptionDim, tabs, emptyMessage } = landingPricing;
  const [activeId, setActiveId] = useState(tabs[0].id);
  const activeIndex = tabs.findIndex((tab) => tab.id === activeId);
  const activeTab = tabs[activeIndex];
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.description}>
          {description} <span className={styles.dim}>{descriptionDim}</span>
        </p>
      </div>

      <div
        role="tablist"
        aria-label="Pricing type"
        className={styles.toggle}
        style={{ '--tabs': tabs.length, '--active': activeIndex } as React.CSSProperties}
      >
        <span className={styles.toggleIndicator} aria-hidden="true" />
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={`pricing-tab-${tab.id}`}
            type="button"
            role="tab"
            aria-selected={tab.id === activeId}
            aria-controls="pricing-panel"
            className={`${styles.tab} ${tab.id === activeId ? styles.tabActive : ''}`}
            onClick={() => setActiveId(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        ref={ref}
        id="pricing-panel"
        role="tabpanel"
        aria-labelledby={`pricing-tab-${activeId}`}
        className={styles.panel}
        data-in-view={inView}
      >
        {activeTab.plans.length > 0 ? (
          // `key` re-mounts the list on tab change so the cards animate in again
          <ul key={activeId} className={styles.cards}>
            {activeTab.plans.map((plan, i) => (
              <li
                key={plan.name}
                className={`${styles.card} ${plan.featured ? styles.featured : ''}`}
                style={{ '--i': i } as React.CSSProperties}
              >
                <h3 className={styles.name}>{plan.name}</h3>
                <p className={styles.price}>
                  {plan.price} <span className={styles.period}>{plan.period}</span>
                </p>
                <p className={styles.tagline}>{plan.tagline}</p>
                <Button variant={plan.featured ? 'accent' : 'primary'} className={styles.cta}>
                  {plan.cta}
                </Button>
                <ul className={styles.features}>
                  {plan.features.map((feature) => (
                    <li key={feature} className={styles.feature}>
                      <Image src="/icons/common/check-circle.svg" alt="" width={16} height={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <p key={activeId} className={styles.empty}>
            {emptyMessage}
          </p>
        )}
      </div>
    </section>
  );
}
