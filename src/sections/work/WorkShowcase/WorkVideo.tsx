'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { workShowcase } from '@/data/work/workShowcase';
import styles from './WorkVideo.module.css';

type Props = {
  src: string; // the .mp4 file
  cover: string; // its first frame – shown before it plays and again when it ends
  title: string; // what it shows, for screen readers
  youtube?: string; // the same video on YouTube, for the menu's "Watch on YouTube"
  sound: boolean; // start with sound (it was turned on for an earlier video)
  onSoundChange: (on: boolean) => void;
};

const SPEEDS = [0.5, 0.75, 1, 1.25, 1.5, 2];
const HIDE_AFTER = 2500; // ms without moving before the controls tuck away while playing

// iPhones can't put a page element in full screen, only the video itself
type IOSVideo = HTMLVideoElement & { webkitEnterFullscreen?: () => void };

// A video playing on its own – just the video, filling its frame – with our controls on top: play /
// pause, time, sound, full screen, a ⋮ menu (speed, open on YouTube) and a seek bar. It starts by
// itself, muted unless sound was turned on before (browsers only allow silent autoplay). When it
// ends it stops on its first frame with a Replay button; it doesn't start again by itself.
export default function WorkVideo({ src, cover, title, youtube, sound, onSoundChange }: Props) {
  const t = workShowcase.stage.player;
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hideTimer = useRef(0);

  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);
  const [muted, setMuted] = useState(!sound);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [scrub, setScrub] = useState<number | null>(null); // 0–1 while the seek bar is dragged
  const [menuOpen, setMenuOpen] = useState(false);
  const [awake, setAwake] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [canFullscreen, setCanFullscreen] = useState(false);

  // Start by itself (unless motion is reduced); if the browser blocks it with sound, try muted
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    setCanFullscreen(
      document.fullscreenEnabled || typeof (video as IOSVideo).webkitEnterFullscreen === 'function'
    );
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    video.play().catch(() => {
      video.muted = true;
      setMuted(true);
      video.play().catch(() => {});
    });
  }, []);

  useEffect(() => {
    const onChange = () => setFullscreen(document.fullscreenElement === rootRef.current);
    document.addEventListener('fullscreenchange', onChange);
    return () => {
      document.removeEventListener('fullscreenchange', onChange);
      window.clearTimeout(hideTimer.current);
    };
  }, []);

  // The menu closes on a click elsewhere or Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onPointer = (event: PointerEvent) => {
      if (!(event.target as Element).closest(`.${styles.menuWrap}`)) setMenuOpen(false);
    };
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setMenuOpen(false);
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  // Moving over the video shows the controls; they tuck away again while it plays
  const wake = () => {
    setAwake(true);
    window.clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => setAwake(false), HIDE_AFTER);
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (ended) return replay();
    if (video.paused) video.play().catch(() => {});
    else video.pause();
    wake();
  };

  const replay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play().catch(() => {});
    setEnded(false);
    wake();
  };

  const setSound = (on: boolean) => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !on;
    if (on) video.volume = 1;
    setMuted(!on);
    onSoundChange(on);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current as IOSVideo | null;
    if (document.fullscreenElement) document.exitFullscreen();
    else if (document.fullscreenEnabled) rootRef.current?.requestFullscreen();
    else video?.webkitEnterFullscreen?.();
  };

  const chooseSpeed = (rate: number) => {
    if (videoRef.current) videoRef.current.playbackRate = rate;
    setSpeed(rate);
    setMenuOpen(false);
  };

  // ---------- Seek bar ----------
  const fractionAt = (event: React.PointerEvent<HTMLDivElement>) => {
    const box = event.currentTarget.getBoundingClientRect();
    return Math.min(1, Math.max(0, (event.clientX - box.left) / box.width));
  };

  const seek = (seconds: number) => {
    const video = videoRef.current;
    if (!video || !duration) return;
    const to = Math.min(duration, Math.max(0, seconds));
    video.currentTime = to;
    setTime(to);
    if (ended && to < duration) {
      setEnded(false);
      video.play().catch(() => {});
    }
  };

  const onSeekKey = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const keys: Record<string, number> = {
      ArrowLeft: time - 5,
      ArrowDown: time - 5,
      ArrowRight: time + 5,
      ArrowUp: time + 5,
      Home: 0,
      End: duration,
    };
    if (event.key in keys) {
      event.preventDefault();
      seek(keys[event.key]);
    }
  };

  const shown = scrub ?? (duration ? time / duration : 0);
  const showControls = !playing || ended || awake || menuOpen || scrub !== null;
  const clock = (seconds: number) =>
    `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`;

  return (
    <div
      ref={rootRef}
      className={styles.player}
      data-controls={showControls || undefined}
      onPointerMove={wake}
    >
      <video
        ref={videoRef}
        src={src}
        poster={cover}
        aria-label={title}
        muted={!sound}
        playsInline
        preload="metadata"
        onPlay={() => {
          setPlaying(true);
          setEnded(false);
        }}
        onPause={() => setPlaying(false)}
        onEnded={() => {
          setPlaying(false);
          setEnded(true);
        }}
        onTimeUpdate={(event) => setTime(event.currentTarget.currentTime)}
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onVolumeChange={(event) => setMuted(event.currentTarget.muted)}
      />

      {/* Covers the video: a click plays / pauses, a double click goes full screen */}
      <button
        type="button"
        className={styles.surface}
        aria-label={playing ? t.pause : t.play}
        onClick={togglePlay}
        onDoubleClick={canFullscreen ? toggleFullscreen : undefined}
      />

      {/* At the end: its first frame again, with Replay */}
      {ended && (
        <div className={styles.end}>
          <Image src={cover} alt="" fill sizes="(max-width: 1024px) 100vw, 420px" />
          <button type="button" className={styles.replay} onClick={replay}>
            <ReplayIcon />
            {t.replay}
          </button>
        </div>
      )}

      {muted && !ended && (
        <button type="button" className={styles.soundOn} onClick={() => setSound(true)}>
          <SoundIcon muted={false} />
          {workShowcase.stage.soundLabel}
        </button>
      )}

      <div className={styles.controls}>
        <div className={styles.buttons}>
          <button
            type="button"
            className={styles.control}
            aria-label={ended ? t.replay : playing ? t.pause : t.play}
            onClick={togglePlay}
          >
            {ended ? <ReplayIcon /> : playing ? <PauseIcon /> : <PlayIcon />}
          </button>

          <span className={styles.time} aria-hidden="true">
            {clock(scrub !== null ? scrub * duration : time)}
            {duration ? ` / ${clock(duration)}` : ''}
          </span>

          <button
            type="button"
            className={styles.control}
            aria-label={muted ? t.unmute : t.mute}
            onClick={() => setSound(muted)}
          >
            <SoundIcon muted={muted} />
          </button>

          {canFullscreen && (
            <button
              type="button"
              className={styles.control}
              aria-label={fullscreen ? t.exitFullscreen : t.fullscreen}
              onClick={toggleFullscreen}
            >
              <FullscreenIcon exit={fullscreen} />
            </button>
          )}

          <div className={styles.menuWrap}>
            <button
              type="button"
              className={styles.control}
              aria-label={t.more}
              aria-haspopup="menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <MoreIcon />
            </button>
            {menuOpen && (
              <div className={styles.menu} role="menu">
                <span className={styles.menuHeading}>{t.speed}</span>
                {SPEEDS.map((rate) => (
                  <button
                    key={rate}
                    type="button"
                    role="menuitemradio"
                    aria-checked={rate === speed}
                    className={styles.menuItem}
                    onClick={() => chooseSpeed(rate)}
                  >
                    {rate === 1 ? t.normalSpeed : `${rate}×`}
                  </button>
                ))}
                {youtube && (
                  <a
                    role="menuitem"
                    className={`${styles.menuItem} ${styles.menuDivided}`}
                    href={`https://www.youtube.com/shorts/${youtube}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      videoRef.current?.pause();
                      setMenuOpen(false);
                    }}
                  >
                    {t.watchOnYouTube}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        <div
          className={styles.seek}
          role="slider"
          tabIndex={0}
          aria-label={t.progress}
          aria-valuemin={0}
          aria-valuemax={Math.round(duration)}
          aria-valuenow={Math.round(time)}
          aria-valuetext={`${clock(time)} / ${clock(duration)}`}
          onKeyDown={onSeekKey}
          onPointerDown={(event) => {
            event.currentTarget.setPointerCapture(event.pointerId);
            setScrub(fractionAt(event));
          }}
          onPointerMove={(event) => {
            if (scrub !== null) setScrub(fractionAt(event));
          }}
          onPointerUp={(event) => {
            if (scrub === null) return;
            seek(fractionAt(event) * duration);
            setScrub(null);
          }}
          onPointerCancel={() => setScrub(null)}
        >
          <span className={styles.track}>
            <span className={styles.fill} style={{ transform: `scaleX(${shown})` }} />
          </span>
          <span className={styles.knob} style={{ left: `${shown * 100}%` }} />
        </div>
      </div>
    </div>
  );
}

// ---------- Icons ----------
function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.4-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="6" y="5" width="4" height="14" rx="1" />
      <rect x="14" y="5" width="4" height="14" rx="1" />
    </svg>
  );
}

function SoundIcon({ muted }: { muted: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z" />
      {muted ? (
        <path className={styles.stroke} d="M16 9.5l5 5M21 9.5l-5 5" />
      ) : (
        <path className={styles.stroke} d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" />
      )}
    </svg>
  );
}

function FullscreenIcon({ exit }: { exit: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        className={styles.stroke}
        d={
          exit
            ? 'M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5'
            : 'M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5'
        }
      />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="5.5" r="1.8" />
      <circle cx="12" cy="12" r="1.8" />
      <circle cx="12" cy="18.5" r="1.8" />
    </svg>
  );
}

function ReplayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path className={styles.stroke} d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3" />
      <path d="M4 3.5v5.2h5.2z" />
    </svg>
  );
}
