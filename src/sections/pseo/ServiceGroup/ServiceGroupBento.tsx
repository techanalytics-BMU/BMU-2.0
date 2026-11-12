import Link from 'next/link';
import { serviceCardLines } from '@/data/pseo/serviceCards';
import type { ServiceSlug } from '@/data/pseo/slugs';
import type { PageLink } from '@/types/pseo';
import shared from './ServiceGroupPage.module.css';
import ServiceGroupArt from './ServiceGroupArt';
import { vars } from './ServiceGroupParts';
import styles from './ServiceGroupBento.module.css';

type Size = { col: number; row: number };

const BENTO_FROM = 5; // fewer services than this sit in one even row

// Where each card sits. Two to four services: one even row. Five or more: a four-column bento – the
// first card large, two by two, the rest filling the two columns beside it, then whole rows of
// four, the last row's cards widening so no gap is left.
function layout(count: number): { cols: number; sizes: Size[] } {
  const one = { col: 1, row: 1 };
  if (count < BENTO_FROM) return { cols: count, sizes: Array(count).fill(one) };
  const after = count - 5; // beyond the big card and the four beside it
  const last = after % 4;
  const lastRow = [[], [4], [2, 2], [1, 1, 2]][last].map((col) => ({ col, row: 1 }));
  return {
    cols: 4,
    sizes: [{ col: 2, row: 2 }, ...Array(4 + after - last).fill(one), ...lastRow],
  };
}

// On tablets (two columns) a card fills the row when it's the large one, or the last one left alone
const fillsTabletRow = (i: number, count: number, bento: boolean) =>
  bento ? i === 0 || (i === count - 1 && (count - 1) % 2 === 1) : i === count - 1 && count % 2 === 1 && count > 1;

// "…, service by service": every service in the group as a card – its name, two short lines
// (src/data/pseo/serviceCards.ts) and its own drawing. A card at least half the row wide (or a whole
// row on tablets) puts its words beside the drawing instead of above it, so it stays short.
export default function ServiceGroupBento({ links }: { links: PageLink[] }) {
  const { cols, sizes } = layout(links.length);
  const bento = links.length >= BENTO_FROM;

  return (
    <ul className={styles.bento} style={vars({ '--cols': cols })}>
      {links.map((link, i) => {
        const slug = link.href.split('/').pop() ?? '';
        const line = serviceCardLines[slug as ServiceSlug] ?? link.note;
        const { col, row } = sizes[i];
        return (
          <li
            key={link.href}
            className={`${styles.cell} ${shared.rise}`}
            data-big={(bento && i === 0) || undefined}
            data-wide={(row === 1 && col / cols >= 0.5) || undefined}
            data-wide-tablet={fillsTabletRow(i, links.length, bento) || undefined}
            style={vars({ '--col': col, '--row': row, '--i': Math.min(i + 2, 9) })}
          >
            <Link href={link.href} className={styles.card}>
              <div className={styles.text}>
                <h3 className={styles.title}>{link.label}</h3>
                {line && <p className={styles.note}>{line}</p>}
              </div>
              <span className={styles.stage}>
                <ServiceGroupArt slug={slug} className={styles.art} />
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
