// BMU Marketing – retired service worker. It used to show public/offline.html (the "No internet
// connection" card) when a page couldn't load; that card has been removed from the site. Browsers
// that installed the old worker fetch this file again on their next visit (it's never cached – see
// next.config.ts), and this version deletes the saved offline page and removes itself, so every page
// loads straight from the network as normal. Safe to delete once visitors have had a few months to
// pick it up.

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key.startsWith('bmu-offline')).map((key) => caches.delete(key)))
      )
      .then(() => self.registration.unregister())
  );
});
