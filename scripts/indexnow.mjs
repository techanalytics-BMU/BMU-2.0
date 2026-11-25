// Tells Bing (and the other IndexNow search engines – Yandex, Seznam, Naver) about every page in
// the live sitemap, so new and changed pages are crawled within days instead of weeks. ChatGPT
// search and Microsoft Copilot answer from Bing's index. Run after a deploy: npm run search:indexnow
// The key proves the site is ours: it's served at https://www.bmumarketing.in/9bbca7fbaeaf1f54b9f6815f5e3f61f4.txt (public/).
const SITE = 'https://www.bmumarketing.in';
const KEY = '9bbca7fbaeaf1f54b9f6815f5e3f61f4';

const locs = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
const get = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${url}: ${response.status}`);
  return response.text();
};

// The sitemap index lists one sitemap per kind of page; each lists the pages
const sitemaps = locs(await get(`${SITE}/sitemap.xml`));
const urls = [...new Set((await Promise.all(sitemaps.map(get))).flatMap(locs))];
console.log(`${urls.length} pages in ${sitemaps.length} sitemaps`);

// IndexNow takes up to 10,000 addresses a request
for (let i = 0; i < urls.length; i += 10000) {
  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: new URL(SITE).host,
      key: KEY,
      keyLocation: `${SITE}/${KEY}.txt`,
      urlList: urls.slice(i, i + 10000),
    }),
  });
  // 200 or 202: accepted. 403: the key file isn't live yet (deploy first). 422: an address isn't ours.
  console.log(`pages ${i + 1}–${Math.min(i + 10000, urls.length)}: ${response.status} ${response.statusText}`);
}
