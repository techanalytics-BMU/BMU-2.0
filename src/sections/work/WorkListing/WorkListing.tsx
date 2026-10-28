'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { workArticle } from '@/data/work/workArticle';
import { workListing } from '@/data/work/workListing';
import { useInView } from '@/hooks/useInView';
import { categories, formatDate, sortedPosts, visualOf } from '@/lib/work';
import WorkCard from '../WorkCard/WorkCard';
import styles from './WorkListing.module.css';

const PAGE_SIZE = 9; // cards shown at first, and added by each "Load more"

// The articles on /work: the featured article large at the top, then a toolbar (category chips
// with counts, search, sort) and a grid of cards with "Load more". The category and search are
// kept in the address (?category=…&q=…) so a filtered view can be shared or bookmarked.
export default function WorkListing() {
  const t = workListing;
  const [category, setCategory] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [oldestFirst, setOldestFirst] = useState(false);
  const [visible, setVisible] = useState(PAGE_SIZE);
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  // Read the filters from the address once, on load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get('category');
    if (fromUrl && categories.some((c) => c.name === fromUrl)) setCategory(fromUrl);
    setQuery(params.get('q') ?? '');
  }, []);

  // …and write them back whenever they change (without adding history entries)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (category) params.set('category', category);
    else params.delete('category');
    if (query.trim()) params.set('q', query.trim());
    else params.delete('q');
    const search = params.toString();
    window.history.replaceState(
      null,
      '',
      `${window.location.pathname}${search ? `?${search}` : ''}`
    );
  }, [category, query]);

  const filtering = category !== null || query.trim() !== '';
  // The newest featured post – shown large, and only while nothing is filtered
  const featured = filtering ? undefined : sortedPosts.find((post) => post.featured);

  const results = useMemo(() => {
    const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const list = sortedPosts.filter(
      (post) =>
        post !== featured &&
        (!category || post.category === category) &&
        words.every((word) =>
          `${post.title} ${post.excerpt} ${post.category}`.toLowerCase().includes(word)
        )
    );
    return oldestFirst ? [...list].reverse() : list;
  }, [category, query, oldestFirst, featured]);

  const choose = (next: string | null) => {
    setCategory(next);
    setVisible(PAGE_SIZE);
  };
  const clear = () => {
    setCategory(null);
    setQuery('');
    setVisible(PAGE_SIZE);
  };

  const shown = results.slice(0, visible);
  const total = results.length + (featured ? 1 : 0);

  return (
    <section id="articles" className={styles.section}>
      <div ref={ref} className={styles.inner} data-in-view={inView}>
        <div className={styles.header}>
          <h2 className={styles.heading}>{t.heading}</h2>
          <p className={styles.description}>{t.description}</p>
        </div>

        {/* Search + sort, beside the heading on wide screens */}
        <div className={styles.controls}>
          <label className={styles.search}>
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
              <path
                d="m20 20-3.5-3.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <input
              type="search"
              value={query}
              placeholder={t.searchPlaceholder}
              aria-label={t.searchPlaceholder}
              onChange={(event) => {
                setQuery(event.target.value);
                setVisible(PAGE_SIZE);
              }}
            />
          </label>
          <select
            className={styles.sort}
            value={oldestFirst ? 'oldest' : 'newest'}
            aria-label="Sort articles"
            onChange={(event) => setOldestFirst(event.target.value === 'oldest')}
          >
            <option value="newest">{t.sortNewest}</option>
            <option value="oldest">{t.sortOldest}</option>
          </select>
        </div>

        {featured && (
          <Link href={`/work/${featured.slug}`} className={styles.featured}>
            <span className={styles.featuredText}>
              <span className={styles.tags}>
                <span className={styles.featuredTag}>{t.featuredLabel}</span>
                <span className={styles.categoryTag}>{featured.category}</span>
              </span>
              <span className={styles.featuredTitle}>{featured.title}</span>
              <span className={styles.featuredExcerpt}>{featured.excerpt}</span>
              <span className={styles.featuredMeta}>
                <span className={styles.avatar} aria-hidden="true">
                  {featured.author.charAt(0)}
                </span>
                {featured.author}
                <span aria-hidden="true">·</span>
                <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                <span aria-hidden="true">·</span>
                {workArticle.minRead.replace('{count}', String(featured.readTime))}
              </span>
              <span className={styles.featuredCta}>
                {t.readArticle}
                <span aria-hidden="true">↗</span>
              </span>
            </span>
            {visualOf(featured) && (
              <Image
                src={visualOf(featured)!}
                alt=""
                width={360}
                height={360}
                className={styles.featuredObject}
                priority
              />
            )}
          </Link>
        )}

        {/* ---------- Category chips ---------- */}
        <div className={styles.toolbar}>
          <div className={styles.chips} role="group" aria-label="Filter by category">
            {[{ name: null, count: sortedPosts.length }, ...categories].map((c) => (
              <button
                key={c.name ?? 'all'}
                type="button"
                className={styles.chip}
                aria-pressed={category === c.name}
                onClick={() => choose(c.name)}
              >
                {c.name ?? t.allLabel}
                <span className={styles.chipCount}>{c.count}</span>
              </button>
            ))}
          </div>
        </div>

        <p className={styles.count} aria-live="polite">
          {total === 1 ? t.resultsOne : t.results.replace('{count}', String(total))}
        </p>

        {/* ---------- Grid ---------- */}
        {shown.length > 0 ? (
          // `key` re-mounts the grid when the category or order changes, so the cards rise in again
          <div key={`${category}-${oldestFirst}`} className={styles.grid}>
            {shown.map((post, i) => (
              <div
                key={post.slug}
                className={styles.cell}
                style={{ '--i': i % PAGE_SIZE } as React.CSSProperties}
              >
                <WorkCard post={post} minRead={workArticle.minRead} />
              </div>
            ))}
          </div>
        ) : (
          !featured && (
            <div className={styles.empty}>
              <p className={styles.emptyHeading}>{t.emptyHeading}</p>
              <p className={styles.emptyText}>{t.emptyText}</p>
              <button type="button" className={styles.clear} onClick={clear}>
                {t.clearFilters}
              </button>
            </div>
          )
        )}

        {results.length > visible && (
          <div className={styles.more}>
            <button
              type="button"
              className={styles.loadMore}
              onClick={() => setVisible(visible + PAGE_SIZE)}
            >
              {t.loadMore}
              <span className={styles.loadMoreCount}>
                {visible} / {results.length}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
