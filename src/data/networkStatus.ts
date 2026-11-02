import type { NetworkStatusContent } from '@/types/networkStatus';

// The cards shown when the connection fails or crawls (src/components/layout/NetworkStatus).
// public/offline.html has its own copy of the "offline" and "unreachable" text – it's shown when a
// whole page can't load, so it can't read this file. Change both together.
export const networkStatus: NetworkStatusContent = {
  states: {
    offline: {
      status: 'You’re offline',
      code: 'ERR_INTERNET_DISCONNECTED',
      heading: 'No internet connection.',
      text: 'Looks like your device lost its connection. Check your Wi-Fi or mobile data – we’ll be right here when you’re back online.',
      primary: 'Try again',
      primaryBusy: 'Checking…',
      secondary: 'Go back',
      tips: ['Check Wi-Fi or mobile data', 'Turn off airplane mode', 'Restart your router'],
    },
    unreachable: {
      status: 'Can’t connect',
      code: 'ERR_CONNECTION_TIMED_OUT',
      heading: 'This site can’t be reached.',
      text: '{host} took too long to respond. It’s not you – it might be us. Please try again in a few minutes.',
      primary: 'Try again',
      primaryBusy: 'Checking…',
      secondary: 'Contact support', // opens WhatsApp
      tips: ['Check the web address', 'Clear your browser cache', 'Try again shortly'],
    },
    slow: {
      status: 'Slow connection detected',
      heading: 'Your network is a little slow.',
      text: 'We’re still loading the page, but your connection is taking its time. Give it a moment, or switch to a stronger network.',
      primary: 'Retry now',
      primaryBusy: 'Reloading…',
      secondary: 'Keep waiting',
      tips: ['Move closer to your router', 'Pause downloads & streams', 'Switch to mobile data'],
    },
  },
  mbps: 'Mbps',
  slowLabel: 'Slow',
  slowBelowMbps: 0.7,
  slowAfterMs: 8000,
};
