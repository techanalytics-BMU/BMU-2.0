'use client';

import Link from 'next/link';
import { useRef, useState, type KeyboardEvent } from 'react';
import type { ServiceAreasGroup } from '@/types/footer';
import styles from './FooterServiceAreas.module.css';

// Footer link groups (Services / Industries / Bangalore / India / Dubai / International) as tabs:
// tab row → heading with a count → list. Every list stays in the page (inactive ones are only
// hidden), so search engines see all the links. Phones show the first few items of a list with
// a "Show all" button. The lists are built on the server – see src/data/serviceAreas.ts.
export default function FooterServiceAreas({ groups }: { groups: ServiceAreasGroup[] }) {
  const [active, setActive] = useState(groups[0]?.id);
  const [expanded, setExpanded] = useState<string[]>([]);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const toggle = (id: string) =>
    setExpanded((open) => (open.includes(id) ? open.filter((x) => x !== id) : [...open, id]));

  // Left / right arrows move between tabs, as in any tab list
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    const current = groups.findIndex((group) => group.id === active);
    const next = (current + (event.key === 'ArrowRight' ? 1 : -1) + groups.length) % groups.length;
    setActive(groups[next].id);
    tabs.current[next]?.focus();
    event.preventDefault();
  };

  return (
    <div id="service-areas" className={styles.areas}>
      <div role="tablist" aria-label="Where we work" className={styles.tabs} onKeyDown={onKeyDown}>
        {groups.map((group, i) => (
          <button
            key={group.id}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`service-areas-tab-${group.id}`}
            aria-selected={group.id === active}
            aria-controls={`service-areas-${group.id}`}
            tabIndex={group.id === active ? 0 : -1}
            className={styles.tab}
            onClick={() => setActive(group.id)}
          >
            {group.label}
          </button>
        ))}
      </div>

      {groups.map((group) => {
        const isOpen = expanded.includes(group.id);
        const listId = `service-areas-${group.id}-list`;
        return (
          <section
            key={group.id}
            id={`service-areas-${group.id}`}
            role="tabpanel"
            aria-labelledby={`service-areas-tab-${group.id}`}
            hidden={group.id !== active}
            className={styles.group}
          >
            <div className={styles.headingRow}>
              <h2 className={styles.heading}>{group.heading}</h2>
              <span className={styles.count}>{group.total ?? group.items.length}</span>
            </div>

            <ul id={listId} className={styles.list} data-expanded={isOpen}>
              {group.items.map((item) => (
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

            <div className={styles.actions}>
              {/* Phones only (hidden on larger screens in the CSS) */}
              <button
                type="button"
                className={styles.more}
                aria-expanded={isOpen}
                aria-controls={listId}
                onClick={() => toggle(group.id)}
              >
                {isOpen ? 'Show less' : `Show all ${group.items.length}`}
              </button>
              {group.more?.href && (
                <Link href={group.more.href} className={styles.viewAll}>
                  {group.more.label}
                </Link>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}
