'use client';

import Image from 'next/image';
import { useState } from 'react';
import Button from '@/components/ui/Button/Button';
import { workCategories, workShowcase } from '@/data/work/workShowcase';
import type { WorkProject } from '@/types/work';
import styles from './WorkStage.module.css';

type Props = {
  projects: WorkProject[];
  live: boolean; // the section has been reached – videos only load from then on
};

// Inside an open panel: the video or product as large as it fits, with a thumbnail for every piece,
// and the client's review on a glass card beside it (under it on tablets and phones). The panel
// takes its colours from a blurred copy of whatever is showing. Videos start silently, as browsers
// require, so a button offers the sound – a client talking on mute says nothing.
export default function WorkStage({ projects, live }: Props) {
  const { servicesLabel, cta, visitLabel, previousLabel, nextLabel, soundLabel } =
    workShowcase.stage;
  const [shown, setShown] = useState(0);
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
              {media.video && live ? (
                <video
                  src={media.video}
                  poster={media.image}
                  aria-label={media.alt}
                  controls
                  autoPlay={!window.matchMedia('(prefers-reduced-motion: reduce)').matches}
                  muted={!sound}
                  loop
                  playsInline
                />
              ) : (
                <Image
                  src={media.image}
                  alt={media.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 900px"
                />
              )}
              {media.video && !sound && (
                <button type="button" className={styles.sound} onClick={() => setSound(true)}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z" />
                    <path className={styles.waves} d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" />
                  </svg>
                  {soundLabel}
                </button>
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
