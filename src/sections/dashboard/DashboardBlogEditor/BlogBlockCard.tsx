'use client';

import DashboardIcon from '@/components/dashboard/DashboardIcon/DashboardIcon';
import { dashboardBlogEditor } from '@/data/dashboard/dashboardBlogEditor';
import type { BlogBlock } from '@/types/blog';
import BlogImageField from './BlogImageField';
import BlogTextArea from './BlogTextArea';
import styles from './DashboardBlogEditor.module.css';

export type ServiceOption = { slug: string; name: string };

type Props = {
  block: BlogBlock;
  postId: string;
  services: ServiceOption[];
  isFirst: boolean;
  isLast: boolean;
  onChange: (block: BlogBlock) => void;
  onMove: (by: -1 | 1) => void;
  onDuplicate: () => void;
  onRemove: () => void;
};

// One block of the post, as a card: its type and the move / duplicate / remove buttons on top,
// then the fields for that type of block.
export default function BlogBlockCard(props: Props) {
  const { block, isFirst, isLast, onMove, onDuplicate, onRemove } = props;
  const t = dashboardBlogEditor.blocks;

  return (
    <div className={styles.block} data-type={block.type}>
      <div className={styles.blockHead}>
        <span className={styles.blockName}>{t.names[block.type]}</span>
        {t.hints[block.type] && <span className={styles.blockHint}>{t.hints[block.type]}</span>}
        <div className={styles.blockTools}>
          <button type="button" className={styles.iconButton} disabled={isFirst} onClick={() => onMove(-1)} aria-label={t.moveUp} title={t.moveUp}>
            ↑
          </button>
          <button type="button" className={styles.iconButton} disabled={isLast} onClick={() => onMove(1)} aria-label={t.moveDown} title={t.moveDown}>
            ↓
          </button>
          <button type="button" className={styles.iconButton} onClick={onDuplicate} aria-label={t.duplicate} title={t.duplicate}>
            ⧉
          </button>
          <button type="button" className={styles.iconButton} onClick={onRemove} aria-label={t.remove} title={t.remove}>
            <DashboardIcon name="close" size={14} />
          </button>
        </div>
      </div>
      <BlockFields {...props} />
    </div>
  );
}

