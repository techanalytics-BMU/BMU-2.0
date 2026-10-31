'use client';

import { useState } from 'react';
import { dashboardBlogEditor } from '@/data/dashboard/dashboardBlogEditor';
import { servicesMenu } from '@/data/navigation';
import { formatDate } from '@/lib/blog/posts';
import { seoChecklist } from '@/lib/blog/seo';
import { slugify, wordCount } from '@/lib/blog/text';
import type { PostInput } from '@/lib/blog/manage';
import DashboardLeadsSelect from '../DashboardLeads/DashboardLeadsSelect';
import BlogImageField from './BlogImageField';
import styles from './DashboardBlogEditor.module.css';

type Props = {
  postId: string;
  post: PostInput;
  slugLocked: boolean; // published – the address can't change
  publishedAt: string | null;
  onChange: (changes: Partial<PostInput>) => void;
  onSlugEdited: () => void; // the writer typed their own slug – stop following the title
};

const TITLE_MAX = 60;
const DESCRIPTION_MAX = 160;

// The right-hand column: address, meta title and description with counters and a Google preview,
// keyword, tags, category, featured, cover image, author, read time – and the live SEO checklist.
export default function BlogSeoPanel({ postId, post, slugLocked, publishedAt, onChange, onSlugEdited }: Props) {
  const t = dashboardBlogEditor.seo;
  const [tag, setTag] = useState('');
  const checks = seoChecklist(post);
  const done = checks.filter((check) => check.ok).length;

  const metaTitle = post.meta_title || post.title;
  const metaDescription = post.meta_description || post.excerpt;
  const words = wordCount(post.content, post.faqs);

  const addTag = () => {
    const value = tag.trim().toLowerCase();
    if (value && !post.tags.includes(value)) onChange({ tags: [...post.tags, value] });
    setTag('');
  };

  return (
    <aside className={styles.panel}>
      <div className={styles.score} data-level={done / checks.length >= 0.8 ? 'good' : done / checks.length >= 0.5 ? 'ok' : 'low'}>
        <span className={styles.scoreLabel}>{t.heading}</span>
        <span className={styles.scoreValue}>
          {t.score.replace('{done}', String(done)).replace('{total}', String(checks.length))}
        </span>
      </div>

      {/* Address */}
      <label className={styles.field}>
        <span className={styles.label}>{t.slug}</span>
        <span className={styles.slugBox}>
          <span className={styles.slugPrefix}>/blog/</span>
          <input
            className={styles.slugInput}
            value={post.slug}
            disabled={slugLocked}
            onChange={(event) => {
              onSlugEdited();
              onChange({ slug: slugify(event.target.value) || event.target.value.toLowerCase() });
            }}
          />
        </span>
        {slugLocked && <span className={styles.hint}>{t.slugLocked}</span>}
      </label>

      {/* Meta title + description, with counters */}
      <label className={styles.field}>
        <span className={styles.label}>
          {t.metaTitle}
          <span className={styles.counter} data-over={metaTitle.length > TITLE_MAX}>
            {metaTitle.length}/{TITLE_MAX}
          </span>
        </span>
        <input
          className={styles.input}
          value={post.meta_title ?? ''}
          placeholder={post.title}
          onChange={(event) => onChange({ meta_title: event.target.value || null })}
        />
        <span className={styles.hint}>{t.metaHintTitle}</span>
      </label>

      <label className={styles.field}>
        <span className={styles.label}>
          {t.metaDescription}
          <span className={styles.counter} data-over={metaDescription.length > DESCRIPTION_MAX}>
            {metaDescription.length}/{DESCRIPTION_MAX}
          </span>
        </span>
        <textarea
          className={styles.textarea}
          rows={3}
          value={post.meta_description ?? ''}
          placeholder={post.excerpt}
          onChange={(event) => onChange({ meta_description: event.target.value || null })}
        />
        <span className={styles.hint}>{t.metaHintDescription}</span>
      </label>

      {/* How it may look on Google */}
      <div className={styles.field}>
        <span className={styles.label}>{t.preview}</span>
        <div className={styles.google}>
          <span className={styles.googleUrl}>bmumarketing.in › blog › {post.slug}</span>
          <span className={styles.googleTitle}>
            {metaTitle.length > TITLE_MAX ? `${metaTitle.slice(0, TITLE_MAX - 1)}…` : metaTitle || 'Post title'}
          </span>
          <span className={styles.googleText}>
            {metaDescription.length > DESCRIPTION_MAX
              ? `${metaDescription.slice(0, DESCRIPTION_MAX - 1)}…`
              : metaDescription || 'Your meta description will show here.'}
          </span>
        </div>
      </div>

      <label className={styles.field}>
        <span className={styles.label}>{t.keyword}</span>
        <input
          className={styles.input}
          value={post.main_keyword ?? ''}
          placeholder="e.g. digital marketing agency bengaluru"
          onChange={(event) => onChange({ main_keyword: event.target.value || null })}
        />
      </label>

      {/* Tags as chips */}
      <div className={styles.field}>
        <span className={styles.label}>{t.tags}</span>
        <div className={styles.tags}>
          {post.tags.map((value) => (
            <button
              key={value}
              type="button"
              className={styles.tag}
              aria-label={`Remove tag ${value}`}
              onClick={() => onChange({ tags: post.tags.filter((other) => other !== value) })}
            >
              {value} ×
            </button>
          ))}
          <input
            className={styles.tagInput}
            value={tag}
            placeholder={t.tagsHint}
            onChange={(event) => setTag(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ',') {
                event.preventDefault();
                addTag();
              }
            }}
            onBlur={addTag}
          />
        </div>
      </div>

      <div className={styles.field}>
        <span className={styles.label}>{t.category}</span>
        <DashboardLeadsSelect
          label={t.category}
          value={post.category ?? ''}
          fullWidth
          options={[
            { value: '', label: t.chooseCategory },
            ...servicesMenu.items.map((item) => ({ value: item.title, label: item.title })),
          ]}
          onChange={(value) => onChange({ category: value || null })}
        />
      </div>

      <label className={styles.check}>
        <input type="checkbox" checked={post.featured} onChange={(event) => onChange({ featured: event.target.checked })} />
        {t.featured}
      </label>

      <div className={styles.field}>
        <span className={styles.label}>{t.cover}</span>
        <BlogImageField postId={postId} src={post.cover_image_url} onChange={(src) => onChange({ cover_image_url: src })} />
        {post.cover_image_url && (
          <input
            className={styles.input}
            value={post.cover_image_alt ?? ''}
            placeholder={t.coverAlt}
            aria-label={t.coverAlt}
            onChange={(event) => onChange({ cover_image_alt: event.target.value || null })}
          />
        )}
      </div>

      <label className={styles.field}>
        <span className={styles.label}>{t.author}</span>
        <input className={styles.input} value={post.author_name} onChange={(event) => onChange({ author_name: event.target.value })} />
      </label>

      <p className={styles.hint}>
        {publishedAt && `${t.publishDate}: ${formatDate(publishedAt)} · `}
        {t.readTime
          .replace('{minutes}', String(Math.max(1, Math.round(words / 200))))
          .replace('{words}', words.toLocaleString('en-IN'))}
      </p>

      <div className={styles.field}>
        <span className={styles.label}>{t.checklist}</span>
        <ul className={styles.checklist}>
          {checks.map((check) => (
            <li key={check.id} data-ok={check.ok}>
              <span aria-hidden="true">{check.ok ? '✔' : '✖'}</span>
              {check.label}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
