'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { workCategories, workProjects, workShowcase } from '@/data/work/workShowcase';
import { useInView } from '@/hooks/useInView';
import styles from './WorkShowcase.module.css';
import WorkStage from './WorkStage';

// One panel per type of work; types with nothing to show yet stay out
const PANELS = Object.values(workCategories)
  .map((category) => ({
    ...category,
    projects: workProjects.filter((project) => project.category === category.id),
  }))
  .filter((panel) => panel.projects.length > 0);

// The portfolio on one screen: a tall panel per type of work, each a slice of its artwork with its
// name up the side. Choosing one slides it open and folds the others into strips; inside, the work
// sits beside the client's review (WorkStage). On tablets and phones the panels stack into rows.
export default function WorkShowcase() {
  const { heading, subheading } = workShowcase;
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.15 });
  const [open, setOpen] = useState(PANELS[0]?.id);
  const openPanel = useRef<HTMLDivElement>(null);
  const chosen = useRef(false); // the first panel opens by itself, without moving the page

  // Stacked, the row above folds away and the chosen one jumps up, so bring it back into view
  useEffect(() => {
    if (chosen.current && window.matchMedia('(max-width: 1024px)').matches) {
      openPanel.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [open]);

  if (!PANELS.length) return null;

  return (
    <section id="work-showcase" ref={ref} className={styles.section} data-in-view={inView}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.subheading}>{subheading}</p>
        </header>

        <div
          className={styles.panels}
          style={{ '--count': PANELS.length } as React.CSSProperties}
        >
          {PANELS.map(({ id, label, projects }, i) => {
            const isOpen = id === open;
            return (
              <div
                key={id}
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
                    aria-controls={`work-${id}`}
                    onClick={() => {
                      chosen.current = true;
                      setOpen(id);
                    }}
                  >
                    <Image
                      src={projects[0].media[0].image}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 160px"
                      className={styles.cover}
                    />
                    <span className={styles.label}>{label}</span>
                    <span className={styles.count}>
                      {String(projects.flatMap((project) => project.media).length).padStart(2, '0')}
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div id={`work-${id}`} className={styles.content} role="region" aria-label={label}>
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