function BlockFields({ block, postId, services, onChange }: Props) {
  const t = dashboardBlogEditor.blocks;
  const ti = dashboardBlogEditor.image;

  switch (block.type) {
    case 'intro':
    case 'paragraph':
    case 'tip':
    case 'warning':
      return (
        <BlogTextArea
          label={t.names[block.type]}
          value={block.text}
          rows={block.type === 'intro' ? 4 : 3}
          onChange={(text) => onChange({ ...block, text })}
        />
      );
    case 'quote':
      return (
        <BlogTextArea
          label={t.names.quote}
          value={block.text}
          formatting={false}
          onChange={(text) => onChange({ ...block, text })}
        />
      );
    case 'h2':
    case 'h3':
      return (
        <input
          className={`${styles.input} ${block.type === 'h2' ? styles.h2Input : styles.h3Input}`}
          value={block.text}
          aria-label={t.names[block.type]}
          onChange={(event) => onChange({ ...block, text: event.target.value })}
        />
      );
    case 'list':
      return (
        <>
          <BlogTextArea
            label={t.names.list}
            value={block.items.join('\n')}
            rows={4}
            onChange={(text) => onChange({ ...block, items: text.split('\n') })}
          />
          <label className={styles.check}>
            <input
              type="checkbox"
              checked={block.ordered === true}
              onChange={(event) => onChange({ ...block, ordered: event.target.checked })}
            />
            {t.numbered}
          </label>
        </>
      );
    case 'table': {
      const columns = Math.max(block.headers.length, 1);
      const setHeader = (j: number, value: string) =>
        onChange({ ...block, headers: block.headers.map((h, k) => (k === j ? value : h)) });
      const setCell = (i: number, j: number, value: string) =>
        onChange({
          ...block,
          rows: block.rows.map((row, r) => (r === i ? row.map((c, k) => (k === j ? value : c)) : row)),
        });
      return (
        <>
          <div className={styles.tableEditor} style={{ '--columns': columns } as React.CSSProperties}>
            {block.headers.map((header, j) => (
              <input
                key={`h${j}`}
                className={`${styles.input} ${styles.tableHeader}`}
                value={header}
                placeholder={`Heading ${j + 1}`}
                aria-label={`Column ${j + 1} heading`}
                onChange={(event) => setHeader(j, event.target.value)}
              />
            ))}
            {block.rows.map((row, i) =>
              row.map((cell, j) => (
                <input
                  key={`${i}-${j}`}
                  className={styles.input}
                  value={cell}
                  aria-label={`Row ${i + 1}, column ${j + 1}`}
                  onChange={(event) => setCell(i, j, event.target.value)}
                />
              ))
            )}
          </div>
          <div className={styles.rowButtons}>
            <button type="button" className={styles.smallButton} onClick={() => onChange({ ...block, rows: [...block.rows, Array(columns).fill('')] })}>
              + {t.addRow}
            </button>
            <button
              type="button"
              className={styles.smallButton}
              disabled={columns >= 8}
              onClick={() =>
                onChange({ ...block, headers: [...block.headers, ''], rows: block.rows.map((row) => [...row, '']) })
              }
            >
              + {t.addColumn}
            </button>
            <button type="button" className={styles.smallButton} disabled={block.rows.length <= 1} onClick={() => onChange({ ...block, rows: block.rows.slice(0, -1) })}>
              {t.removeRow}
            </button>
            <button
              type="button"
              className={styles.smallButton}
              disabled={columns <= 1}
              onClick={() =>
                onChange({
                  ...block,
                  headers: block.headers.slice(0, -1),
                  rows: block.rows.map((row) => row.slice(0, -1)),
                })
              }
            >
              {t.removeColumn}
            </button>
          </div>
        </>
      );
    }
    case 'image':
      return (
        <div className={styles.fieldStack}>
          <BlogImageField postId={postId} src={block.src || null} onChange={(src) => onChange({ ...block, src: src ?? '' })} />
          <input className={styles.input} value={block.alt} placeholder={ti.alt} aria-label={ti.alt} onChange={(event) => onChange({ ...block, alt: event.target.value })} />
          <div className={styles.twoColumns}>
            <input className={styles.input} value={block.caption ?? ''} placeholder={ti.caption} aria-label={ti.caption} onChange={(event) => onChange({ ...block, caption: event.target.value })} />
            <input className={styles.input} value={block.credit ?? ''} placeholder={ti.credit} aria-label={ti.credit} onChange={(event) => onChange({ ...block, credit: event.target.value })} />
          </div>
        </div>
      );
    case 'services':
      return (
        <div className={styles.fieldStack}>
          {block.items.map((item, i) => (
            <div key={i} className={styles.serviceRow}>
              <select
                className={styles.input}
                value={item.slug}
                aria-label={t.pickService}
                onChange={(event) => {
                  const picked = services.find((service) => service.slug === event.target.value);
                  onChange({
                    ...block,
                    items: block.items.map((it, k) =>
                      k === i ? { ...it, slug: event.target.value, name: picked?.name ?? it.name } : it
                    ),
                  });
                }}
              >
                <option value="">{t.pickService}</option>
                {services.map((service) => (
                  <option key={service.slug} value={service.slug}>
                    {service.name}
                  </option>
                ))}
              </select>
              <input
                className={styles.input}
                value={item.reason}
                placeholder={t.reason}
                aria-label={t.reason}
                onChange={(event) =>
                  onChange({
                    ...block,
                    items: block.items.map((it, k) => (k === i ? { ...it, reason: event.target.value } : it)),
                  })
                }
              />
              <button
                type="button"
                className={styles.iconButton}
                aria-label={t.remove}
                onClick={() => onChange({ ...block, items: block.items.filter((_, k) => k !== i) })}
              >
                <DashboardIcon name="close" size={14} />
              </button>
            </div>
          ))}
          <button
            type="button"
            className={styles.smallButton}
            disabled={block.items.length >= 6}
            onClick={() => onChange({ ...block, items: [...block.items, { slug: '', name: '', reason: '' }] })}
          >
            + {t.addService}
          </button>
        </div>
      );
    case 'cta':
      return (
        <div className={styles.fieldStack}>
          <BlogTextArea label={t.ctaText} value={block.text} formatting={false} rows={2} placeholder={t.ctaText} onChange={(text) => onChange({ ...block, text })} />
          <div className={styles.twoColumns}>
            <input className={styles.input} value={block.buttonText} placeholder={t.ctaButton} aria-label={t.ctaButton} onChange={(event) => onChange({ ...block, buttonText: event.target.value })} />
            <input className={styles.input} value={block.buttonLink} placeholder={t.ctaLink} aria-label={t.ctaLink} onChange={(event) => onChange({ ...block, buttonLink: event.target.value })} />
          </div>
        </div>
      );
  }
}

/** A new, empty block of a type */
export function emptyBlock(type: BlogBlock['type']): BlogBlock {
  switch (type) {
    case 'list':
      return { type, items: [''] };
    case 'table':
      return { type, headers: ['Detail', 'Information'], rows: [['', ''], ['', '']] };
    case 'image':
      return { type, src: '', alt: '' };
    case 'services':
      return { type, items: [{ slug: '', name: '', reason: '' }] };
    case 'cta':
      return { type, text: '', buttonText: 'Book a free audit', buttonLink: '/contact' };
    default:
      return { type, text: '' };
  }
}
