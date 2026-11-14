// Google Search Console status for the site – how its pages are doing on Google, as a plain-text
// report (for the team, or for Claude to summarise when asked). Reads only; changes nothing.
//
//   npm run search:status                 the last 28 days, against the 28 before
//   npm run search:status -- --days 7     any number of days (Google keeps 16 months)
//   npm run search:status -- --json       everything, as JSON
//
// Needs, in .env.local (never committed):
//   GOOGLE_SERVICE_ACCOUNT_EMAIL – a Google service account's client_email (…@….iam.gserviceaccount.com)
//   GOOGLE_SERVICE_ACCOUNT_KEY   – its private_key, "-----BEGIN PRIVATE KEY-----\n…" (\n as written)
//   SEARCH_CONSOLE_SITE          – optional; found by itself ('sc-domain:bmumarketing.in' or
//                                  'https://www.bmumarketing.in/')
// The service account has to be added to the Search Console property (Settings → Users and
// permissions → Add user, Restricted), and the "Google Search Console API" enabled in its project.

import { createSign } from 'node:crypto';
import { readFileSync } from 'node:fs';

const DOMAIN = 'bmumarketing.in';
const SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly';
const TOKEN_URL = 'https://oauth2.googleapis.com/token';
const API = 'https://searchconsole.googleapis.com/webmasters/v3';

// ---------- Settings ----------
const args = process.argv.slice(2);
const days = Math.max(1, Math.min(480, Number(args[args.indexOf('--days') + 1]) || 28));
const asJson = args.includes('--json');

