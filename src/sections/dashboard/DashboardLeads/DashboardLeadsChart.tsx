'use client';

import { useState } from 'react';
import { dashboardLeads } from '@/data/dashboard/dashboardLeads';
import { formatDate } from '@/lib/leads/format';
import type { LeadDay, LeadFilters } from '@/types/leads';
import styles from './DashboardLeads.module.css';

const MAX_BARS = 62; // longer ranges are shown week by week

type Bar = { from: string; to: string; count: number };

/** One bar per day – or per week when the range is long */
function toBars(days: LeadDay[]): Bar[] {
  if (days.length <= MAX_BARS) return days.map((day) => ({ from: day.date, to: day.date, count: day.count }));
  const bars: Bar[] = [];
  for (let i = 0; i < days.length; i += 7) {
    const week = days.slice(i, i + 7);
    bars.push({
      from: week[0].date,
      to: week[week.length - 1].date,
      count: week.reduce((sum, day) => sum + day.count, 0),
    });
  }
  return bars;
}

/** A round top for the scale: 0–4 → 4, 7 → 8, 13 → 15, 42 → 50… */
function niceMax(value: number) {
  if (value <= 4) return 4;
  const step = 10 ** Math.floor(Math.log10(value));
  for (const factor of [1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]) {
    if (factor * step >= value) return factor * step;
  }
  return value;
}

// "Leads per day" for the chosen dates (the last 30 days for "All"): one lime series on a quiet
// grid, rounded bar tops on the baseline, a tooltip on hover/focus, and the numbers as a table
// for screen readers.
export default function DashboardLeadsChart({ days, filters }: { days: LeadDay[]; filters: LeadFilters }) {
  const t = dashboardLeads.chart;
  const [active, setActive] = useState<number | null>(null);
  const bars = toBars(days);
  if (!bars.length) return null;

  const max = niceMax(Math.max(...bars.map((bar) => bar.count)));
  const label = (bar: Bar) =>
    bar.from === bar.to ? formatDate(bar.from) : `${formatDate(bar.from, false)} – ${formatDate(bar.to)}`;
  const countText = (count: number) => (count === 1 ? t.tooltipOne : t.tooltip.replace('{count}', String(count)));
  const caption =
    filters.range === 'all'
      ? t.captionAll
      : t.caption.replace('{from}', formatDate(days[0].date)).replace('{to}', formatDate(days[days.length - 1].date));
  // A date under the first, middle and last bar
  const ticks = [0, Math.floor((bars.length - 1) / 2), bars.length - 1].filter(
    (index, i, all) => all.indexOf(index) === i
  );
  const shown = active === null ? null : bars[active];

  return (
    <section className={styles.chartCard} aria-labelledby="leads-chart-title">
      <div className={styles.chartHeader}>
        <h2 id="leads-chart-title" className={styles.cardTitle}>
          {t.title}
        </h2>
        <span className={styles.chartCaption}>{caption}</span>
      </div>

      <div className={styles.chart} onMouseLeave={() => setActive(null)}>
        {/* Scale: 0, half and the top, as faint lines */}
        <div className={styles.chartGrid} aria-hidden="true">
          {[max, max / 2, 0].map((value) => (
            <span key={value} className={styles.chartGridLine}>
              <span className={styles.chartGridLabel}>{Number.isInteger(value) ? value : value.toFixed(1)}</span>
            </span>
          ))}
        </div>

        <div className={styles.chartBars} aria-hidden="true">
          {bars.map((bar, i) => (
            <div
              key={bar.from}
              className={styles.chartSlot}
              data-active={active === i}
              onMouseEnter={() => setActive(i)}
            >
              <span
                className={styles.chartBar}
                style={{ height: `${(bar.count / max) * 100}%` }}
                data-empty={bar.count === 0}
              />
            </div>
          ))}
        </div>

        {shown && (
          <div
            className={styles.chartTooltip}
            style={{ left: `${((active! + 0.5) / bars.length) * 100}%` }}
            role="presentation"
          >
            <strong>{countText(shown.count)}</strong>
            <span>{label(shown)}</span>
          </div>
        )}
      </div>

      <div className={styles.chartTicks} aria-hidden="true">
        {ticks.map((index) => (
          <span
            key={index}
            style={{ left: `${((index + 0.5) / bars.length) * 100}%` }}
            data-edge={index === 0 ? 'start' : index === bars.length - 1 ? 'end' : undefined}
          >
            {formatDate(bars[index].from, false)}
          </span>
        ))}
      </div>

      {/* The same numbers for screen readers */}
      <table className={styles.srOnly}>
        <caption>
          {t.title}, {caption}
        </caption>
        <tbody>
          {bars.map((bar) => (
            <tr key={bar.from}>
              <th scope="row">{label(bar)}</th>
              <td>{bar.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
