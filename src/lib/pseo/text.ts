// Small text helpers for composing page copy from entity data

// "a", "a and b", "a, b and c" – and when the items have commas or "and" in them themselves
// ("cafés and microbreweries"), semicolons keep them apart: "a and b; c, d; and e"
export const listJoin = (items: string[]) => {
  if (items.length < 2) return items[0] ?? '';
  const complex = items.some((item) => item.includes(',') || / and /.test(item));
  const last = items[items.length - 1];
  return complex
    ? `${items.slice(0, -1).join('; ')}; and ${last}`
    : `${items.slice(0, -1).join(', ')} and ${last}`;
};

export const upperFirst = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);
export const lowerFirst = (text: string) =>
  // keep acronyms and proper nouns ("SEO", "Google") as they are
  /^[A-Z]{2}|^(Google|Meta|LinkedIn|WhatsApp|Instagram|ChatGPT|Bengaluru)/.test(text)
    ? text
    : text.charAt(0).toLowerCase() + text.slice(1);

// "Real Estate Marketing", "Government and PSU Marketing" – for link labels; small words stay
// lowercase and words that already have capitals ("SEO", "WhatsApp") are left alone
const SMALL_WORDS = new Set(['a', 'an', 'and', 'or', 'of', 'for', 'in', 'on', 'the', 'to', 'with']);
export const titleCase = (text: string) =>
  text
    .split(' ')
    .map((word, i) =>
      (i > 0 && SMALL_WORDS.has(word)) || /[A-Z]/.test(word) ? word : upperFirst(word)
    )
    .join(' ');

// "a clinic", "an IVF clinic", "an SEO agency", "a UGC studio" (by sound, not spelling)
export const withArticle = (noun: string) => {
  const vowelSound =
    (/^[aeiou]/i.test(noun) && !/^(uni|use|usu|one|ugc|ui\b|ux\b)/i.test(noun)) ||
    /^(SEO|NGO|HSR|RR|MG|FMCG|MBA|SMS|F&B)\b/.test(noun);
  return `${vowelSound ? 'an' : 'a'} ${noun}`;
};

export const firstSentence = (text: string) => text.match(/^.+?[.!?](\s|$)/)?.[0].trim() ?? text;

// A stable number from a string – picks which general FAQ a page shows, so siblings differ
export const hash = (text: string) => {
  let h = 0;
  for (let i = 0; i < text.length; i++) h = (h * 31 + text.charCodeAt(i)) | 0;
  return Math.abs(h);
};

// Pick `count` items from a list, starting at a position chosen by `seed` (wraps round)
export const rotate = <T>(items: T[], seed: string, count: number) => {
  if (!items.length) return [];
  const start = hash(seed) % items.length;
  return Array.from(
    { length: Math.min(count, items.length) },
    (_, i) => items[(start + i) % items.length]
  );
};

// Straight-line distance in km between two [lat, lng] points
export const distanceKm = ([lat1, lng1]: [number, number], [lat2, lng2]: [number, number]) => {
  const rad = Math.PI / 180;
  const dLat = (lat2 - lat1) * rad;
  const dLng = (lng2 - lng1) * rad;
  const a =
    Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * rad) * Math.cos(lat2 * rad) * Math.sin(dLng / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

// Meta descriptions must stay under 155 characters
export const clip = (text: string, max = 155) =>
  text.length <= max ? text : `${text.slice(0, max - 1).replace(/[\s,;:–-]+\S*$/, '')}…`;
