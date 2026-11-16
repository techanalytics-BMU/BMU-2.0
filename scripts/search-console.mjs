// Google Search Console status for the site – how its pages are doing on Google, as a plain-text
// report (for the team, or for Claude to summarise when asked). Reads only; changes nothing.
//
//   npm run search:status                 the last 28 days, against the 28 before
//   npm run search:status -- --days 7     any number of days (Google keeps 16 months)
//   npm run search:status -- --json       everything, as JSON
//   npm run search:status -- --json --all  …with every page Google showed, not just the top 20
//   npm run search:status -- --login      sign in with Google once (see "Sign in with Google" below)
//
// Two ways to connect, both read-only, both kept in .env.local (never committed):
//
// 1. Sign in with Google (no key file – works where the organisation blocks service account keys)
//    In Google Cloud (project "BMU Search Console", with the Google Search Console API enabled):
//    Google Auth Platform → Audience: Internal → Clients → Create client → Desktop app → download its
//    JSON. Then `npm run search:status -- --login` (it finds the newest client_secret*.json in
//    Downloads, or pass its path after --login): the browser opens, you pick the Google account that
//    can see bmumarketing.in in Search Console and Allow. It saves GOOGLE_OAUTH_CLIENT_ID,
//    GOOGLE_OAUTH_CLIENT_SECRET and GOOGLE_OAUTH_REFRESH_TOKEN to .env.local.
//
// 2. A service account key
//    GOOGLE_SERVICE_ACCOUNT_EMAIL – the service account's client_email (…@….iam.gserviceaccount.com)
//    GOOGLE_SERVICE_ACCOUNT_KEY   – its private_key, "-----BEGIN PRIVATE KEY-----\n…" (\n as written)
//    The service account must be added to the property (Settings → Users and permissions, Restricted).
//
//   SEARCH_CONSOLE_SITE – optional; found by itself ('sc-domain:bmumarketing.in' or
//                         'https://www.bmumarketing.in/')

import { exec } from 'node:child_process';
import { createHash, createSign, randomBytes } from 'node:crypto';
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { homedir } from 'node:os';
import { join } from 'node:path';

const DOMAIN = 'bmumarketing.in';
const SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly';
const TOKEN_URL = 'https://oauth2.googleapis.com/token';
const AUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
const API = 'https://searchconsole.googleapis.com/webmasters/v3';
const ENV_FILE = '.env.local';

// Problems print as one plain line (what's wrong and what to do), not a stack trace
process.setUncaughtExceptionCaptureCallback((error) => {
  console.error(`ERROR: ${error?.message ?? error}`);
  process.exit(1);
});

// ---------- Settings ----------
const args = process.argv.slice(2);
const days = Math.max(1, Math.min(480, Number(args[args.indexOf('--days') + 1]) || 28));
const asJson = args.includes('--json');
const login = args.includes('--login');

