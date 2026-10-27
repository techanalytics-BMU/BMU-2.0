'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { serviceAreas } from '@/data/serviceAreas';
import styles from './FooterServiceAreas.module.css';

// Footer tabs block: a frosted segmented control (Bangalore Areas / Cities / Industries /
// Services) with a green highlight that slides to the active tab → heading → list.
// Phones show the first few items with a "Show all" button (all items stay in the page for search).
export default function FooterServiceAreas() {
  const { defaultTab, tabs } = serviceAreas;
  const [activeId, setActiveId] = useState(defaultTab);
  const [expanded, setExpanded] = useState(false);
  const activeTab = tabs.find((tab) => tab.id === activeId) ?? tabs[0];
  const tabListRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);

  // Move the green highlight under the active tab. The tabs differ in width, so it is measured
  // – again whenever the row resizes (e.g. once the font has loaded).
  useEffect(() => {
    const list = tabListRef.current;
    const indicator = indicatorRef.current;
    if (!list || !indicator) return;

    const place = () => {
      const active = list.querySelector<HTMLElement>('[aria-selected="true"]');
      if (!active) return;
      indicator.style.width = `${active.offsetWidth}px`;
      indicator.style.transform = `translateX(${active.offsetLeft}px)`;
    };
    place();
    // switch the slide animation on only after the first placement
    const frame = requestAnimationFrame(() => (indicator.dataset.ready = 'true'));
    const observer = new ResizeObserver(place);
    observer.observe(list);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [activeTab.id]);

  // On phones the tab row scrolls sideways – keep the active tab in view
  // (only the row scrolls, never the page)
  useEffect(() => {
    const list = tabListRef.current;
    const active = list?.querySelector<HTMLElement>('[aria-selected="true"]');
    if (!list || !active || list.scrollWidth <= list.clientWidth) return;
    list.scrollTo({
      left: active.offsetLeft - (list.clientWidth - active.offsetWidth) / 2,
      behavior: 'smooth',
    });
  }, [activeTab.id]);

  return (
    <div id="service-areas" className={styles.areas}>
      <div ref={tabListRef} role="tablist" aria-label="Browse by" className={styles.tabs}>
        <span ref={indicatorRef} className={styles.indicator} aria-hidden="true" />
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={`service-areas-tab-${tab.id}`}
            type="button"
            role="tab"
            aria-selected={tab.id === activeTab.id}
            aria-controls="service-areas-panel"
            className={`${styles.tab} ${tab.id === activeTab.id ? styles.tabActive : ''}`}
            onClick={() => {
              setActiveId(tab.id);
              setExpanded(false);
            }}
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
        <div className={styles.headingRow}>
          <h2 className={styles.heading}>{activeTab.heading}</h2>
          <span className={styles.count}>{activeTab.items.length}</span>
        </div>
        <ul id="service-areas-list" className={styles.list} data-expanded={expanded}>
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
        {/* Phones only (hidden on larger screens in the CSS) */}
        <button
          type="button"
          className={styles.more}
          aria-expanded={expanded}
          aria-controls="service-areas-list"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Show less' : `Show all ${activeTab.items.length}`}
        </button>
      </div>
    </div>
  );
}
