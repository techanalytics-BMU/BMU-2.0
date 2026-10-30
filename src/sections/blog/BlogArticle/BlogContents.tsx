'use client';

import { useEffect, useState } from 'react';
import styles from './BlogArticle.module.css';

type Item = { id: string; text: string };

// "In this article": the post's H2 headings as jump links. Beside the text on wide screens (it
// stays in view and lights up the section being read); a fold-out list above the text on phones.
export default function BlogContents({ label, items }: { label: string; items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    let frame = 0;

    const update = () => {
      frame = 0;
      const line = window.innerHeight / 3;
      let current = headings[0]?.id;
      for (const heading of headings) {
        if (heading.getBoundingClientRect().top <= line) current = heading.id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [items]);

  const list = (
    <ol className={styles.contentsList}>
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className={styles.contentsLink}
            aria-current={item.id === active ? 'location' : undefined}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <nav className={styles.contents} aria-label={label}>
      {/* Wide screens: always open, beside the text */}
      <div className={styles.contentsWide}>
        <p className={styles.contentsLabel}>{label}</p>
        {list}
      </div>
      {/* Phones and tablets: a fold-out list above the text */}
      <details className={styles.contentsNarrow}>
        <summary className={styles.contentsLabel}>{label}</summary>
        {list}
      </details>
    </nav>
  );
}
