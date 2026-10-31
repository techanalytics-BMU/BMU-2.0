'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState, useTransition } from 'react';
import { useConfirm } from '@/components/dashboard/DashboardDialog/useConfirm';
import DashboardIcon from '@/components/dashboard/DashboardIcon/DashboardIcon';
import menu from '@/components/dashboard/DashboardPopover/DashboardPopover.module.css';
import { dashboardBlogEditor } from '@/data/dashboard/dashboardBlogEditor';
import { useDismiss } from '@/hooks/useDismiss';
import { deletePost, savePost, unpublishPost, type PostInput } from '@/lib/blog/manage';
import { importTemplate } from '@/lib/blog/template';
import { slugify } from '@/lib/blog/text';
import type { BlogBlock, BlogPost } from '@/types/blog';
import BlogBlockCard, { emptyBlock, type ServiceOption } from './BlogBlockCard';
import BlogSeoPanel from './BlogSeoPanel';
import styles from './DashboardBlogEditor.module.css';

type Props = {
  post: BlogPost;
  services: ServiceOption[]; // for the service cards
  canWrite: boolean; // SEO writer – everyone else views
};

const AUTOSAVE_DELAY = 2500; // ms after the last change (drafts only)

const BLOCK_TYPES: BlogBlock['type'][] = [
  'intro',
  'h2',
  'h3',
  'paragraph',
  'list',
  'table',
  'tip',
  'warning',
  'image',
  'quote',
  'services',
  'cta',
];

const inputOf = (post: BlogPost): PostInput => ({
  slug: post.slug,
  title: post.title,
  excerpt: post.excerpt,
  category: post.category,
  tags: post.tags,
  featured: post.featured,
  author_name: post.author_name,
  cover_image_url: post.cover_image_url,
  cover_image_alt: post.cover_image_alt,
  meta_title: post.meta_title,
  meta_description: post.meta_description,
  main_keyword: post.main_keyword,
  content: post.content,
  faqs: post.faqs,
});

/** 'YYYY-MM-DDTHH:mm' in the browser's time, for <input type="datetime-local"> */
const localInputValue = (date: Date) =>
  new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().slice(0, 16);

