'use client';

import { useScrollProgress } from '@/hooks/useScrollProgress';

type PseoProgressProps = {
  className?: string;
  distance?: number; // screens of scrolling from "just entered" to done (see useScrollProgress)
  style?: React.CSSProperties;
  children: React.ReactNode;
};

// Sets --progress (0 → 1) on its box as it scrolls up the screen, so CSS can tie an animation to
// the scroll position – the statement that lights up word by word, the timeline that fills in.
export default function PseoProgress({ className, distance, style, children }: PseoProgressProps) {
  const ref = useScrollProgress<HTMLDivElement>({ distance });
  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