const readEnv = () => {
  try {
    return Object.fromEntries(
      readFileSync(ENV_FILE, 'utf8')
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
};
let env = readEnv();
const setting = (name) => (process.env[name] ?? env[name])?.trim() || undefined;

/** Adds or replaces settings in .env.local, leaving every other line as it was */
function saveEnv(values) {
  const text = existsSync(ENV_FILE) ? readFileSync(ENV_FILE, 'utf8') : '';
  const newline = text.includes('\r\n') ? '\r\n' : '\n';
  const lines = text.split(/\r?\n/);
  for (const [name, value] of Object.entries(values)) {
    const at = lines.findIndex((line) => line.startsWith(`${name}=`));
    if (at >= 0) lines[at] = `${name}=${value}`;
    else {
      if (lines.length && lines[lines.length - 1] === '') lines.pop();
      lines.push(`${name}=${value}`, '');
    }
  }
  writeFileSync(ENV_FILE, lines.join(newline));
  env = readEnv();
}

const notConnected = () => {
  console.log(`NOT CONNECTED – Search Console can't be read yet. Either:

  Sign in with Google (no key file, recommended):
    1. console.cloud.google.com → project "BMU Search Console" → Google Auth Platform
       → Get started → app name, your email → Audience: Internal → Create
    2. Clients → Create client → Application type: Desktop app → Create → Download JSON
    3. npm run search:status -- --login   (browser opens → choose your account → Allow)

  Or a service account key: GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_SERVICE_ACCOUNT_KEY in .env.local,
  with that email added in Search Console → ${DOMAIN} → Settings → Users and permissions.`);
  process.exit(2);
};

// ---------- Sign in with Google, once ----------
/** The newest Google OAuth client file in Downloads (client_secret_….json), or the path given */
function findClientFile() {
  const given = args[args.indexOf('--login') + 1];
  if (given && !given.startsWith('--')) return given;
  const downloads = join(homedir(), 'Downloads');
  const files = existsSync(downloads)
    ? readdirSync(downloads)
        .filter((name) => /^client_secret.*\.json$/i.test(name))
        .map((name) => join(downloads, name))
        .sort((a, b) => statSync(b).mtimeMs - statSync(a).mtimeMs)
    : [];
  return files[0];
}

async function signIn() {
  let client = { id: setting('GOOGLE_OAUTH_CLIENT_ID'), secret: setting('GOOGLE_OAUTH_CLIENT_SECRET') };
  const file = findClientFile();
  if (file) {
    const json = JSON.parse(readFileSync(file, 'utf8'));
    const details = json.installed ?? json.web;
    if (!details?.client_id) throw new Error(`${file} isn't a Google OAuth client file (no client_id)`);
    client = { id: details.client_id, secret: details.client_secret };
    console.log(`Using the sign-in app from ${file}`);
  }
  if (!client.id || !client.secret) {
    throw new Error('No sign-in app found: download the Desktop app client JSON to Downloads (client_secret_….json), or pass its path after --login');
  }

  // PKCE and a state value, so only this sign-in can use the answer
  const verifier = randomBytes(48).toString('base64url');
  const challenge = createHash('sha256').update(verifier).digest('base64url');
  const state = randomBytes(16).toString('hex');

  const { code, redirectUri } = await new Promise((resolve, reject) => {
    const server = createServer((request, response) => {
      const url = new URL(request.url, 'http://127.0.0.1');
      if (!url.searchParams.has('code') && !url.searchParams.has('error')) {
        response.writeHead(404).end();
        return;
      }
      const ok = url.searchParams.get('state') === state && url.searchParams.has('code');
      response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      response.end(
        `<body style="font-family:system-ui;background:#000;color:#fff;display:grid;place-items:center;height:100vh;margin:0"><p>${
          ok ? 'Connected to Search Console – you can close this tab.' : 'Sign-in didn’t complete – go back to the terminal.'
        }</p></body>`
      );
      server.close();
      clearTimeout(timer);
      if (ok) resolve({ code: url.searchParams.get('code'), redirectUri: `http://127.0.0.1:${server.address()?.port ?? port}` });
      else reject(new Error(`Google sign-in was cancelled or refused (${url.searchParams.get('error') ?? 'state mismatch'})`));
    });
    let port = 0;
    const timer = setTimeout(() => {
      server.close();
      reject(new Error('No answer from the browser within 5 minutes – run --login again'));
    }, 5 * 60 * 1000);
    server.listen(0, '127.0.0.1', () => {
      port = server.address().port;
      const authUrl = `${AUTH_URL}?${new URLSearchParams({
        client_id: client.id,
        redirect_uri: `http://127.0.0.1:${port}`,
        response_type: 'code',
        scope: SCOPE,
        access_type: 'offline',
        prompt: 'consent',
        code_challenge: challenge,
        code_challenge_method: 'S256',
        state,
      })}`;
      console.log('Opening Google sign-in in your browser. If it doesn’t open, visit:\n' + authUrl);
      const open =
        process.platform === 'win32' ? `start "" "${authUrl}"` : process.platform === 'darwin' ? `open "${authUrl}"` : `xdg-open "${authUrl}"`;
      exec(open);
    });
  });

  const response = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      client_id: client.id,
      client_secret: client.secret,
      redirect_uri: redirectUri,
      code_verifier: verifier,
    }),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok || !data.refresh_token) {
    throw new Error(`Google didn’t complete the sign-in: ${data.error_description || data.error || 'no refresh token'}`);
  }
  saveEnv({
    GOOGLE_OAUTH_CLIENT_ID: client.id,
    GOOGLE_OAUTH_CLIENT_SECRET: client.secret,
    GOOGLE_OAUTH_REFRESH_TOKEN: data.refresh_token,
  });
  console.log('Signed in – saved to .env.local (GOOGLE_OAUTH_CLIENT_ID / _SECRET / _REFRESH_TOKEN).\n');
}

// ---------- Google ----------
if (login) await signIn();

const account = {
  email: setting('GOOGLE_SERVICE_ACCOUNT_EMAIL'),
  key: setting('GOOGLE_SERVICE_ACCOUNT_KEY')?.replace(/\\n/g, '\n'),
};
const oauth = {
  id: setting('GOOGLE_OAUTH_CLIENT_ID'),
  secret: setting('GOOGLE_OAUTH_CLIENT_SECRET'),
  refresh: setting('GOOGLE_OAUTH_REFRESH_TOKEN'),
};
const configuredSite = setting('SEARCH_CONSOLE_SITE');
const signedIn = Boolean(oauth.id && oauth.secret && oauth.refresh);
if (!signedIn && !(account.email && account.key)) notConnected();
const who = signedIn ? 'the signed-in Google account' : account.email;

async function accessToken() {
  let body;
  if (signedIn) {
    body = new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: oauth.refresh,
      client_id: oauth.id,
      client_secret: oauth.secret,
    });
  } else {
    const now = Math.floor(Date.now() / 1000);
    const encode = (value) => Buffer.from(JSON.stringify(value)).toString('base64url');
    const unsigned = `${encode({ alg: 'RS256', typ: 'JWT' })}.${encode({ iss: account.email, scope: SCOPE, aud: TOKEN_URL, iat: now, exp: now + 3600 })}`;
    let signature;
    try {
      signature = createSign('RSA-SHA256').update(unsigned).sign(account.key, 'base64url');
    } catch {
      throw new Error('The private key could not be read – GOOGLE_SERVICE_ACCOUNT_KEY should start with -----BEGIN PRIVATE KEY-----');
    }
    body = new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: `${unsigned}.${signature}` });
  }
  const response = await fetch(TOKEN_URL, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(
      signedIn && data.error === 'invalid_grant'
        ? 'The Google sign-in has expired or was removed – run: npm run search:status -- --login'
        : `Google refused the sign-in: ${data.error_description || data.error || response.status}`
    );
  }
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
        ? `${who} can't see the site in Search Console. (${data.error?.message ?? ''})`
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
      `${who} can see ${siteEntry.map((entry) => entry.siteUrl).join(', ') || 'no Search Console properties'} – not ${DOMAIN}.`
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

// Searches people typed – most clicks, then most impressions; bots' searches (full of site:/intitle:
// filters) left out
const queryRows = (queries.rows ?? [])
  .map((row) => ({ query: row.keys[0], clicks: row.clicks, impressions: row.impressions, ctr: row.ctr, position: row.position }))
  .filter((row) => !/(^|[\s(])-?(site|intitle|inurl|intext):/i.test(row.query))
  .sort((a, b) => b.clicks - a.clicks || b.impressions - a.impressions);
const report = {
  site,
  dates: { from, to, previousFrom, previousTo, days },
  totals: totals(now.rows),
  previous: totals(before.rows),
  pagesSeen: pages.length,
  pagesSeenBefore: previousPages.size,
  kinds: [...kinds.values()].sort((a, b) => b.impressions - a.impressions),
  topPages: pages.slice(0, 20),
  // every page Google showed, with --json --all (for audits)
  ...(args.includes('--all') ? { pages } : {}),
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
