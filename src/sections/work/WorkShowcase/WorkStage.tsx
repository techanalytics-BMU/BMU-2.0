'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Button from '@/components/ui/Button/Button';
import { workCategories, workShowcase } from '@/data/work/workShowcase';
import type { WorkProject } from '@/types/work';
import styles from './WorkStage.module.css';
import WorkTour from './WorkTour';

// YouTube's player, without its tracking cookies: starts by itself (muted, as browsers require
// unless sound was already turned on) and takes commands – "Turn sound on", and "play again" when a
// video ends. (YouTube's own loop setting needs `playlist`, which makes Shorts "unavailable".)
const YOUTUBE = 'https://www.youtube-nocookie.com';
const youtubeUrl = (id: string, sound: boolean, autoplay: boolean) =>
  `${YOUTUBE}/embed/${id}?${new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    mute: sound ? '0' : '1',
    playsinline: '1',
    rel: '0',
    enablejsapi: '1',
  })}`;

const tellPlayer = (player: HTMLIFrameElement | null, func: string, args: unknown[] = []) =>
  player?.contentWindow?.postMessage(JSON.stringify({ event: 'command', func, args }), YOUTUBE);

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
  // Whether a YouTube video starts with sound – only changes with the video, as changing the
  // player's address would reload it
  const [startWithSound, setStartWithSound] = useState(false);
  const player = useRef<HTMLIFrameElement>(null);

  const slides = projects.flatMap((project) => project.media.map((media) => ({ project, media })));
  const { project, media } = slides[shown];
  const { review } = project;
  const ratio = project.ratio ?? workCategories[project.category].ratio;
  const show = (i: number) => {
    setShown(i);
    setStartWithSound(sound);
  };
  const move = (step: number) => show((shown + step + slides.length) % slides.length);
  const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const turnSoundOn = () => {
    setSound(true);
    // A YouTube video is told to unmute; a video file follows `muted` by itself
    tellPlayer(player.current, 'unMute');
    tellPlayer(player.current, 'setVolume', [100]);
  };

  // A YouTube video plays again from the start when it ends, like the video files' `loop`
  const youtube = live ? media.youtube : undefined;
  useEffect(() => {
    if (!youtube) return;
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== YOUTUBE || event.source !== player.current?.contentWindow) return;
      let data: { event?: string; info?: number | { playerState?: number } };
      try {
        data = JSON.parse(event.data);
      } catch {
        return;
      }
      const state = typeof data.info === 'object' ? data.info?.playerState : data.info;
      if ((data.event === 'onStateChange' || data.event === 'infoDelivery') && state === 0) {
        tellPlayer(player.current, 'seekTo', [0, true]);
        tellPlayer(player.current, 'playVideo');
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [youtube]);

  // Ask the player to report its state (it only does once told someone is listening) – again a
  // moment later, in case it wasn't ready yet
  const listen = () => {
    const ask = () =>
      player.current?.contentWindow?.postMessage(
        JSON.stringify({ event: 'listening', id: 1, channel: 'widget' }),
        YOUTUBE
      );
    ask();
    window.setTimeout(ask, 1500);
  };

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
              ) : media.youtube && live ? (
                <iframe
                  ref={player}
                  src={youtubeUrl(media.youtube, startWithSound, !reduceMotion())}
                  title={media.alt}
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  onLoad={listen}
                />
              ) : media.video && live ? (
                <video
                  src={media.video}
                  poster={media.image}
                  aria-label={media.alt}
                  controls
                  autoPlay={!reduceMotion()}
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
              {(media.video || media.youtube) && live && !sound && (
                <button
                  type="button"
                  className={styles.sound}
                  data-over-player={Boolean(media.youtube) || undefined}
                  onClick={turnSoundOn}
                >
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
                  onClick={() => show(i)}
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
