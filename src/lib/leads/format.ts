import { TIME_ZONE } from './filters';

// How dates read in the dashboard – always India time

/** '30 Oct 2026' – from a moment or a 'YYYY-MM-DD' day */
export function formatDate(value: string, withYear = true) {
  const date = value.length === 10 ? new Date(`${value}T12:00:00+05:30`) : new Date(value);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    ...(withYear ? { year: 'numeric' } : {}),
    timeZone: TIME_ZONE,
  });
}

/** '30 Oct 2026, 4:12 pm' */
export function formatDateTime(iso: string) {
  return new Date(iso).toLocaleString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: TIME_ZONE,
  });
}

/** 'Just now', '12m ago', '3h ago', 'Yesterday', '28 Oct' */
export function timeAgo(iso: string, now = Date.now()) {
  const minutes = Math.floor((now - new Date(iso).getTime()) / 60000);
  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  if (hours < 48) return 'Yesterday';
  return formatDate(iso, false);
}
