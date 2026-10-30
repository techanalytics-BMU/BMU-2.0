'use client';

import { useEffect, useRef, useState } from 'react';

type PseoRevealProps = {
  id?: string;
  className?: string;
  label?: string; // aria-label, for a section without a heading
  children: React.ReactNode;
};

// A section of a programmatic page that reads data-reveal="out" until it scrolls into view, then
// "in" – the stylesheet plays each section's entrance off that (see PseoTemplate.module.css). The
// stylesheet only hides "out" content while scripting is on, so nothing is lost without it.
export default function PseoReveal({ id, className, label, children }: PseoRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    // Plays once the section's top is a little way up the screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShown(true);
        observer.disconnect();
      },
      { rootMargin: '0px 0px -12% 0px' }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={className}
      aria-label={label}
      data-reveal={shown ? 'in' : 'out'}
    >
      {children}
    </section>
  );
}
