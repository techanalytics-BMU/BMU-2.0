'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { ServiceAreasGroup, ServiceAreasItem } from '@/types/footer';
import styles from './FooterServiceAreas.module.css';

// Footer link groups (Services / Industries / Locations), each a block of its own, one under the
// other: green label → heading with a count → list, with a hairline between blocks. Locations is
// split into titled columns (Bangalore / India / Dubai / International). Phones show the first
// few items with a "Show all" button (the rest stay in the page, so search engines see every
// link). The lists are built on the server – see src/data/serviceAreas.ts.

function Items({ items }: { items: ServiceAreasItem[] }) {
  return items.map((item) => (
    <li key={item.label}>
      {item.href ? (
        <Link href={item.href} className={styles.item}>
          {item.label}
        </Link>
      ) : (
        <span className={styles.item}>{item.label}</span>
      )}
    </li>
  ));
}

export default function FooterServiceAreas({ groups }: { groups: ServiceAreasGroup[] }) {
  const [expanded, setExpanded] = useState<string[]>([]);

  const toggle = (id: string) =>
    setExpanded((open) => (open.includes(id) ? open.filter((x) => x !== id) : [...open, id]));

  return (
    <div id="service-areas" className={styles.areas}>
      {groups.map((group) => {
        const isOpen = expanded.includes(group.id);
        const headingId = `service-areas-${group.id}`;
        const listId = `${headingId}-list`;
        const itemCount =
          group.items?.length ??
          (group.columns ?? []).reduce((sum, column) => sum + column.items.length, 0);
        return (
          <section key={group.id} aria-labelledby={headingId} className={styles.group}>
            <p className={styles.label}>{group.label}</p>
            <div className={styles.headingRow}>
              <h2 id={headingId} className={styles.heading}>
                {group.heading}
              </h2>
              <span className={styles.count}>{group.total ?? itemCount}</span>
            </div>

            {group.columns ? (
              <div id={listId} className={styles.columns} data-expanded={isOpen}>
                {group.columns.map((column) => (
                  <div key={column.title}>
                    <h3 className={styles.columnTitle}>{column.title}</h3>
                    <ul className={styles.columnList}>
                      <Items items={column.items} />
                    </ul>
                    {column.more?.href && (
                      <Link href={column.more.href} className={styles.viewAll}>
                        {column.more.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <ul id={listId} className={styles.list} data-expanded={isOpen}>
                <Items items={group.items ?? []} />
              </ul>
            )}

            <div className={styles.actions}>
              {/* Phones only (hidden on larger screens in the CSS) */}
              <button
                type="button"
                className={styles.more}
                aria-expanded={isOpen}
                aria-controls={listId}
                onClick={() => toggle(group.id)}
              >
                {isOpen ? 'Show less' : `Show all ${itemCount}`}
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
