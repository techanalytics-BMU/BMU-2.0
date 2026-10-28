'use client';

import Link from 'next/link';
import { useState } from 'react';
import { serviceAreas } from '@/data/serviceAreas';
import styles from './FooterServiceAreas.module.css';

// Footer link groups (Services / Industries / Bangalore Areas / Cities), one after another:
// small label → heading with a count → list. Phones show the first few items of each group with
// a "Show all" button (all items stay in the page for search engines).
export default function FooterServiceAreas() {
  const [expanded, setExpanded] = useState<string[]>([]);

  const toggle = (id: string) =>
    setExpanded((open) => (open.includes(id) ? open.filter((x) => x !== id) : [...open, id]));

  return (
    <div id="service-areas" className={styles.areas}>
      {serviceAreas.groups.map((group) => {
        const isOpen = expanded.includes(group.id);
        const listId = `service-areas-${group.id}`;
        return (
          <section key={group.id} aria-labelledby={`${listId}-heading`} className={styles.group}>
            <p className={styles.label}>{group.label}</p>
            <div className={styles.headingRow}>
              <h2 id={`${listId}-heading`} className={styles.heading}>
                {group.heading}
              </h2>
              <span className={styles.count}>{group.items.length}</span>
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
          </section>
        );
      })}
    </div>
  );
}
