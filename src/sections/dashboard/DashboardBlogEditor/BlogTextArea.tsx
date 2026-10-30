'use client';

import { useRef } from 'react';
import { dashboardBlogEditor } from '@/data/dashboard/dashboardBlogEditor';
import styles from './DashboardBlogEditor.module.css';

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  formatting?: boolean; // show the Bold / Link buttons
  label: string; // for screen readers
};

// A text box that grows with its text, with optional Bold and Link buttons – they write the
// **bold** and [text](link) markers around the selection, so the writer never types them.
export default function BlogTextArea({ value, onChange, placeholder, rows = 3, formatting = true, label }: Props) {
  const t = dashboardBlogEditor.blocks;
  const ref = useRef<HTMLTextAreaElement>(null);

  const wrap = (before: string, after: string, fallback: string) => {
    const box = ref.current;
    if (!box) return;
    const { selectionStart: start, selectionEnd: end } = box;
    const selected = value.slice(start, end) || fallback;
    const next = `${value.slice(0, start)}${before}${selected}${after}${value.slice(end)}`;
    onChange(next);
    requestAnimationFrame(() => {
      box.focus();
      box.setSelectionRange(start + before.length, start + before.length + selected.length);
    });
  };

  const addLink = () => {
    const href = window.prompt(t.linkPrompt, '/services/');
    if (!href?.trim()) return;
    wrap('[', `](${href.trim()})`, 'link text');
  };

  return (
    <div className={styles.textArea}>
      {formatting && (
        <div className={styles.formatBar}>
          <button type="button" className={styles.formatButton} onClick={() => wrap('**', '**', 'bold text')}>
            <strong>B</strong>
            <span className={styles.srOnly}>{t.bold}</span>
          </button>
          <button type="button" className={styles.formatButton} onClick={addLink}>
            🔗 {t.link}
          </button>
        </div>
      )}
      <textarea
        ref={ref}
        className={styles.textarea}
        value={value}
        rows={rows}
        placeholder={placeholder}
        aria-label={label}
        onChange={(event) => onChange(event.target.value)}
        style={{ fieldSizing: 'content' } as React.CSSProperties}
      />
    </div>
  );
}