// The blog editor: the post's title, excerpt, blocks and FAQs on the left; the SEO panel on the
// right; and on top the status, save state and actions (Preview, Save draft, Publish / Schedule /
// Update, Unpublish, Delete). Drafts save themselves; published posts change only with "Update".
// Admins and managers see everything but can't change it.
export default function DashboardBlogEditor({ post: initial, services, canWrite }: Props) {
  const t = dashboardBlogEditor;
  const router = useRouter();
  const [post, setPost] = useState<PostInput>(() => inputOf(initial));
  const [status, setStatus] = useState(initial.status);
  const [publishedAt, setPublishedAt] = useState(initial.published_at);
  const [updatedAt, setUpdatedAt] = useState(initial.updated_at);
  const [dirty, setDirty] = useState(false);
  const [saveState, setSaveState] = useState<'idle' | 'saving' | 'saved'>('idle');
  const [error, setError] = useState('');
  const [conflict, setConflict] = useState(false);
  const [slugEdited, setSlugEdited] = useState(!initial.slug.startsWith('draft-'));
  const [menuOpen, setMenuOpen] = useState(false);
  const [scheduling, setScheduling] = useState(false);
  const [scheduleAt, setScheduleAt] = useState(() => localInputValue(new Date(Date.now() + 86400000)));
  const [importOpen, setImportOpen] = useState(false);
  const [importText, setImportText] = useState('');
  const [importNotes, setImportNotes] = useState<string[] | null>(null);
  const [importError, setImportError] = useState(false);
  const [pending, startTransition] = useTransition();
  const menuRef = useRef<HTMLDivElement>(null);
  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setScheduling(false);
  }, []);
  useDismiss(menuRef, menuOpen, closeMenu);

  const isLive = status === 'published';
  const isScheduled = isLive && publishedAt !== null && new Date(publishedAt) > new Date();
  const statusLabel = !isLive ? t.status.draft : isScheduled ? t.status.scheduled : t.status.published;

  // ---------- Changing the post ----------
  const change = (changes: Partial<PostInput>) => {
    setPost((current) => {
      const next = { ...current, ...changes };
      // While it's a draft and the writer hasn't typed their own, the address follows the title
      if (changes.title !== undefined && !slugEdited && !isLive) next.slug = slugify(changes.title) || current.slug;
      return next;
    });
    setDirty(true);
    setSaveState('idle');
  };
  const setBlocks = (update: (blocks: BlogBlock[]) => BlogBlock[]) =>
    change({ content: update(post.content) });

  // ---------- Adding blocks ----------
  // The block being worked on (last one with the cursor in it) – the toolbar adds after it
  const [activeBlock, setActiveBlock] = useState<number | null>(null);
  const [focusBlock, setFocusBlock] = useState<number | null>(null);

  /** Add a block – at `at`, or after the block being worked on, or at the end */
  const addBlock = (type: BlogBlock['type'], at?: number) => {
    const index = at ?? (activeBlock !== null ? activeBlock + 1 : post.content.length);
    setBlocks((blocks) => insert(blocks, Math.min(index, blocks.length), type));
    setActiveBlock(index);
    setFocusBlock(index);
  };

  // …then bring the new block into view and put the cursor in it
  useEffect(() => {
    if (focusBlock === null) return;
    const card = document.querySelector<HTMLElement>(`[data-block-index="${focusBlock}"]`);
    card?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    card?.querySelector<HTMLElement>('input:not([type="checkbox"]), textarea')?.focus({ preventScroll: true });
    setFocusBlock(null);
  }, [focusBlock]);

  // ---------- Saving ----------
  const save = useCallback(
    async (publish?: { at: string | null }) => {
      setSaveState('saving');
      setError('');
      const result = await savePost(initial.id, post, updatedAt, publish).catch(() => null);
      if (!result) {
        setSaveState('idle');
        setError('Something went wrong. Please try again.');
        return false;
      }
      if (!result.ok) {
        setSaveState('idle');
        setError(result.error);
        setConflict(Boolean(result.conflict));
        return false;
      }
      setUpdatedAt(result.updatedAt);
      setStatus(result.status);
      setPublishedAt(result.publishedAt);
      if (result.slug !== post.slug) setPost((current) => ({ ...current, slug: result.slug }));
      setDirty(false);
      setSaveState('saved');
      return true;
    },
    [initial.id, post, updatedAt]
  );

  // Drafts save themselves a moment after the last change
  useEffect(() => {
    if (!canWrite || !dirty || isLive || conflict) return;
    const timer = window.setTimeout(() => void save(), AUTOSAVE_DELAY);
    return () => window.clearTimeout(timer);
  }, [canWrite, dirty, isLive, conflict, save]);

  // Leaving with unsaved changes asks first
  useEffect(() => {
    if (!dirty) return;
    const warn = (event: BeforeUnloadEvent) => event.preventDefault();
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [dirty]);

  const run = (action: () => Promise<unknown>) => {
    closeMenu();
    startTransition(async () => {
      await action();
    });
  };

  // ---------- "Are you sure?" popups ----------
  const [confirm, confirmDialog] = useConfirm();
  const postTitle = post.title.trim() || initial.title;

  const askDelete = () => {
    closeMenu();
    void confirm({
      title: isLive ? t.actions.deletePostTitle : t.actions.deleteDraftTitle,
      message: (isLive ? t.actions.deletePublishedConfirm : t.actions.deleteConfirm).replace('{title}', postTitle),
      icon: 'trash',
      tone: 'danger',
      confirmLabel: t.actions.deleteButton,
      busyLabel: t.actions.deleting,
      cancelLabel: t.actions.cancel,
      onConfirm: async () => {
        const result = await deletePost(initial.id);
        if (!result.ok) {
          setError(result.error);
          return;
        }
        setDirty(false); // no "unsaved changes" warning on the way out
        router.push('/dashboard/blogs');
      },
    });
  };

  const askUnpublish = () => {
    closeMenu();
    void confirm({
      title: t.actions.unpublishTitle,
      message: t.actions.unpublishConfirm.replace('{title}', postTitle),
      icon: 'external',
      tone: 'warning',
      confirmLabel: t.actions.unpublishButton,
      busyLabel: t.actions.unpublishing,
      cancelLabel: t.actions.cancel,
      onConfirm: async () => {
        const result = await unpublishPost(initial.id);
        if (result.ok) {
          setStatus('draft');
          setPublishedAt(null);
          setUpdatedAt(result.updatedAt);
        } else setError(result.error);
      },
    });
  };

  // ---------- Import from the template ----------
  const runImport = () => {
    try {
      const imported = importTemplate(importText);
      const { notes, author_name, ...fields } = imported;
      change({ ...fields, author_name: author_name ?? post.author_name, slug: isLive ? post.slug : fields.slug });
      setSlugEdited(true);
      setImportNotes(notes);
      setImportText('');
      setImportError(false);
      if (!notes.length) setImportOpen(false);
    } catch {
      setImportNotes(null);
      setImportError(true);
    }
  };

  // ---------- Layout ----------
  return (
    <div className={styles.editor}>
      <header className={styles.topbar}>
        <Link href="/dashboard/blogs" className={styles.back}>
          <DashboardIcon name="arrowLeft" size={16} />
          {t.back}
        </Link>
        <span className={styles.status} data-status={!isLive ? 'draft' : isScheduled ? 'scheduled' : 'published'}>
          {statusLabel}
        </span>
        <span className={styles.saveState} aria-live="polite">
          {saveState === 'saving' ? t.saving : dirty ? t.unsaved : saveState === 'saved' ? t.saved : ''}
        </span>

        <div className={styles.topActions}>
          {canWrite && (
            <button
              type="button"
              className={styles.ghostButton}
              onClick={() => {
                setImportNotes(null);
                setImportError(false);
                setImportOpen(true);
              }}
            >
              {t.actions.import}
            </button>
          )}
          <a href={`/dashboard/blogs/${initial.id}/preview`} target="_blank" rel="noopener noreferrer" className={styles.ghostButton}>
            {t.actions.preview}
          </a>
          {isLive && !isScheduled && (
            <a href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer" className={styles.ghostButton}>
              {t.actions.viewOnSite}
            </a>
          )}

          {canWrite && (
            <>
              {!isLive && (
                <>
                  <button
                    type="button"
                    className={`${styles.ghostButton} ${styles.danger}`}
                    disabled={pending}
                    onClick={askDelete}
                  >
                    {t.actions.deleteDraft}
                  </button>
                  <button type="button" className={styles.ghostButton} disabled={pending || !dirty} onClick={() => run(() => save())}>
                    {t.actions.saveDraft}
                  </button>
                </>
              )}
              <div ref={menuRef} className={`${menu.anchor} ${styles.publishGroup}`}>
                <button
                  type="button"
                  className={styles.primaryButton}
                  disabled={pending || conflict}
                  onClick={() => (isLive ? run(() => save({ at: null })) : setMenuOpen((open) => !open))}
                >
                  {isLive ? t.actions.update : t.actions.publish}
                </button>
                <button
                  type="button"
                  className={styles.primaryCaret}
                  aria-label="More actions"
                  aria-expanded={menuOpen}
                  disabled={pending}
                  onClick={() => setMenuOpen((open) => !open)}
                >
                  <DashboardIcon name="chevronDown" size={14} />
                </button>

                {menuOpen && (
                  <div className={`${menu.panel} ${styles.publishMenu}`}>
                    {scheduling ? (
                      <div className={styles.schedule}>
                        <label className={styles.label} htmlFor="schedule-at">
                          {t.actions.scheduleAt}
                        </label>
                        <input
                          id="schedule-at"
                          type="datetime-local"
                          className={styles.input}
                          value={scheduleAt}
                          min={localInputValue(new Date())}
                          onChange={(event) => setScheduleAt(event.target.value)}
                        />
                        <button
                          type="button"
                          className={styles.primaryButton}
                          disabled={!scheduleAt}
                          onClick={() => run(() => save({ at: new Date(scheduleAt).toISOString() }))}
                        >
                          {t.actions.scheduleConfirm}
                        </button>
                      </div>
                    ) : (
                      <>
                        {!isLive && (
                          <button type="button" className={menu.item} onClick={() => run(() => save({ at: null }))}>
                            {t.actions.publishNow}
                          </button>
                        )}
                        <button type="button" className={menu.item} onClick={() => setScheduling(true)}>
                          {t.actions.schedule}
                        </button>
                        {isLive && (
                          <button
                            type="button"
                            className={menu.item}
                            onClick={askUnpublish}
                          >
                            {t.actions.unpublish}
                          </button>
                        )}
                        <div className={menu.divider} />
                        <button
                          type="button"
                          className={`${menu.item} ${styles.danger}`}
                          onClick={askDelete}
                        >
                          {t.actions.delete}
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Block toolbar – always in view, so adding a block never needs scrolling */}
        {canWrite && (
          <div className={styles.blockBar} role="toolbar" aria-label={t.blocks.add}>
            <span className={styles.blockBarLabel} title={t.blocks.toolbarHint}>
              ＋ {t.blocks.toolbar}
            </span>
            {BLOCK_TYPES.map((type) => (
              <button
                key={type}
                type="button"
                className={styles.blockBarButton}
                title={`${t.blocks.names[type]} – ${t.blocks.toolbarHint.toLowerCase()}`}
                onClick={() => addBlock(type)}
              >
                {t.blocks.short[type]}
              </button>
            ))}
          </div>
        )}
      </header>

      {!canWrite && <p className={styles.notice}>{t.viewOnly}</p>}
      {error && (
        <p className={styles.alert} role="alert">
          {error}
          {conflict && (
            <button type="button" className={styles.smallButton} onClick={() => router.refresh()}>
              {t.actions.reload}
            </button>
          )}
        </p>
      )}

      {/* Everything inside is read-only for people who can't write */}
      <fieldset className={styles.layout} disabled={!canWrite}>
        <div className={styles.main}>
          <textarea
            className={styles.titleInput}
            value={post.title}
            rows={1}
            placeholder={t.fields.title}
            aria-label={t.fields.title}
            onChange={(event) => change({ title: event.target.value.replace(/\n/g, ' ') })}
            style={{ fieldSizing: 'content' } as React.CSSProperties}
          />
          <textarea
            className={styles.excerptInput}
            value={post.excerpt}
            rows={2}
            placeholder={t.fields.excerpt}
            aria-label={t.fields.excerpt}
            onChange={(event) => change({ excerpt: event.target.value })}
            style={{ fieldSizing: 'content' } as React.CSSProperties}
          />

          <div className={styles.blocks}>
            {post.content.length === 0 && <p className={styles.muted}>{t.blocks.empty}</p>}
            <BlockInserter at={0} onInsert={addBlock} />
            {post.content.map((block, i) => (
              <div
                key={i}
                data-block-index={i}
                data-active={activeBlock === i}
                className={styles.blockSlot}
                onFocus={() => setActiveBlock(i)}
              >
                <BlogBlockCard
                  block={block}
                  postId={initial.id}
                  services={services}
                  isFirst={i === 0}
                  isLast={i === post.content.length - 1}
                  onChange={(next) => setBlocks((blocks) => blocks.map((b, k) => (k === i ? next : b)))}
                  onMove={(by) => {
                    setBlocks((blocks) => move(blocks, i, i + by));
                    setActiveBlock(i + by);
                  }}
                  onDuplicate={() => setBlocks((blocks) => [...blocks.slice(0, i + 1), structuredClone(block), ...blocks.slice(i + 1)])}
                  onRemove={() => {
                    setBlocks((blocks) => blocks.filter((_, k) => k !== i));
                    setActiveBlock(null);
                  }}
                />
                <BlockInserter at={i + 1} onInsert={addBlock} />
              </div>
            ))}
          </div>

          {/* FAQs */}
          <section className={styles.faqs}>
            <h2 className={styles.sectionTitle}>{t.fields.faqs}</h2>
            <p className={styles.hint}>{t.fields.faqsHint}</p>
            {post.faqs.map((faq, i) => (
              <div key={i} className={styles.faq}>
                <input
                  className={styles.input}
                  value={faq.question}
                  placeholder={t.fields.question}
                  aria-label={`${t.fields.question} ${i + 1}`}
                  onChange={(event) =>
                    change({ faqs: post.faqs.map((f, k) => (k === i ? { ...f, question: event.target.value } : f)) })
                  }
                />
                <textarea
                  className={styles.textarea}
                  rows={2}
                  value={faq.answer}
                  placeholder={t.fields.answer}
                  aria-label={`${t.fields.answer} ${i + 1}`}
                  onChange={(event) =>
                    change({ faqs: post.faqs.map((f, k) => (k === i ? { ...f, answer: event.target.value } : f)) })
                  }
                  style={{ fieldSizing: 'content' } as React.CSSProperties}
                />
                <button
                  type="button"
                  className={styles.iconButton}
                  aria-label={t.blocks.remove}
                  onClick={() => change({ faqs: post.faqs.filter((_, k) => k !== i) })}
                >
                  <DashboardIcon name="close" size={14} />
                </button>
              </div>
            ))}
            <button
              type="button"
              className={styles.smallButton}
              onClick={() => change({ faqs: [...post.faqs, { question: '', answer: '' }] })}
            >
              + {t.fields.addFaq}
            </button>
          </section>
        </div>

        <BlogSeoPanel
          postId={initial.id}
          post={post}
          slugLocked={isLive}
          publishedAt={publishedAt}
          onChange={change}
          onSlugEdited={() => setSlugEdited(true)}
        />
      </fieldset>

      {/* Import from the template */}
      {importOpen && (
        <div className={styles.overlay} onClick={(event) => event.target === event.currentTarget && setImportOpen(false)}>
          <div className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="import-title">
            <h2 id="import-title" className={styles.sectionTitle}>
              {t.importDialog.title}
            </h2>
            <p className={styles.hint}>{t.importDialog.text}</p>
            {importNotes && importNotes.length > 0 ? (
              <>
                <p className={styles.notice}>{t.importDialog.done}</p>
                <ul className={styles.notes}>
                  {importNotes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
                <button type="button" className={styles.primaryButton} onClick={() => setImportOpen(false)}>
                  OK
                </button>
              </>
            ) : (
              <>
                <textarea
                  className={`${styles.textarea} ${styles.code}`}
                  rows={14}
                  value={importText}
                  placeholder={t.importDialog.placeholder}
                  aria-label={t.importDialog.title}
                  onChange={(event) => {
                    setImportText(event.target.value);
                    setImportError(false);
                  }}
                />
                {importError && (
                  <p className={styles.error} role="alert">
                    {t.importDialog.failed}
                  </p>
                )}
                <div className={styles.rowButtons}>
                  <button type="button" className={styles.ghostButton} onClick={() => setImportOpen(false)}>
                    {t.importDialog.cancel}
                  </button>
                  <button type="button" className={styles.primaryButton} disabled={!importText.trim()} onClick={runImport}>
                    {t.importDialog.import}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {confirmDialog}
    </div>
  );
}

function insert(blocks: BlogBlock[], at: number, type: BlogBlock['type']) {
  return [...blocks.slice(0, at), emptyBlock(type), ...blocks.slice(at)];
}

function move(blocks: BlogBlock[], from: number, to: number) {
  if (to < 0 || to >= blocks.length) return blocks;
  const next = [...blocks];
  const [block] = next.splice(from, 1);
  next.splice(to, 0, block);
  return next;
}

const INSERT_MENU_HEIGHT = 280; // px – the two-column list of block types

// "＋" between blocks: opens the list of block types – in two columns, and upwards near the
// bottom of the screen, so it always fits without scrolling
function BlockInserter({ at, onInsert }: { at: number; onInsert: (type: BlogBlock['type'], at: number) => void }) {
  const t = dashboardBlogEditor.blocks;
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [upwards, setUpwards] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  useDismiss(ref, open, close);

  const toggle = () => {
    const box = ref.current?.getBoundingClientRect();
    if (box) setUpwards(window.innerHeight - box.bottom < INSERT_MENU_HEIGHT && box.top > INSERT_MENU_HEIGHT);
    setOpen((value) => !value);
  };

  return (
    <div ref={ref} className={`${menu.anchor} ${styles.inserter}`}>
      <button type="button" className={styles.insertButton} aria-expanded={open} onClick={toggle}>
        ＋ {t.add}
      </button>
      {open && (
        <div className={`${menu.panel} ${menu.panelLeft} ${styles.blockMenu} ${upwards ? styles.blockMenuUp : ''}`}>
          {BLOCK_TYPES.map((type) => (
            <button
              key={type}
              type="button"
              className={menu.item}
              onClick={() => {
                onInsert(type, at);
                setOpen(false);
              }}
            >
              {t.names[type]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
