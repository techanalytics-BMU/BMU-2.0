'use client';

import { useEffect, useState } from 'react';

type TypewriterOptions = {
  interval?: number; // ms from the start of one word to the start of the next
  paused?: boolean; // true = stops where it is
  instant?: boolean; // true = no typing, each word simply shows for `interval` ms (reduced motion)
};

// How each word's interval is shared out: blank → typing → holding → deleting
const BLANK = 0.08;
const TYPE = 0.45;
const HOLD = 0.35;
const DELETE = 0.12;

/**
 * Cycles through `words`, a new one every `interval` ms: types it letter by letter, holds it,
 * deletes it, then moves on – looping. Longer words simply type a little faster.
 * Returns the text to show right now and the position of its word in `words`.
 */
export function useTypewriter(
  words: string[],
  { interval = 6000, paused = false, instant = false }: TypewriterOptions = {}
) {
  const [index, setIndex] = useState(0); // which word (counts up, wraps via %)
  const [length, setLength] = useState(0); // how many of its letters are shown
  const [deleting, setDeleting] = useState(false);
  const word = words.length ? words[index % words.length] : '';

  useEffect(() => {
    if (paused || !word) return;

    let delay = (interval * TYPE) / word.length;
    let next = () => setLength(length + 1);
    if (instant) {
      delay = interval;
      next = () => setIndex(index + 1);
    } else if (!deleting && length === 0) {
      delay = interval * BLANK;
    } else if (!deleting && length === word.length) {
      delay = interval * HOLD;
      next = () => setDeleting(true);
    } else if (deleting && length > 0) {
      delay = (interval * DELETE) / word.length;
      next = () => setLength(length - 1);
    } else if (deleting) {
      delay = 0;
      next = () => {
        setDeleting(false);
        setIndex(index + 1);
      };
    }

    const timer = window.setTimeout(next, delay);
    return () => window.clearTimeout(timer);
  }, [word, index, length, deleting, paused, instant, interval]);

  return {
    text: instant ? word : word.slice(0, length),
    index: words.length ? index % words.length : 0,
  };
}
