'use client';

import Image from 'next/image';
import { useState } from 'react';
import Button from '@/components/ui/Button/Button';
import { workCategories, workShowcase } from '@/data/work/workShowcase';
import type { WorkProject } from '@/types/work';
import styles from './WorkStage.module.css';
import WorkTour from './WorkTour';
import WorkVideo from './WorkVideo';

type Props = {
  projects: WorkProject[];
  live: boolean; // the section has been reached – videos only load from then on
};

// Inside an open panel: the video or product as large as it fits, with a thumbnail for every piece,
// and the client's review on a glass card beside it (under it on tablets and phones). The panel
// takes its colours from a blurred copy of whatever is showing. Videos play in WorkVideo (our own
// controls; they start silently, as browsers require, with a button offering the sound).
export default function WorkStage({ projects, live }: Props) {
  const { servicesLabel, cta, visitLabel, previousLabel, nextLabel } = workShowcase.stage;
  const [shown, setShown] = useState(0);
  // Once sound is turned on, the next videos start with it too
  const [sound, setSound] = useState(false);

  const slides = projects.flatMap((project) => project.media.map((media) => ({ project, media })));
  const { project, media } = slides[shown];
  const { review } = project;
  const ratio = project.ratio ?? workCategories[project.category].ratio;
  const move = (step: number) => setShown((shown + step + slides.length) % slides.length);

  return (
    <>
      <div className={styles.ambient}>
        <Image key={media.image} src={media.image} alt="" fill sizes="60vw" />
      </div>

      <div className={styles.stage}>
        <div className={styles.media} style={{ '--ratio': ratio } as React.CSSProperties}>
          <div className={styles.fit}>
            <div key={media.image} className={styles.frame}>
              {media.tour ? (
                <WorkTour tour={media.tour} label={media.alt} />
              ) : media.video && live ? (
                <WorkVideo
                  src={media.video}
                  cover={media.image}
                  title={media.alt}
                  youtube={media.youtube}
                  sound={sound}
                  onSoundChange={setSound}
                />
              ) : (
                <Image
                  src={media.image}
                  alt={media.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 900px"
                />
              )}
            </div>
          </div>

          {slides.length > 1 && (
            <div className={styles.thumbs}>
              {slides.map((slide, i) => (
                <button
                  key={slide.media.image + i}
                  type="button"
                  className={styles.thumb}
                  aria-label={slide.media.alt}
                  aria-pressed={i === shown}
                  onClick={() => setShown(i)}
                >
                  <Image src={slide.media.image} alt="" fill sizes="64px" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className={styles.card}>
          <div key={project.id} className={styles.details}>
            <h4 className={styles.title}>{project.title}</h4>
            <p className={styles.client}>{project.client}</p>

            {review && (
              <figure className={styles.review}>
                <blockquote className={styles.quote}>{review.quote}</blockquote>
                <figcaption className={styles.person}>
                  {review.photo ? (
                    <Image
                      src={review.photo}
                      alt=""
                      width={40}
                      height={40}
                      className={styles.avatar}
                    />
                  ) : (
                    <span className={styles.avatar} aria-hidden="true">
                      {review.name.charAt(0)}
                    </span>
                  )}
                  <span>
                    <span className={styles.name}>{review.name}</span>
                    <span className={styles.role}>{review.role}</span>
                  </span>
                </figcaption>
              </figure>
            )}

            <p className={styles.services}>
              <span className={styles.servicesLabel}>{servicesLabel}</span>
              {project.services.join(' · ')}
            </p>

            <div className={styles.actions}>
              <Button href={cta.href} variant="accent">
                {cta.label}
              </Button>
              {project.link && (
                <a
                  href={project.link}
                  className={styles.visit}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {visitLabel}
                </a>
              )}
            </div>
          </div>

          {slides.length > 1 && (
            <div className={styles.pager}>
              <button type="button" className={styles.step} onClick={() => move(-1)}>
                {previousLabel}
              </button>
              <span className={styles.position}>
                {shown + 1} / {slides.length}
              </span>
              <button type="button" className={styles.step} onClick={() => move(1)}>
                {nextLabel}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
