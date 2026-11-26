'use client';

import { useEffect, useRef, useState } from 'react';
import {
  clientGradients,
  FALLBACK_GRADIENT,
  workCategories,
  workProjects,
  workShowcase,
} from '@/data/work/workShowcase';
import { useInView } from '@/hooks/useInView';
import type { WorkCategoryId, WorkProject } from '@/types/work';
import WorkFilters from './WorkFilters';
import styles from './WorkShowcase.module.css';
import WorkStage from './WorkStage';

// One panel per type of work; projects and types with nothing to show yet stay out
const PANELS = Object.values(workCategories)
  .map((category) => ({
    ...category,
    projects: workProjects.filter(
      (project) => project.category === category.id && project.media.length > 0
    ),
  }))
  .filter((panel) => panel.projects.length > 0);

type Panel = (typeof PANELS)[number];
type Open = { category: WorkCategoryId; client?: string };

// One strip in the row: a whole type of work, or – while a type split by client is chosen – one
// of its clients
type Slot = {
  key: string;
  category: WorkCategoryId;
  client?: string;
  label: string;
  projects: WorkProject[];
};

const clientsOf = (projects: WorkProject[]) => [
  ...new Set(projects.map((project) => project.client)),
];

// Choosing a type opens it – a type split by client opens on its first client
const openingOf = (panel: Panel): Open => ({
  category: panel.id,
  client: panel.byClient ? panel.projects[0].client : undefined,
});

// The portfolio on one screen: a row of filters (WorkFilters) and a tall panel per type of work, each
// a slice of its artwork with its name up the side. Choosing a type in either slides its panel open
// and folds the others into strips; inside, the work sits beside the client's review (WorkStage). A
// type split by client (`byClient`: Logos, UGC & Insta Videos) shows only its clients while it's
// chosen, one panel each. On tablets and phones the panels stack into rows.
export default function WorkShowcase() {
  const { heading } = workShowcase;
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.15 });
  const [open, setOpen] = useState<Open | undefined>(PANELS[0] && openingOf(PANELS[0]));
  const openPanel = useRef<HTMLDivElement>(null);
  const chosen = useRef(false); // the first panel opens by itself, without moving the page

  // Stacked, the row above folds away and the chosen one jumps up, so bring it back into view
  useEffect(() => {
    if (chosen.current && window.matchMedia('(max-width: 1024px)').matches) {
      openPanel.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [open]);

  const choose = (next: Open) => {
    chosen.current = true;
    setOpen(next);
  };
  const chooseCategory = (id: WorkCategoryId) => {
    const panel = PANELS.find((item) => item.id === id);
    if (panel && id !== open?.category) choose(openingOf(panel));
  };

  if (!PANELS.length || !open) return null;

  // A type split by client shows only its clients (the filters lead to the other types); any other
  // type shows every type side by side
  const split = PANELS.find((panel) => panel.byClient && panel.id === open.category);
  const slots: Slot[] = split
    ? clientsOf(split.projects).map((client) => ({
        key: `${split.id}-${client}`,
        category: split.id,
        client,
        label: `Project ${client}`,
        projects: split.projects.filter((project) => project.client === client),
      }))
    : PANELS.map((panel) => ({
        key: panel.id,
        category: panel.id,
        label: panel.label,
        projects: panel.projects,
      }));

  return (
    <section id="work-showcase" ref={ref} className={styles.section} data-in-view={inView}>
      <div className={styles.inner}>
        <header>
          <h2 className={styles.heading}>{heading}</h2>
          <WorkFilters filters={PANELS} active={open.category} onSelect={chooseCategory} />
        </header>

        <div className={styles.panels} style={{ '--count': slots.length } as React.CSSProperties}>
          {slots.map(({ key, category, client, label, projects }, i) => {
            const isOpen = category === open.category && client === open.client;
            const regionId = `work-${category}-${i}`;
            return (
              <div
                key={key}
                ref={isOpen ? openPanel : undefined}
                className={styles.panel}
                style={{ '--i': i } as React.CSSProperties}
                data-open={isOpen || undefined}
              >
                <h3 className={styles.panelHeading}>
                  <button
                    type="button"
                    className={styles.tab}
                    aria-expanded={isOpen}
                    aria-controls={regionId}
                    onClick={() =>
                      client ? choose({ category, client }) : chooseCategory(category)
                    }
                  >
                    <span
                      className={styles.cover}
                      style={{
                        background: (client && clientGradients[client]) || FALLBACK_GRADIENT,
                      }}
                      aria-hidden="true"
                    />
                    <span className={styles.label}>{label}</span>
                    <span className={styles.count}>
                      {String(projects.flatMap((project) => project.media).length).padStart(2, '0')}
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div id={regionId} className={styles.content} role="region" aria-label={label}>
                    <WorkStage projects={projects} live={inView} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
