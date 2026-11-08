import Link from 'next/link';
import { serviceCardLines } from '@/data/pseo/serviceCards';
import type { ServiceSlug } from '@/data/pseo/slugs';
import type { PageLink } from '@/types/pseo';
import shared from './ServiceGroupPage.module.css';
import ServiceGroupArt from './ServiceGroupArt';
import { vars } from './ServiceGroupParts';
import styles from './ServiceGroupBento.module.css';

type Size = { col: number; row: number };

// Where each card sits in the four-column grid. The first is large, two by two; the rest fill the
// two columns beside it, then whole rows of four, the last row's cards widening so no gap is left.
function sizes(count: number): Size[] {
  const big = { col: 2, row: 2 };
  const one = { col: 1, row: 1 };
  const rest = count - 1;
  if (rest <= 0) return [big];
  if (rest === 1) return [big, big];
  if (rest === 2) return [big, { col: 2, row: 1 }, { col: 2, row: 1 }];
  if (rest === 3) return [big, { col: 2, row: 1 }, one, one];
  const after = rest - 4;
  const last = after % 4;
  const lastRow = [[], [4], [2, 2], [1, 1, 2]][last].map((col) => ({ col, row: 1 }));
  return [big, ...Array(4 + after - last).fill(one), ...lastRow];
}

// "…, service by service": every service in the group as a small card – its name, one short line
// (src/data/pseo/serviceCards.ts) and its own drawing
export default function ServiceGroupBento({ links }: { links: PageLink[] }) {
  const layout = sizes(links.length);

  return (
    <ul className={styles.bento}>
      {links.map((link, i) => {
        const slug = link.href.split('/').pop() ?? '';
        const line = serviceCardLines[slug as ServiceSlug] ?? link.note;
        return (
          <li
            key={link.href}
            className={`${styles.cell} ${shared.rise}`}
            data-big={i === 0 || undefined}
            style={vars({ '--col': layout[i].col, '--row': layout[i].row, '--i': Math.min(i + 2, 9) })}
          >
            <Link href={link.href} className={styles.card}>
              <h3 className={styles.title}>{link.label}</h3>
              {line && <p className={styles.note}>{line}</p>}
              <ServiceGroupArt slug={slug} className={styles.art} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
