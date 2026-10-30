'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState, useTransition } from 'react';
import DashboardIcon from '@/components/dashboard/DashboardIcon/DashboardIcon';
import { dashboardLeads } from '@/data/dashboard/dashboardLeads';
import { formatDate, formatDateTime } from '@/lib/leads/format';
import { addLeadNote, archiveLead, getLeadDetails, restoreLead, setFollowUp } from '@/lib/leads/manage';
import type { LeadDetails, LeadEvent, LeadFilters, LeadRow } from '@/types/leads';
import DashboardLeadStatus from './DashboardLeadStatus';
import DashboardLeadTags from './DashboardLeadTags';
import styles from './DashboardLeadPanel.module.css';
import { useLeadNavigation } from './useLeadNavigation';

type Props = { rows: LeadRow[]; filters: LeadFilters; isAdmin: boolean };

// The lead that's open (?lead=<id>), sliding in from the right: name and tags, one-tap Call /
// WhatsApp / Email, status and follow-up date, everything they sent and where they came from,
// notes, the history of changes – and for admins, Archive / Restore. Opening it marks the lead
// as seen (for you) – the NEW tag and the bell update.
export default function DashboardLeadPanel({ rows, filters, isAdmin }: Props) {
  const t = dashboardLeads;
  const router = useRouter();
  const { openLeadId: id, closeLead } = useLeadNavigation(filters);
  const [details, setDetails] = useState<LeadDetails | null>(null);
  const [state, setState] = useState<'loading' | 'ready' | 'failed'>('loading');
  const [note, setNote] = useState('');
  const [error, setError] = useState('');
  const [pending, startTransition] = useTransition();
  const panelRef = useRef<HTMLDivElement>(null);

  const load = useCallback(async (leadId: string) => {
    const result = await getLeadDetails(leadId).catch(() => null);
    setDetails(result);
    setState(result ? 'ready' : 'failed');
    return result;
  }, []);

  // A new lead opened: load it, then refresh the list so its NEW tag and the bell update
  useEffect(() => {
    if (!id) return;
    setState('loading');
    setDetails(null);
    setNote('');
    setError('');
    void load(id).then((result) => result && router.refresh());
  }, [id, load, router]);

  // Escape closes; focus moves into the panel when a lead opens (once per lead, not every render)
  useEffect(() => {
    if (!id) return;
    panelRef.current?.focus({ preventScroll: true });
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && closeLead();
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [id]);

  if (!id) return null;

  const row = rows.find((item) => item.id === id);
  const lead = details?.lead;

  const run = (action: () => Promise<{ ok: boolean; error?: string }>, after?: () => void) =>
    startTransition(async () => {
      setError('');
      const result = await action();
      if (!result.ok) setError(result.error ?? t.panel.failed);
      else {
        after?.();
        await load(id);
      }
    });

  const eventText = (event: LeadEvent) => {
    const e = t.panel.events;
    const text =
      event.kind === 'status'
        ? e.status
            .replace('{from}', event.from_status ? t.statuses[event.from_status] : '–')
            .replace('{to}', event.to_status ? t.statuses[event.to_status] : '–')
        : event.kind === 'follow_up'
          ? event.follow_up_on
            ? e.followUp.replace('{date}', formatDate(event.follow_up_on))
            : e.followUpCleared
          : event.kind === 'archived'
            ? e.archived
            : e.restored;
    return text.replace('{actor}', event.actor);
  };

  const digits = lead?.phone.replace(/\D/g, '') ?? '';
  const campaign = lead
    ? [lead.utm_source, lead.utm_medium, lead.utm_campaign, lead.utm_term, lead.utm_content]
        .filter(Boolean)
        .join(' / ')
    : '';
  const facts = lead
    ? ([
        [t.panel.labels.phone, lead.phone],
        [t.panel.labels.email, lead.email],
        [t.panel.labels.business, lead.business],
        [t.panel.labels.message, lead.message],
        [t.panel.labels.source, t.sources[lead.source]],
        [t.panel.labels.page, lead.page_path],
        [t.panel.labels.landing, lead.landing_page],
        [t.panel.labels.referrer, lead.referrer || t.panel.direct],
        [t.panel.labels.campaign, campaign || null],
        [t.panel.labels.received, formatDateTime(lead.created_at)],
      ].filter(([, value]) => value) as [string, string][])
    : [];

  return (
    <>
      <button type="button" className={styles.scrim} aria-label={t.panel.close} onClick={closeLead} />
      <aside
        ref={panelRef}
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-label={lead?.name ?? t.panel.loading}
        tabIndex={-1}
      >
        <button type="button" className={styles.close} aria-label={t.panel.close} onClick={closeLead}>
          <DashboardIcon name="close" size={16} />
        </button>

        {state === 'loading' && <p className={styles.message}>{t.panel.loading}</p>}
        {state === 'failed' && <p className={styles.message}>{t.panel.failed}</p>}

        {lead && (
          <div className={styles.body} data-pending={pending}>
            <header className={styles.header}>
              <h2 className={styles.name}>{lead.name}</h2>
              <DashboardLeadTags lead={lead} isNew={row?.isNew} isRepeat={row?.isRepeat} />
            </header>

            <div className={styles.quick}>
              <a href={`tel:+${digits}`} className={styles.quickButton}>
                <DashboardIcon name="phone" size={16} />
                {t.panel.call}
              </a>
              <a
                href={`https://wa.me/${digits}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.quickButton}
              >
                <DashboardIcon name="chat" size={16} />
                {t.panel.whatsapp}
              </a>
              <a href={`mailto:${lead.email}`} className={styles.quickButton}>
                <DashboardIcon name="mail" size={16} />
                {t.panel.email}
              </a>
            </div>

            <div className={styles.controls}>
              <div className={styles.control}>
                <span className={styles.label}>{t.panel.status}</span>
                <DashboardLeadStatus
                  leadId={lead.id}
                  status={lead.status}
                  followUpOn={lead.follow_up_on}
                  onChanged={() => void load(lead.id)}
                />
              </div>
              <div className={styles.control}>
                <label className={styles.label} htmlFor="panel-follow-up">
                  {t.panel.followUp}
                </label>
                <div className={styles.followUp}>
                  <input
                    id="panel-follow-up"
                    type="date"
                    className={styles.date}
                    value={lead.follow_up_on ?? ''}
                    onChange={(event) => run(() => setFollowUp(lead.id, event.target.value || null))}
                  />
                  {lead.follow_up_on && (
                    <button
                      type="button"
                      className={styles.linkButton}
                      onClick={() => run(() => setFollowUp(lead.id, null))}
                    >
                      {t.panel.clearFollowUp}
                    </button>
                  )}
                </div>
              </div>
            </div>

            {error && (
              <p className={styles.error} role="alert">
                {error}
              </p>
            )}

            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>{t.panel.details}</h3>
              <dl className={styles.details}>
                {facts.map(([label, value]) => (
                  <div key={label} className={styles.detail}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>{t.panel.notes}</h3>
              {details.notes.length === 0 ? (
                <p className={styles.muted}>{t.panel.notesEmpty}</p>
              ) : (
                <ul className={styles.notes}>
                  {details.notes.map((item) => (
                    <li key={item.id} className={styles.note}>
                      <p className={styles.noteBody}>{item.body}</p>
                      <p className={styles.meta}>
                        {item.author} · {formatDateTime(item.created_at)}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
              <form
                className={styles.noteForm}
                onSubmit={(event) => {
                  event.preventDefault();
                  run(() => addLeadNote(lead.id, note), () => setNote(''));
                }}
              >
                <textarea
                  className={styles.textarea}
                  rows={3}
                  value={note}
                  placeholder={t.panel.notePlaceholder}
                  aria-label={t.panel.notes}
                  onChange={(event) => setNote(event.target.value)}
                />
                <button type="submit" className={styles.addNote} disabled={pending || !note.trim()}>
                  {pending ? t.panel.adding : t.panel.addNote}
                </button>
              </form>
            </section>

            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>{t.panel.history}</h3>
              <ol className={styles.history}>
                {details.events.map((event) => (
                  <li key={event.id}>
                    <span>{eventText(event)}</span>
                    <span className={styles.meta}>{formatDateTime(event.created_at)}</span>
                  </li>
                ))}
                <li>
                  <span>{t.panel.events.received}</span>
                  <span className={styles.meta}>{formatDateTime(lead.created_at)}</span>
                </li>
              </ol>
            </section>

            {isAdmin && (
              <div className={styles.footer}>
                {lead.archived_at ? (
                  <button
                    type="button"
                    className={styles.archive}
                    onClick={() => run(() => restoreLead(lead.id))}
                  >
                    <DashboardIcon name="restore" size={16} />
                    {t.panel.restore}
                  </button>
                ) : (
                  <button
                    type="button"
                    className={styles.archive}
                    onClick={() => {
                      if (window.confirm(t.panel.archiveConfirm)) run(() => archiveLead(lead.id), closeLead);
                    }}
                  >
                    <DashboardIcon name="archive" size={16} />
                    {t.panel.archive}
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </aside>
    </>
  );
}
