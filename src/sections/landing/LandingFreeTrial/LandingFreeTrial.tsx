'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Badge from '@/components/ui/Badge/Badge';
import Button from '@/components/ui/Button/Button';
import { landingFreeTrial } from '@/data/landing/landingFreeTrial';
import { useInView } from '@/hooks/useInView';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { useTypewriter } from '@/hooks/useTypewriter';
import styles from './LandingFreeTrial.module.css';

const ICONS = '/icons/landing/free-trial';
const ARROW_ICON = '/icons/common/navbar-cta-icon.svg';
const QUESTIONS = landingFreeTrial.site.questions.map((item) => item.question);
const QUESTION_INTERVAL = 6000; // ms – a new search question every 6 seconds
const QUEUE_SIZE = Math.min(5, QUESTIONS.length); // rows in the sidebar queue

// Free website trial: badge → heading → note → CTA → a browser window showing the BMU site being
// edited, fading softly into a green horizon. Tied to the scroll position (see
// src/hooks/useScrollProgress.ts): the header rises in, then the window stands up from a laid-back
// tilt like a laptop lid. Inside it, questions people search on Google / ask AI tools type
// themselves out (only while on screen), each tagged with its service and industry, while the
// sidebar queue moves on; the round button in the browser bar pauses it.
export default function LandingFreeTrial() {
  const { badge, headingLine1, headingLine2, note, cta, chip, editor, site } = landingFreeTrial;
  const sectionRef = useScrollProgress<HTMLElement>();
  const stageRef = useScrollProgress<HTMLDivElement>();
  const device = useInView<HTMLDivElement>({ threshold: 0.2, once: false });
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const { text, index } = useTypewriter(QUESTIONS, {
    interval: QUESTION_INTERVAL,
    paused: paused || !device.inView,
    instant: reduceMotion,
  });
  const current = site.questions[index];
  const queue = Array.from({ length: QUEUE_SIZE }, (_, i) => (index + i) % site.questions.length);

  // Respect the device's "reduce motion" setting: questions swap without being typed
  useEffect(() => {
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  return (
    <section ref={sectionRef} id="free-trial" className={styles.section}>
      <div className={styles.header}>
        <Badge>{badge}</Badge>
        <h2 className={styles.heading}>
          <span>{headingLine1}</span> <span>{headingLine2}</span>
        </h2>
        <p className={styles.note}>{note}</p>
        <Button href={cta.href} className={styles.cta}>
          {cta.label}
          <Image src={ARROW_ICON} alt="" width={32} height={32} />
        </Button>
      </div>

      <div ref={stageRef} className={styles.stage}>
        <div ref={device.ref} className={styles.device}>
          <div className={styles.screen} data-typing={!paused && !reduceMotion}>
            {/* Browser bar */}
            <div className={styles.browserBar}>
              <span className={styles.dots} aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span className={styles.url} aria-hidden="true">
                <Image src={`${ICONS}/lock.svg`} alt="" width={16} height={16} />
                {site.url}
              </span>
              <button
                type="button"
                className={styles.pause}
                aria-label={paused ? 'Play animation' : 'Pause animation'}
                onClick={() => setPaused(!paused)}
              >
                <span className={paused ? styles.playIcon : styles.pauseIcon} aria-hidden="true" />
              </button>
            </div>

            <div className={styles.body}>
              {/* Builder panel – the queue moves on with each question */}
              <div className={styles.panel} aria-hidden="true">
                <span className={styles.back}>
                  <Image src={`${ICONS}/chevron-left.svg`} alt="" width={16} height={16} />
                  {editor.back}
                </span>
                <span className={styles.panelTitle}>
                  {editor.title}
                  <Image src={`${ICONS}/gear.svg`} alt="" width={24} height={24} />
                </span>
                <span className={styles.search}>
                  <Image src={`${ICONS}/search.svg`} alt="" width={16} height={16} />
                  {editor.search}
                </span>
                <span className={styles.queueLabel}>
                  {editor.queue}
                  <span className={styles.count}>{site.questions.length}</span>
                </span>
                {/* `key` re-mounts the list for each question so it slides up one row */}
                <ul key={index} className={styles.queue}>
                  {queue.map((i) => (
                    <li key={i}>
                      <span className={styles.queueDot} />
                      <span className={styles.queueText}>
                        {site.questions[i].service} · {site.questions[i].industry}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* The BMU website being edited */}
              <div className={styles.site} aria-hidden="true">
                <div className={styles.siteNav}>
                  <Image
                    src="/images/common/bmu-logo-light.webp"
                    alt=""
                    width={556}
                    height={268}
                    className={styles.siteLogo}
                  />
                  <span className={styles.siteLinks}>
                    {site.links.map((link) => (
                      <span key={link}>{link}</span>
                    ))}
                  </span>
                  <span className={styles.siteCta}>
                    {site.cta}
                    <Image src={ARROW_ICON} alt="" width={24} height={24} />
                  </span>
                </div>

                {/* `key` re-mounts the tag for each question so it fades in again */}
                <span key={index} className={styles.tag}>
                  <span className={styles.tagDot} />
                  {current.service} · {current.industry}
                </span>
                <span className={styles.postTitle}>
                  {text}
                  <span className={styles.caret} />
                </span>
                <span className={styles.author}>
                  <span className={styles.avatar}>{site.author.charAt(0)}</span>
                  {site.author}
                  <span className={styles.status}>{site.status}</span>
                </span>
                <span className={styles.lines}>
                  <span />
                  <span />
                  <span />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Soft green horizon the window fades into */}
        <div className={styles.horizon}>
          <Link href={chip.href} className={styles.chip}>
            <span className={styles.chipDot} aria-hidden="true" />
            {chip.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
