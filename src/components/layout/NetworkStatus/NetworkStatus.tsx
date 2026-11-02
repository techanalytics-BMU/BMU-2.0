'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { networkStatus } from '@/data/networkStatus';
import { site } from '@/data/site';
import type { NetworkState } from '@/types/networkStatus';
import styles from './NetworkStatus.module.css';
import NetworkStatusIcon from './NetworkStatusIcon';

const SLOW_SHOWN_KEY = 'bmu-slow-network-shown'; // sessionStorage: the slow card shows once a visit
const MIN_CHECK_MS = 900; // "Checking…" stays at least this long, so the button doesn't just flicker

// Chrome, Edge and Android browsers report the connection's speed; Safari and Firefox don't
type Connection = EventTarget & { effectiveType?: string; downlink?: number };
const connectionOf = () => (navigator as Navigator & { connection?: Connection }).connection;

const isSlow = (connection?: Connection) =>
  !!connection &&
  (connection.effectiveType === 'slow-2g' ||
    connection.effectiveType === '2g' ||
    (!!connection.downlink && connection.downlink < networkStatus.slowBelowMbps));

// Browser storage can be blocked (private windows, settings) – then the slow card may show again
function slowShownThisVisit() {
  try {
    return sessionStorage.getItem(SLOW_SHOWN_KEY) === '1';
  } catch {
    return false;
  }
}

function rememberSlowShown() {
  try {
    sessionStorage.setItem(SLOW_SHOWN_KEY, '1');
  } catch {
    // not saved – fine
  }
}

// Can we reach the website itself? A tiny request that skips every cache.
async function siteAnswers() {
  try {
    const response = await fetch(`/favicon.ico?ping=${Date.now()}`, { method: 'HEAD', cache: 'no-store' });
    return response.ok;
  } catch {
    return false;
  }
}

// A card over the page (added in src/app/layout.tsx, so the website and the dashboard both get it)
// when the connection lets the visitor down:
//   offline     – the device lost its internet; goes away by itself once it's back
//   unreachable – the internet works but the site doesn't answer (found when checking again)
//   slow        – a slow connection (as the browser reports it, or the page still loading after
//                 8s); once a visit, and "Keep waiting" closes it
// It also registers public/sw.js (live site only), which shows public/offline.html – the same
// design – when a whole page can't load at all.
export default function NetworkStatus() {
  const t = networkStatus;
  const [state, setState] = useState<NetworkState | null>(null);
  const [busy, setBusy] = useState(false);
  const [mbps, setMbps] = useState<number | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // The fallback page for whole pages that can't load – not in development, where a service worker
  // would get in the way of live reloading
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production' || !('serviceWorker' in navigator)) return;
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // not supported here (e.g. some private windows) – the browser's own error page shows instead
    });
  }, []);

  // Offline → online: is it the internet, or is it us?
  const recheck = useCallback(async () => {
    if (!navigator.onLine) {
      setState('offline');
      return false;
    }
    const ok = await siteAnswers();
    setState((current) => (ok ? (current === 'slow' ? current : null) : 'unreachable'));
    return ok;
  }, []);

  useEffect(() => {
    if (!navigator.onLine) setState('offline');
    const goOffline = () => setState('offline');
    const goOnline = () => void recheck();
    window.addEventListener('offline', goOffline);
    window.addEventListener('online', goOnline);
    return () => {
      window.removeEventListener('offline', goOffline);
      window.removeEventListener('online', goOnline);
    };
  }, [recheck]);

  // Slow: what the browser says about the connection, or – where it says nothing – the page still
  // loading after slowAfterMs
  useEffect(() => {
    if (slowShownThisVisit()) return;
    const connection = connectionOf();
    const show = () => {
      if (!navigator.onLine || slowShownThisVisit()) return;
      rememberSlowShown();
      setMbps(connection?.downlink ? connection.downlink : null);
      setState((current) => current ?? 'slow');
    };
    if (isSlow(connection)) show();
    const onChange = () => {
      if (isSlow(connection)) show();
    };
    connection?.addEventListener?.('change', onChange);

    let timer: number | undefined;
    const loaded = () => window.clearTimeout(timer);
    if (document.readyState !== 'complete') {
      timer = window.setTimeout(show, Math.max(0, t.slowAfterMs - performance.now()));
      window.addEventListener('load', loaded, { once: true });
    }
    return () => {
      connection?.removeEventListener?.('change', onChange);
      window.removeEventListener('load', loaded);
      window.clearTimeout(timer);
    };
  }, [t.slowAfterMs]);

  // While a card is up: focus moves into it (screen readers read it out); Escape closes the slow card
  useEffect(() => {
    if (!state) return;
    cardRef.current?.focus({ preventScroll: true });
    if (state !== 'slow') return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setState(null);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [state]);

  if (!state) return null;
  const card = t.states[state];

  const tryAgain = async () => {
    if (state === 'slow') {
      setBusy(true);
      window.location.reload();
      return;
    }
    setBusy(true);
    const [ok] = await Promise.all([recheck(), new Promise((done) => setTimeout(done, MIN_CHECK_MS))]);
    setBusy(false);
    if (ok && state === 'unreachable') window.location.reload(); // back up – load the page fresh
  };

  return (
    <div className={styles.overlay}>
      <div
        ref={cardRef}
        className={styles.card}
        tabIndex={-1}
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="network-status-heading"
        aria-describedby="network-status-text"
        data-lenis-prevent
      >
        <NetworkStatusIcon state={state} mbps={mbps} unit={t.mbps} slowLabel={t.slowLabel} />

        <p className={styles.status}>
          <span className={styles.statusDot} aria-hidden="true" />
          {card.status}
          {card.code && <span className={styles.statusCode}>· {card.code}</span>}
        </p>

        <h2 id="network-status-heading" className={styles.heading}>
          {card.heading}
        </h2>
        <p id="network-status-text" className={styles.text}>
          {card.text.replace('{host}', new URL(site.url).host)}
        </p>

        <div className={styles.actions}>
          <button type="button" className={styles.primary} disabled={busy} onClick={tryAgain}>
            <svg viewBox="0 0 24 24" className={styles.spinner} data-busy={busy} aria-hidden="true">
              <path d="M20 12a8 8 0 1 1-2.34-5.66M20 4.5V9h-4.5" />
            </svg>
            {busy ? card.primaryBusy : card.primary}
          </button>
          {state === 'unreachable' ? (
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.secondary}>
              {card.secondary}
            </a>
          ) : (
            <button
              type="button"
              className={styles.secondary}
              onClick={() => (state === 'slow' ? setState(null) : window.history.back())}
            >
              {card.secondary}
            </button>
          )}
        </div>

        <ul className={styles.tips}>
          {card.tips.map((tip) => (
            <li key={tip} className={styles.tip}>
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
