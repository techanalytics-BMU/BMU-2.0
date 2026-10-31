'use client';

import { useRef, useState } from 'react';
import { dashboardBlogEditor } from '@/data/dashboard/dashboardBlogEditor';
import BlogLinkDialog from './BlogLinkDialog';
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
// Link opens the "Add a link" popup (words + address).
export default function BlogTextArea({ value, onChange, placeholder, rows = 3, formatting = true, label }: Props) {
  const t = dashboardBlogEditor.blocks;
  const ref = useRef<HTMLTextAreaElement>(null);
  // The selection when "Link" was pressed – the popup takes the focus, so it's remembered here
  const [linkAt, setLinkAt] = useState<{ start: number; end: number } | null>(null);

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

  const openLink = () => {
    const box = ref.current;
    setLinkAt({ start: box?.selectionStart ?? value.length, end: box?.selectionEnd ?? value.length });
  };

  const addLink = (text: string, href: string) => {
    if (!linkAt) return;
    const link = `[${text}](${href})`;
    onChange(`${value.slice(0, linkAt.start)}${link}${value.slice(linkAt.end)}`);
    const caret = linkAt.start + link.length;
    setLinkAt(null);
    requestAnimationFrame(() => {
      ref.current?.focus();
      ref.current?.setSelectionRange(caret, caret);
    });
  };

  return (
    <div className={styles.textArea}>
      {formatting && (
        <div className={styles.formatBar}>
          <button type="button" className={styles.formatButton} onClick={() => wrap('**', '**', 'bold text')}>
            <strong>B</strong>
            <span className={styles.srOnly}>{t.bold}</span>
          </button>
          <button type="button" className={styles.formatButton} onClick={openLink}>
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
      {linkAt && (
        <BlogLinkDialog
          initialText={value.slice(linkAt.start, linkAt.end)}
          onAdd={addLink}
          onCancel={() => setLinkAt(null)}
        />
      )}
    </div>
  );
}
