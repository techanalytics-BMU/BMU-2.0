// Sound and desktop alerts for new leads in the dashboard (browser only). On by default; the
// user menu switches them, and the choice is remembered in this browser.

const KEY = 'bmu-dashboard-alerts';

export function alertsEnabled() {
  try {
    return localStorage.getItem(KEY) !== 'off';
  } catch {
    return true;
  }
}

export function setAlertsEnabled(on: boolean) {
  try {
    localStorage.setItem(KEY, on ? 'on' : 'off');
  } catch {
    // not remembered – fine
  }
  // Desktop notifications need the browser's permission, asked once
  if (on && 'Notification' in window && Notification.permission === 'default') {
    void Notification.requestPermission();
  }
}

let audio: AudioContext | null = null;

/** A soft two-note chime (made in the browser – no sound file) */
export function playChime() {
  try {
    audio ??= new AudioContext();
    const start = audio.currentTime;
    [880, 1318.5].forEach((frequency, i) => {
      const tone = audio!.createOscillator();
      const volume = audio!.createGain();
      tone.type = 'sine';
      tone.frequency.value = frequency;
      const at = start + i * 0.14;
      volume.gain.setValueAtTime(0, at);
      volume.gain.linearRampToValueAtTime(0.12, at + 0.02);
      volume.gain.exponentialRampToValueAtTime(0.0001, at + 0.45);
      tone.connect(volume).connect(audio!.destination);
      tone.start(at);
      tone.stop(at + 0.5);
    });
  } catch {
    // the browser blocked sound (no click on the page yet) – fine
  }
}

/** A desktop notification – only when the dashboard tab isn't the one being looked at */
export function notifyDesktop(title: string, body: string, onClick: () => void) {
  if (!('Notification' in window) || Notification.permission !== 'granted' || !document.hidden) {
    return;
  }
  const notification = new Notification(title, { body, icon: '/images/common/bmu-logo-light.webp' });
  notification.onclick = () => {
    window.focus();
    onClick();
    notification.close();
  };
}
