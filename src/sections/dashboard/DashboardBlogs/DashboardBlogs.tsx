'use client';

import Link from 'next/link';
import { useMemo, useState, useTransition } from 'react';
import DashboardIcon from '@/components/dashboard/DashboardIcon/DashboardIcon';
import { dashboardBlogs } from '@/data/dashboard/dashboardBlogs';
import { createPost, deletePost } from '@/lib/blog/manage';
import { formatDate } from '@/lib/blog/posts';
import { timeAgo } from '@/lib/leads/format';
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
  const [deleting, startDeleting] = useTransition();

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
                <th scope="col">{t.columns.title}</th>
                <th scope="col">{t.columns.status}</th>
                <th scope="col">{t.columns.date}</th>
                <th scope="col">{t.columns.updated}</th>
                <th scope="col">
                  <span className={leadStyles.srOnly}>Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((post) => {
                const status = statusOf(post, now);
                return (
                  <tr key={post.id}>
                    <td>
                      <Link href={`/dashboard/blogs/${post.id}`} className={styles.title}>
                        {post.title}
                      </Link>
                      <span className={leadStyles.sub}>
                        /blog/{post.slug} · {post.author_name}
                      </span>
                    </td>
                    <td>
                      <span className={styles.status} data-status={status}>
                        {t.statuses[status]}
                      </span>
                    </td>
                    <td>{post.published_at ? formatDate(post.published_at) : '–'}</td>
                    <td>
                      <span suppressHydrationWarning>{timeAgo(post.updated_at)}</span>
                    </td>
                    <td className={styles.actions}>
                      <Link href={`/dashboard/blogs/${post.id}`} className={leadStyles.chip}>
                        {canWrite ? t.edit : t.view}
                      </Link>
                      <a href={`/dashboard/blogs/${post.id}/preview`} target="_blank" rel="noopener noreferrer" className={leadStyles.chip}>
                        {t.preview}
                      </a>
                      {status === 'published' && (
                        <a href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer" className={leadStyles.chip}>
                          {t.viewOnSite}
                        </a>
                      )}
                      {canWrite && status === 'draft' && (
                        <button
                          type="button"
                          className={`${leadStyles.chip} ${styles.delete}`}
                          disabled={deleting}
                          onClick={() => {
                            if (!window.confirm(t.deleteConfirm.replace('{title}', post.title))) return;
                            startDeleting(async () => {
                              await deletePost(post.id);
                            });
                          }}
                        >
                          {t.delete}
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
