'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useConfirm } from '@/components/dashboard/DashboardDialog/useConfirm';
import DashboardIcon from '@/components/dashboard/DashboardIcon/DashboardIcon';
import { dashboardBlogs } from '@/data/dashboard/dashboardBlogs';
import { createPost, deletePost } from '@/lib/blog/manage';
import { formatDate } from '@/lib/blog/posts';
import { formatDateTime, timeAgo } from '@/lib/leads/format';
import type { BlogPost } from '@/types/blog';
import leadStyles from '../DashboardLeads/DashboardLeads.module.css';
import styles from './DashboardBlogs.module.css';

type Row = Pick<BlogPost, 'id' | 'slug' | 'title' | 'status' | 'published_at' | 'updated_at' | 'author_name'>;
type Status = 'draft' | 'published' | 'scheduled';

type Props = {
  posts: Row[]; // every post, last edited first
  canWrite: boolean; // SEO writer
};

const statusOf = (post: Row, now: string): Status =>
  post.status === 'draft' ? 'draft' : post.published_at && post.published_at > now ? 'scheduled' : 'published';

// The blog in the dashboard: every post with its status (draft, scheduled or published), search and
// a status filter. The SEO writer gets "New post" and Edit; admins and managers View.
export default function DashboardBlogs({ posts, canWrite }: Props) {
  const t = dashboardBlogs;
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Status | null>(null);
  const [now] = useState(() => new Date().toISOString());
  const [confirm, confirmDialog] = useConfirm();

  const rows = useMemo(() => {
    const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return posts.filter(
      (post) =>
        (!filter || statusOf(post, now) === filter) &&
        words.every((word) => `${post.title} ${post.slug}`.toLowerCase().includes(word))
    );
  }, [posts, query, filter, now]);

  return (
    <div className={leadStyles.page}>
      <header className={leadStyles.header}>
        <div>
          <h1 className={leadStyles.heading}>{t.heading}</h1>
          <p className={leadStyles.description}>{t.description}</p>
        </div>
        {canWrite && (
          <form action={createPost}>
            <button type="submit" className={styles.newPost}>
              ＋ {t.newPost}
            </button>
          </form>
        )}
      </header>

      {!canWrite && <p className={styles.note}>{t.viewOnly}</p>}

      <div className={leadStyles.filters}>
        <div className={leadStyles.filterRow}>
          <div className={leadStyles.ranges} role="group" aria-label={t.columns.status}>
            {([null, 'draft', 'scheduled', 'published'] as const).map((value) => (
              <button
                key={value ?? 'all'}
                type="button"
                className={leadStyles.chip}
                aria-pressed={filter === value}
                onClick={() => setFilter(value)}
              >
                {value ? t.statuses[value] : t.allStatuses}
              </button>
            ))}
          </div>
          <label className={leadStyles.search}>
            <DashboardIcon name="search" size={16} />
            <span className={leadStyles.srOnly}>{t.search}</span>
            <input type="search" value={query} placeholder={t.search} onChange={(event) => setQuery(event.target.value)} />
          </label>
        </div>
      </div>

      {rows.length === 0 ? (
        <div className={leadStyles.empty}>
          <p>{posts.length === 0 ? (canWrite ? t.emptyWriter : t.empty) : t.noMatch}</p>
        </div>
      ) : (
        <div className={leadStyles.tableCard}>
          <table className={leadStyles.table}>
            <thead>
              <tr>
                <th scope="col" className={styles.titleHead}>
                  {t.columns.title}
                </th>
                <th scope="col">{t.columns.status}</th>
                <th scope="col">{t.columns.date}</th>
                <th scope="col" className={styles.updatedCell}>
                  {t.columns.updated}
                </th>
                <th scope="col" className={styles.actionsHead}>
                  {t.columns.actions}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((post) => {
                const status = statusOf(post, now);
                return (
                  <tr key={post.id} className={styles.row}>
                    <td className={styles.titleTd}>
                      <div className={styles.titleCell}>
                        <Link href={`/dashboard/blogs/${post.id}`} className={styles.title}>
                          {post.title}
                        </Link>
                        <span className={leadStyles.sub}>
                          /blog/{post.slug} · {post.author_name}
                          {/* On tablets and phones the "Last edited" column is folded in here */}
                          <span className={styles.editedInline} suppressHydrationWarning>
                            {' '}
                            · {t.columns.updated.toLowerCase()} {timeAgo(post.updated_at)}
                          </span>
                        </span>
                      </div>
                    </td>
                    <td className={styles.statusTd}>
                      <span className={styles.status} data-status={status}>
                        {t.statuses[status]}
                      </span>
                    </td>
                    <td className={styles.published} data-status={status}>
                      {status === 'draft'
                        ? t.notYet
                        : status === 'scheduled'
                          ? t.scheduledOn.replace('{date}', formatDateTime(post.published_at!))
                          : formatDate(post.published_at!)}
                    </td>
                    <td className={styles.updatedCell}>
                      <span suppressHydrationWarning>{timeAgo(post.updated_at)}</span>
                    </td>
                    {/* At most three buttons, packed together and lined up row under row:
                        Edit · Preview · then Delete (drafts) or View on site (live posts) */}
                    <td className={styles.actionsCell}>
                      <div className={styles.actions}>
                        <Link
                          href={`/dashboard/blogs/${post.id}`}
                          className={styles.action}
                          title={canWrite ? t.edit : t.view}
                          aria-label={`${canWrite ? t.edit : t.view}: ${post.title}`}
                        >
                          <DashboardIcon name={canWrite ? 'blogs' : 'eye'} size={16} />
                        </Link>
                        <a
                          href={`/dashboard/blogs/${post.id}/preview`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.action}
                          title={t.preview}
                          aria-label={`${t.preview}: ${post.title}`}
                        >
                          <DashboardIcon name="eye" size={16} />
                        </a>
                        {status === 'published' && (
                          <a
                            href={`/blog/${post.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.action}
                            title={t.viewOnSite}
                            aria-label={`${t.viewOnSite}: ${post.title}`}
                          >
                            <DashboardIcon name="external" size={16} />
                          </a>
                        )}
                        {canWrite && status === 'draft' && (
                          <button
                            type="button"
                            className={`${styles.action} ${styles.delete}`}
                            title={t.delete}
                            aria-label={`${t.delete}: ${post.title}`}
                            onClick={() =>
                              void confirm({
                                title: t.deleteTitle,
                                message: t.deleteConfirm.replace('{title}', post.title),
                                icon: 'trash',
                                tone: 'danger',
                                confirmLabel: t.delete,
                                busyLabel: t.deleting,
                                cancelLabel: t.cancel,
                                onConfirm: () => deletePost(post.id), // the list refreshes itself
                              })
                            }
                          >
                            <DashboardIcon name="trash" size={16} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {confirmDialog}
    </div>
  );
}
