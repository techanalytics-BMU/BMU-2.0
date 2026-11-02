// BMU Marketing – service worker (registered by src/components/layout/NetworkStatus, live site only).
// One job: when a whole page can't load – no internet, or the site is down or doesn't answer within
// TIMEOUT – show /offline.html (the "No internet connection" / "This site can't be reached" card)
// instead of the browser's own error page. Nothing else is cached: every page, image and script
// still comes straight from the network. Bump CACHE after changing offline.html.

const CACHE = 'bmu-offline-v1';
const FALLBACK = '/offline.html';
const TIMEOUT = 20000; // ms to wait for a page to start answering

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.add(new Request(FALLBACK, { cache: 'reload' }))));
  self.skipWaiting();
});

// Old copies of the fallback page are cleared out
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

const fallback = () => caches.match(FALLBACK).then((page) => page || Response.error());

self.addEventListener('fetch', (event) => {
  if (event.request.mode !== 'navigate') return; // whole pages only
  event.respondWith(
    Promise.race([
      fetch(event.request),
      new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), TIMEOUT)),
    ])
      // Vercel's "bad gateway / unavailable / timed out" count as the site being down
      .then((response) => (response.status >= 502 && response.status <= 504 ? fallback() : response))
      .catch(fallback)
  );
});
