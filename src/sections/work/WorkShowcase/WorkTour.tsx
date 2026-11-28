'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useInView } from '@/hooks/useInView';
import type { WorkTour as WorkTourData, WorkTourPage } from '@/types/work';
import styles from './WorkTour.module.css';

type Props = {
  tour: WorkTourData;
  label: string; // what it shows, for screen readers
  // A small picture of the first page's top (the piece's cover) – shown at once while the full,
  // much larger page downloads, so the screen is never empty
  cover?: string;
};

// Timing of the walk through each page (ms)
const START_PAUSE = 1400; // a look at the top before scrolling
const SCROLL = 1000; // each flick down, about four fifths of a screen
const READ_PAUSE = 750; // a pause after each flick, as if reading
const END_PAUSE = 1300; // at the bottom, before moving on
const LOADING = 700; // the address changes and the loading bar runs before the next page shows

// A website playing by itself in a browser window or on a phone: each page scrolls down in short
// flicks with pauses, then the address changes, a loading bar runs and the next page opens – round
// and round. It runs only while on screen and stops while the pointer is over it. With reduced
// motion it stays still and the page can be scrolled by hand. On a phone, two more phones lean in
// behind it showing other pages.
export default function WorkTour({ tour, label, cover }: Props) {
  const { pages, device, site } = tour;
  const view = useInView<HTMLDivElement>({ threshold: 0.3, once: false });
  const screenRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const animation = useRef<Animation | null>(null);
  const [index, setIndex] = useState(0);
  const [round, setRound] = useState(0); // counts every page change, so even a one-page tour starts again
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState<string | null>(null); // the page whose screenshot has arrived
  const [hovered, setHovered] = useState(false);
  const [size, setSize] = useState(0); // changes when the screen is resized, to restart the scroll
  const [still, setStill] = useState(false);
  // The colour along the top of the page showing – the phone's status bar and the screen behind the
  // page take it, so a dark site gets no white band and no white flash between pages
  const [tone, setTone] = useState<{ bg: string; fg: string } | null>(null);

  const readTone = (image: HTMLImageElement) => {
    try {
      const canvas = document.createElement('canvas');
      canvas.width = 24;
      canvas.height = 1;
      const context = canvas.getContext('2d', { willReadFrequently: true });
      if (!context) return;
      const band = Math.max(2, Math.round(image.naturalHeight * 0.003));
      context.drawImage(image, 0, 0, image.naturalWidth, band, 0, 0, 24, 1);
      const data = context.getImageData(0, 0, 24, 1).data;
      let r = 0;
      let g = 0;
      let b = 0;
      for (let i = 0; i < data.length; i += 4) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
      }
      const n = data.length / 4;
      [r, g, b] = [r / n, g / n, b / n].map(Math.round);
      const light = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 > 0.55;
      setTone({ bg: `rgb(${r}, ${g}, ${b})`, fg: light ? '#111111' : '#ffffff' });
    } catch {
      // A picture the page can't read keeps the default white
    }
  };
  const toneStyle = (tone
    ? { '--screen-bg': tone.bg, '--status-fg': tone.fg }
    : undefined) as React.CSSProperties | undefined;

  const page = pages[index];
  const next = (index + 1) % pages.length;
  const playing = view.inView && !hovered && !still;

  useEffect(() => {
    setStill(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  // Restart the scroll if the screen changes size (it was worked out in pixels)
  useEffect(() => {
    const screen = screenRef.current;
    if (!screen) return;
    let frame = 0;
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setSize(Math.round(screen.clientHeight)));
    });
    observer.observe(screen);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  // Scroll this page down in flicks, then go to the next one
  useEffect(() => {
    const screen = screenRef.current;
    const element = pageRef.current;
    if (still || !screen || !element || loaded !== page.image || !size) return;

    const distance = element.offsetHeight - screen.clientHeight;
    const step = screen.clientHeight * 0.8;
    const stops: number[] = [];
    for (let y = step; y < distance; y += step) stops.push(y);
    if (distance > 0) stops.push(distance);

    // Keyframes on a timeline in ms, turned into offsets below
    const frames: { at: number; y: number }[] = [{ at: 0, y: 0 }, { at: START_PAUSE, y: 0 }];
    stops.forEach((y, i) => {
      const start = frames[frames.length - 1].at;
      frames.push({ at: start + SCROLL, y });
      if (i < stops.length - 1) frames.push({ at: start + SCROLL + READ_PAUSE, y });
    });
    const total = frames[frames.length - 1].at + END_PAUSE;

    const run = element.animate(
      frames.map(({ at, y }) => ({
        offset: at / total,
        transform: `translateY(${-y}px)`,
        easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
      })),
      { duration: total, fill: 'forwards' }
    );
    animation.current = run;

    let timer = 0;
    run.onfinish = () => {
      setLoading(true);
      timer = window.setTimeout(() => {
        setIndex((current) => (current + 1) % pages.length);
        setRound((current) => current + 1);
        setLoading(false);
      }, LOADING);
    };

    return () => {
      run.cancel();
      window.clearTimeout(timer);
      animation.current = null;
    };
  }, [round, loaded, size, still, page.image, pages.length]);

  // Pause off screen and under the pointer
  useEffect(() => {
    const run = animation.current;
    if (!run) return;
    if (playing) run.play();
    else run.pause();
  }, [playing, loaded, round, size]);

  // Fetch the next page while this one plays, so it opens at once
  useEffect(() => {
    if (still) return;
    const image = new window.Image();
    image.src = pages[next].image;
  }, [next, pages, still]);

  const address = pages[loading ? next : index].path;

  const screen = (
    <div
      ref={screenRef}
      className={styles.screen}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <span className={styles.loadingBar} data-loading={loading || undefined} aria-hidden="true" />
      {/* Until the first page arrives: its top, from the small cover (the same picture) */}
      {cover && index === 0 && loaded !== page.image && (
        <Image
          src={cover}
          alt=""
          width={device === 'phone' ? 600 : 1440}
          height={device === 'phone' ? 1298 : 900}
          unoptimized
          priority
          className={styles.placeholder}
          onLoad={(event) => readTone(event.currentTarget)}
        />
      )}
      <div
        key={round}
        ref={pageRef}
        className={styles.page}
        style={{ aspectRatio: `${page.width} / ${page.height}` }}
        data-dim={loading || undefined}
      >
        <Image
          src={page.image}
          alt=""
          width={page.width}
          height={page.height}
          unoptimized
          loading="eager"
          fetchPriority="high"
          onLoad={(event) => {
            setLoaded(page.image);
            readTone(event.currentTarget);
          }}
        />
      </div>
    </div>
  );

  if (device === 'phone') {
    // Other pages; a site with fewer than three shows further down the same page instead
    const sides = [1, 2].map((step) => ({
      page: pages[(index + step) % pages.length],
      offset: pages.length < 3 ? step * 0.28 : 0,
    }));
    return (
      <div
        ref={view.ref}
        className={`${styles.tour} ${styles.phoneTour}`}
        style={toneStyle}
        data-active={playing}
        role="img"
        aria-label={label}
      >
        <span className={styles.glow} aria-hidden="true" />
        {sides.map(({ page: sidePage, offset }, i) => (
          <PhoneSide key={i} page={sidePage} offset={offset} side={i === 0 ? 'left' : 'right'} />
        ))}
        <div className={styles.phone}>
          <div className={styles.phoneScreen}>
            <StatusBar />
            {screen}
            <div className={styles.phoneAddress} aria-hidden="true">
              <LockIcon />
              <span className={styles.addressText}>
                {site}
                {address === '/' ? '' : address}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={view.ref}
      className={`${styles.tour} ${styles.browserTour}`}
      style={toneStyle}
      role="img"
      aria-label={label}
    >
      <div className={styles.browserBar} aria-hidden="true">
        <span className={styles.browserDots}>
          <span />
          <span />
          <span />
        </span>
        <span className={styles.browserAddress}>
          <LockIcon />
          <span className={styles.addressText}>
            {site}
            {address === '/' ? '' : address}
          </span>
        </span>
      </div>
      {screen}
    </div>
  );
}

// A phone leaning in behind the main one, showing another page – from its top, or `offset` (0–1) of
// the way down it
function PhoneSide({
  page,
  offset,
  side,
}: {
  page: WorkTourPage;
  offset: number;
  side: 'left' | 'right';
}) {
  return (
    <div className={`${styles.phone} ${styles.sidePhone}`} data-side={side} aria-hidden="true">
      <div className={styles.phoneScreen}>
        <StatusBar />
        <div className={styles.screen}>
          <div
            key={page.path}
            className={styles.page}
            style={offset ? { transform: `translateY(${-offset * 100}%)` } : undefined}
          >
            <Image src={page.image} alt="" width={page.width} height={page.height} unoptimized />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className={styles.statusBar} aria-hidden="true">
      <span>9:41</span>
      <span className={styles.island} />
      <span className={styles.statusIcons}>
        <svg viewBox="0 0 18 12">
          <rect x="0" y="8" width="3" height="4" rx="1" />
          <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
          <rect x="10" y="3" width="3" height="9" rx="1" />
          <rect x="15" y="0" width="3" height="12" rx="1" />
        </svg>
        <svg viewBox="0 0 26 12">
          <rect x="0.5" y="0.5" width="22" height="11" rx="3" fill="none" stroke="currentColor" />
          <rect x="2.5" y="2.5" width="16" height="7" rx="1.5" />
          <rect x="24" y="4" width="1.6" height="4" rx="0.8" />
        </svg>
      </span>
    </div>
  );
}

function LockIcon() {
  return (
    <svg className={styles.lock} viewBox="0 0 16 16" aria-hidden="true">
      <rect x="3.5" y="7" width="9" height="7" rx="1.6" />
      <path d="M5.5 7V5.2a2.5 2.5 0 0 1 5 0V7" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