const env = (() => {
  try {
    return Object.fromEntries(
      readFileSync('.env.local', 'utf8')
        .split(/\r?\n/)
        .filter((line) => /^[A-Z0-9_]+=/.test(line))
        .map((line) => {
          const i = line.indexOf('=');
          return [line.slice(0, i), line.slice(i + 1).trim().replace(/^["']|["']$/g, '')];
        })
    );
  } catch {
    return {};
  }
})();
const email = (process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ?? env.GOOGLE_SERVICE_ACCOUNT_EMAIL)?.trim();
const key = (process.env.GOOGLE_SERVICE_ACCOUNT_KEY ?? env.GOOGLE_SERVICE_ACCOUNT_KEY)?.replace(/\\n/g, '\n').trim();
const configuredSite = (process.env.SEARCH_CONSOLE_SITE ?? env.SEARCH_CONSOLE_SITE)?.trim();

if (!email || !key) {
  console.log(`NOT CONNECTED – Search Console can't be read yet.
Add GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_SERVICE_ACCOUNT_KEY to .env.local:
  1. console.cloud.google.com → a project → APIs & Services → Library → "Google Search Console API" → Enable
  2. IAM & Admin → Service accounts → Create (no roles) → Keys → Add key → JSON (downloads a .json)
  3. search.google.com/search-console → ${DOMAIN} → Settings → Users and permissions → Add user:
     the .json's client_email, Restricted
  4. .env.local: GOOGLE_SERVICE_ACCOUNT_EMAIL=<client_email>
                 GOOGLE_SERVICE_ACCOUNT_KEY="<private_key>"`);
  process.exit(2);
}

// ---------- Google ----------
async function accessToken() {
  const now = Math.floor(Date.now() / 1000);
  const encode = (value) => Buffer.from(JSON.stringify(value)).toString('base64url');
  const unsigned = `${encode({ alg: 'RS256', typ: 'JWT' })}.${encode({ iss: email, scope: SCOPE, aud: TOKEN_URL, iat: now, exp: now + 3600 })}`;
  let signature;
  try {
    signature = createSign('RSA-SHA256').update(unsigned).sign(key, 'base64url');
  } catch {
    throw new Error('The private key could not be read – GOOGLE_SERVICE_ACCOUNT_KEY should start with -----BEGIN PRIVATE KEY-----');
  }
  const response = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: `${unsigned}.${signature}` }),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(`Google refused the service account: ${data.error_description || data.error || response.status}`);
  return data.access_token;
}

const token = await accessToken();
async function call(path, body) {
  const response = await fetch(`${API}${path}`, {
    method: body ? 'POST' : 'GET',
    headers: { Authorization: `Bearer ${token}`, ...(body ? { 'Content-Type': 'application/json' } : {}) },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(
      response.status === 403
        ? `The service account can't see the site – add ${email} in Search Console → Settings → Users and permissions. (${data.error?.message ?? ''})`
        : `Search Console: ${data.error?.message ?? response.status}`
    );
  }
  return data;
}

async function findSite() {
  if (configuredSite) return configuredSite;
  const { siteEntry = [] } = await call('/sites');
  const options = [`sc-domain:${DOMAIN}`, `https://www.${DOMAIN}/`, `https://${DOMAIN}/`, `http://www.${DOMAIN}/`, `http://${DOMAIN}/`];
  const found = options.find((url) => siteEntry.some((entry) => entry.siteUrl === url));
  if (!found) {
    throw new Error(
      `The service account can see ${siteEntry.map((entry) => entry.siteUrl).join(', ') || 'no properties'} – not ${DOMAIN}. Add it to the ${DOMAIN} property.`
    );
  }
  return found;
}

// ---------- Dates: Google's numbers end yesterday (India time) ----------
const isoDay = (date) => date.toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' });
const shift = (day, by) => {
  const date = new Date(`${day}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + by);
  return date.toISOString().slice(0, 10);
};
const to = shift(isoDay(new Date()), -1);
const from = shift(to, -(days - 1));
const previousTo = shift(from, -1);
const previousFrom = shift(previousTo, -(days - 1));

// ---------- Kinds of page, from the address (the URL patterns in src/lib/pseo/paths.ts) ----------
const MAIN = new Set(['/', '/about', '/team', '/work', '/contact', '/blog', '/privacy-policy', '/services', '/industries']);
const GROUPS = new Set(['brand-and-design', 'web-and-ai', 'ugc-and-creator-marketing', 'social-and-personal-brand', 'marketing-and-visibility', 'content-and-production']);
function kindOf(path) {
  if (MAIN.has(path)) return 'Main pages';
  const parts = path.slice(1).split('/');
  if (parts[0] === 'blog') return 'Blog articles';
  if (parts[0] === 'services') return GROUPS.has(parts[1]) ? 'Service groups' : 'Service pages';
  if (parts[0] === 'industries') return parts[2] === 'bengaluru' ? 'Bengaluru areas' : 'Industry pages';
  if (parts.length === 1 && parts[0].includes('-for-')) return 'Service for an industry';
  if (parts[1] === 'bengaluru') return 'Bengaluru areas';
  if (parts[1] === 'dubai') return 'Dubai & abroad';
  if (parts.length === 2) return 'Cities (India & abroad)';
  return 'Other';
}
const pathOf = (url) => {
  try {
    return decodeURI(new URL(url).pathname).replace(/\/+$/, '') || '/';
  } catch {
    return url;
  }
};

// ---------- Ask ----------
const site = await findSite();
const ask = (start, end, extra = {}) =>
  call(`/sites/${encodeURIComponent(site)}/searchAnalytics/query`, { startDate: start, endDate: end, type: 'web', dataState: 'all', ...extra });

const [now, before, pagesNow, pagesBefore, queries, maps] = await Promise.all([
  ask(from, to),
  ask(previousFrom, previousTo),
  ask(from, to, { dimensions: ['page'], rowLimit: 25000 }),
  ask(previousFrom, previousTo, { dimensions: ['page'], rowLimit: 25000 }),
  ask(from, to, { dimensions: ['query'], rowLimit: 1000 }),
  call(`/sites/${encodeURIComponent(site)}/sitemaps`).catch(() => ({ sitemap: [] })),
]);

const totals = (rows) => rows?.[0] ?? { clicks: 0, impressions: 0, ctr: 0, position: 0 };
const byPath = (rows = []) => {
  const map = new Map();
  for (const row of rows) {
    const path = pathOf(row.keys[0]);
    const known = map.get(path) ?? { path, clicks: 0, impressions: 0, weighted: 0 };
    known.clicks += row.clicks;
    known.impressions += row.impressions;
    known.weighted += row.position * row.impressions;
    map.set(path, known);
  }
  return [...map.values()].map((page) => ({
    path: page.path,
    kind: kindOf(page.path),
    clicks: page.clicks,
    impressions: page.impressions,
    ctr: page.impressions ? page.clicks / page.impressions : 0,
    position: page.impressions ? page.weighted / page.impressions : 0,
  }));
};
const pages = byPath(pagesNow.rows).sort((a, b) => b.clicks - a.clicks || b.impressions - a.impressions);
const previousPages = new Map(byPath(pagesBefore.rows).map((page) => [page.path, page]));

const kinds = new Map();
for (const page of pages) {
  const kind = kinds.get(page.kind) ?? { kind: page.kind, pagesSeen: 0, clicks: 0, impressions: 0 };
  kind.pagesSeen += 1;
  kind.clicks += page.clicks;
  kind.impressions += page.impressions;
  kinds.set(page.kind, kind);
}

const movers = pages
  .map((page) => ({ ...page, change: page.clicks - (previousPages.get(page.path)?.clicks ?? 0) }))
  .concat(
    [...previousPages.values()]
      .filter((page) => !pages.some((current) => current.path === page.path))
      .map((page) => ({ ...page, clicks: 0, impressions: 0, change: -page.clicks }))
  );

const queryRows = (queries.rows ?? []).map((row) => ({ query: row.keys[0], clicks: row.clicks, impressions: row.impressions, ctr: row.ctr, position: row.position }));
const report = {
  site,
  dates: { from, to, previousFrom, previousTo, days },
  totals: totals(now.rows),
  previous: totals(before.rows),
  pagesSeen: pages.length,
  pagesSeenBefore: previousPages.size,
  kinds: [...kinds.values()].sort((a, b) => b.impressions - a.impressions),
  topPages: pages.slice(0, 20),
  rising: movers.filter((page) => page.change > 0).sort((a, b) => b.change - a.change).slice(0, 8),
  falling: movers.filter((page) => page.change < 0).sort((a, b) => a.change - b.change).slice(0, 8),
  topQueries: queryRows.slice(0, 25),
  // Searches that bring impressions but sit just off the top – the easiest wins
  almostThere: queryRows
    .filter((row) => row.position >= 5 && row.position <= 20 && row.impressions >= 20)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 15),
  sitemaps: (maps.sitemap ?? []).map((map) => ({
    path: map.path,
    lastDownloaded: map.lastDownloaded ?? null,
    submitted: (map.contents ?? []).reduce((sum, content) => sum + Number(content.submitted ?? 0), 0),
    errors: Number(map.errors ?? 0),
    warnings: Number(map.warnings ?? 0),
    pending: Boolean(map.isPending),
  })),
};

if (asJson) {
  console.log(JSON.stringify(report, null, 2));
  process.exit(0);
}

// ---------- Print ----------
const n = (value) => Math.round(value).toLocaleString('en-IN');
const pct = (value) => `${(value * 100).toFixed(1)}%`;
const change = (current, past) => (past ? `${current >= past ? '+' : '−'}${Math.abs(((current - past) / past) * 100).toFixed(0)}%` : 'new');
const line = (cells, widths) => cells.map((cell, i) => String(cell).padStart(widths[i])).join('  ');
const t = report.totals;
const p = report.previous;

console.log(`SEARCH CONSOLE · ${site}
${from} → ${to} (${days} days), against ${previousFrom} → ${previousTo}

TOTALS
  Clicks        ${n(t.clicks).padStart(9)}   (${change(t.clicks, p.clicks)}, was ${n(p.clicks)})
  Impressions   ${n(t.impressions).padStart(9)}   (${change(t.impressions, p.impressions)}, was ${n(p.impressions)})
  CTR           ${pct(t.ctr).padStart(9)}   (was ${pct(p.ctr)})
  Avg position  ${t.position.toFixed(1).padStart(9)}   (was ${p.position.toFixed(1)} – lower is better)
  Pages seen    ${n(report.pagesSeen).padStart(9)}   (was ${n(report.pagesSeenBefore)})

BY KIND OF PAGE            pages    clicks   impressions`);
for (const kind of report.kinds) {
  console.log(`  ${kind.kind.padEnd(24)}${line([n(kind.pagesSeen), n(kind.clicks), n(kind.impressions)], [6, 9, 13])}`);
}

const table = (title, rows, label) => {
  console.log(`\n${title}\n  ${line(['clicks', 'impr.', 'ctr', 'pos'], [7, 8, 6, 5])}  ${label}`);
  if (!rows.length) console.log('  (none)');
  for (const row of rows) {
    console.log(`  ${line([n(row.clicks), n(row.impressions), pct(row.ctr), row.position.toFixed(1)], [7, 8, 6, 5])}  ${row.path ?? row.query}`);
  }
};
table('TOP PAGES', report.topPages, 'page');
console.log('\nRISING (clicks vs before)');
for (const row of report.rising) console.log(`  +${n(row.change).padEnd(6)} ${row.path}`);
if (!report.rising.length) console.log('  (none)');
console.log('\nFALLING (clicks vs before)');
for (const row of report.falling) console.log(`  −${n(-row.change).padEnd(6)} ${row.path}`);
if (!report.falling.length) console.log('  (none)');
table('TOP SEARCHES', report.topQueries, 'search');
table('ALMOST THERE (position 5–20, most impressions – easiest wins)', report.almostThere, 'search');

console.log('\nSITEMAPS');
if (!report.sitemaps.length) console.log('  (none submitted)');
for (const map of report.sitemaps) {
  console.log(
    `  ${map.path}\n    ${map.pending ? 'waiting for Google' : `last read ${map.lastDownloaded?.slice(0, 10) ?? 'never'}`} · ${n(map.submitted)} addresses · ${map.errors} errors · ${map.warnings} warnings`
  );
}
