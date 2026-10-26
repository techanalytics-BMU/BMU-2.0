'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { landingServiceAreas } from '@/data/landing/landingServiceAreas';
import styles from './LandingServiceAreas.module.css';

// Service areas: tabs (Bangalore Areas / Cities / Industries / Services) → heading → list.
export default function LandingServiceAreas() {
  const { defaultTab, tabs } = landingServiceAreas;
  const [activeId, setActiveId] = useState(defaultTab);
  const activeTab = tabs.find((tab) => tab.id === activeId) ?? tabs[0];
  const tabListRef = useRef<HTMLDivElement>(null);

  // On phones the tab row scrolls sideways – keep the active tab in view
  // (only the row scrolls, never the page)
  useEffect(() => {
    const list = tabListRef.current;
    const active = list?.querySelector<HTMLElement>('[aria-selected="true"]');
    if (!list || !active || list.scrollWidth <= list.clientWidth) return;
    list.scrollTo({ left: active.offsetLeft - (list.clientWidth - active.offsetWidth) / 2, behavior: 'smooth' });
  }, [activeTab.id]);

  return (
    <section id="service-areas" className={styles.section}>
      <div className={styles.inner}>
        <div ref={tabListRef} role="tablist" aria-label="Browse by" className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`service-areas-tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={tab.id === activeTab.id}
              aria-controls="service-areas-panel"
              className={`${styles.tab} ${tab.id === activeTab.id ? styles.tabActive : ''}`}
              onClick={() => setActiveId(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* `key` re-mounts the panel on tab change so it fades in again */}
        <div
          key={activeTab.id}
          id="service-areas-panel"
          role="tabpanel"
          aria-labelledby={`service-areas-tab-${activeTab.id}`}
          className={styles.panel}
        >
          <h2 className={styles.heading}>{activeTab.heading}</h2>
          <ul className={styles.list}>
            {activeTab.items.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <Link href={item.href} className={styles.item}>
                    {item.label}
                  </Link>
                ) : (
                  <span className={styles.item}>{item.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
