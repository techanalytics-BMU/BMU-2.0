'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { workShowcase } from '@/data/work/workShowcase';
import styles from './WorkYouTube.module.css';

type Props = {
  id: string; // the YouTube video's id
  cover: string; // its first frame, shown again when it ends
  title: string; // what it shows, for screen readers
  sound: boolean; // start with sound (it was turned on for an earlier video)
  onSoundChange: (on: boolean) => void;
};

const YOUTUBE = 'https://www.youtube-nocookie.com';
const SPEEDS = [0.5, 0.75, 1, 1.25, 1.5, 2];
const HIDE_AFTER = 2500; // ms without moving before the controls tuck away while playing

// YouTube player states (sent by the player)
const ENDED = 0;
const PLAYING = 1;
const PAUSED = 2;

type PlayerInfo = {
  playerState?: number;
  currentTime?: number;
  duration?: number;
  muted?: boolean;
  playbackRate?: number;
};

// A YouTube Short in YouTube's cookie-free player, with its own controls hidden and ours on top, like
// a video file's: play / pause, sound, full screen, a ⋮ menu (speed, open on YouTube) and a seek bar.
// It starts by itself, muted unless sound was turned on before. When it ends it stops on its first
// frame with a Replay button – it doesn't start again by itself. The player is driven with messages
// (YouTube's iframe API) and reports its time and state back the same way.
export default function WorkYouTube({ id, cover, title, sound, onSoundChange }: Props) {
  const t = workShowcase.stage.player;
  const rootRef = useRef<HTMLDivElement>(null);
  const player = useRef<HTMLIFrameElement>(null);
  const hideTimer = useRef(0);
  const askTimer = useRef(0);
  const heard = useRef(false); // the player is ready and reporting
  // For spotting a loop: YouTube's Shorts player sometimes starts again by itself at the end
  // without saying it ended – the time just jumps from the end back to the start
  const lastTime = useRef(0);
  const length = useRef(0);
  const ourSeekUntil = useRef(0); // a jump before this moment was ours (seek bar, Replay)
  const endedRef = useRef(false);

  // The address is fixed when the video opens – changing it would reload the player
  const [src] = useState(() => {
    const still =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return `${YOUTUBE}/embed/${id}?${new URLSearchParams({
      autoplay: still ? '0' : '1',
      mute: sound ? '0' : '1',
      controls: '0', // ours instead
      disablekb: '1',
      fs: '0',
      iv_load_policy: '3',
      playsinline: '1',
      rel: '0',
      enablejsapi: '1',
    })}`;
  });

  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);
  const [muted, setMuted] = useState(!sound);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [scrub, setScrub] = useState<number | null>(null); // 0–1 while the seek bar is dragged
  const [menuOpen, setMenuOpen] = useState(false);
  const [captions, setCaptions] = useState(false);
  const captionsRef = useRef(false); // the same, for the message handler
  const [awake, setAwake] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [canFullscreen, setCanFullscreen] = useState(false);

  const tell = (func: string, args: unknown[] = []) =>
    player.current?.contentWindow?.postMessage(JSON.stringify({ event: 'command', func, args }), YOUTUBE);

  const markEnded = (on: boolean) => {
    endedRef.current = on;
    setEnded(on);
  };

  // What the player reports: state, time, length, sound, speed
  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== YOUTUBE || event.source !== player.current?.contentWindow) return;
      let data: { event?: string; info?: number | PlayerInfo };
      try {
        data = JSON.parse(event.data);
      } catch {
        return;
      }
      const info: PlayerInfo =
        typeof data.info === 'number' ? { playerState: data.info } : (data.info ?? {});
      // Ready, or its first report of the time (it may have been ready before it heard us): stop
      // asking, and ask for every change of state (playing, paused, ended)
      const first =
        !heard.current &&
        (data.event === 'onReady' ||
          (data.event === 'infoDelivery' && typeof info.currentTime === 'number'));
      if (first) {
        heard.current = true;
        tell('addEventListener', ['onStateChange']);
      }
      // YouTube may switch captions on by itself (also when a video starts again); they'd sit under
      // our controls, so they wait for the menu's Captions option
      const started = data.event === 'onStateChange' && info.playerState === PLAYING;
      if (!captionsRef.current && (first || started || data.event === 'onApiChange')) {
        tell('unloadModule', ['captions']);
      }
      if (info.duration) {
        length.current = info.duration;
        setDuration(info.duration);
      }

      // Started again by itself: stop it and show Replay, as if it had ended
      if (typeof info.currentTime === 'number') {
        const now = info.currentTime;
        const looped =
          length.current > 0 &&
          lastTime.current > length.current - 1.5 &&
          now < lastTime.current - 2 &&
          performance.now() > ourSeekUntil.current;
        lastTime.current = now;
        if (looped && !endedRef.current) {
          tell('pauseVideo');
          markEnded(true);
          setPlaying(false);
          setTime(length.current);
          return;
        }
        if (!endedRef.current) setTime(now);
      }

      if (info.playerState === PLAYING) {
        // Playing again behind the Replay screen (looped by itself): stop it
        if (endedRef.current) tell('pauseVideo');
        else setPlaying(true);
      } else if (info.playerState === PAUSED) {
        setPlaying(false);
      } else if (info.playerState === ENDED) {
        setPlaying(false);
        markEnded(true);
      }
      if (typeof info.muted === 'boolean') setMuted(info.muted);
      if (info.playbackRate) setSpeed(info.playbackRate);
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  useEffect(() => {
    setCanFullscreen(document.fullscreenEnabled);
    const onChange = () => setFullscreen(document.fullscreenElement === rootRef.current);
    document.addEventListener('fullscreenchange', onChange);
    return () => {
      document.removeEventListener('fullscreenchange', onChange);
      window.clearTimeout(hideTimer.current);
      window.clearInterval(askTimer.current);
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

  // The player only reports once told someone is listening, and only hears it when ready – so ask
  // every half second until its time starts coming in (as YouTube's own script does)
  const listen = () => {
    window.clearInterval(askTimer.current);
    let tries = 0;
    const ask = () => {
      // Up to a minute, for slow connections
      if (heard.current || ++tries > 120) return window.clearInterval(askTimer.current);
      player.current?.contentWindow?.postMessage(
        JSON.stringify({ event: 'listening', id: 1, channel: 'widget' }),
        YOUTUBE
      );
    };
    ask();
    askTimer.current = window.setInterval(ask, 500);
  };

  // Moving over the video shows the controls; they tuck away again while it plays
  const wake = () => {
    setAwake(true);
    window.clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => setAwake(false), HIDE_AFTER);
  };

  const togglePlay = () => {
    if (ended) return replay();
    tell(playing ? 'pauseVideo' : 'playVideo');
    setPlaying(!playing);
    wake();
  };

  const replay = () => {
    ourSeekUntil.current = performance.now() + 1500;
    lastTime.current = 0;
    tell('seekTo', [0, true]);
    tell('playVideo');
    markEnded(false);
    setTime(0);
    setPlaying(true);
    wake();
  };

  const setSound = (on: boolean) => {
    if (on) {
      tell('unMute');
      tell('setVolume', [100]);
    } else {
      tell('mute');
    }
    setMuted(!on);
    onSoundChange(on);
  };

  const toggleFullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else rootRef.current?.requestFullscreen();
  };

  const toggleCaptions = () => {
    const on = !captions;
    tell(on ? 'loadModule' : 'unloadModule', ['captions']);
    captionsRef.current = on;
    setCaptions(on);
    setMenuOpen(false);
  };

  const chooseSpeed = (rate: number) => {
    tell('setPlaybackRate', [rate]);
    setSpeed(rate);
    setMenuOpen(false);
  };

  // ---------- Seek bar ----------
  const fractionAt = (event: React.PointerEvent<HTMLDivElement>) => {
    const box = event.currentTarget.getBoundingClientRect();
    return Math.min(1, Math.max(0, (event.clientX - box.left) / box.width));
  };

  const seek = (seconds: number) => {
    if (!duration) return;
    const to = Math.min(duration, Math.max(0, seconds));
    ourSeekUntil.current = performance.now() + 1500;
    lastTime.current = to;
    tell('seekTo', [to, true]);
    setTime(to);
    if (ended && to < duration) {
      markEnded(false);
      tell('playVideo');
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
      <iframe
        ref={player}
        src={src}
        title={title}
        allow="autoplay; encrypted-media; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        tabIndex={-1}
        onLoad={listen}
      />

      {/* Covers the player: a click plays / pauses, a double click goes full screen */}
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
                <button
                  type="button"
                  role="menuitemcheckbox"
                  aria-checked={captions}
                  className={`${styles.menuItem} ${styles.menuDivided}`}
                  onClick={toggleCaptions}
                >
                  {t.captions}
                </button>
                <a
                  role="menuitem"
                  className={`${styles.menuItem} ${styles.menuDivided}`}
                  href={`https://www.youtube.com/shorts/${id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    tell('pauseVideo');
                    setMenuOpen(false);
                  }}
                >
                  {t.watchOnYouTube}
                </a>
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
