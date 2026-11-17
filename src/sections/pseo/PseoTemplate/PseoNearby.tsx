'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { Nearby } from '@/lib/pseo/regions';
import styles from './PseoTemplate.module.css';

// Search engines' crawlers get the page as written, without a line chosen by where they crawl from
const BOT = /bot\b|bot\/|crawl|spider|slurp|google-inspectiontool|lighthouse/i;

// "In Dubai? Dashboard development in Dubai" – under the hero, when the visitor is somewhere this
// service has its own page for. Asks /api/nearby once the page has loaded, so the page itself
// stays static. ?country=AE&city=Abu Dhabi on the page's address tries it out.
export default function PseoNearby({ path }: { path: string }) {
  const [nearby, setNearby] = useState<Nearby | null>(null);

  useEffect(() => {
    if (BOT.test(navigator.userAgent)) return;
    const own = new URLSearchParams(window.location.search);
    const query = new URLSearchParams({ path });
    for (const key of ['country', 'city']) {
      const value = own.get(key);
      if (value) query.set(key, value);
    }
    const controller = new AbortController();
    fetch(`/api/nearby?${query}`, { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then(setNearby)
      .catch(() => {});
    return () => controller.abort();
  }, [path]);

  if (!nearby) return null;
  return (
    <p className={styles.nearby}>
      {nearby.lead} <Link href={nearby.href}>{nearby.label}</Link>
    </p>
  );
}
