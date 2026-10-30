import Link from 'next/link';
import type { ReactNode } from 'react';

// Text written in the dashboard may use **bold** and [links](/services/seo). This turns those into
// real bold text and links – nothing else is interpreted, so no HTML can be slipped in.
// Links starting with / stay on the site; others open in a new tab.
const TOKEN = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;

export default function BlogText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let last = 0;

  for (const match of text.matchAll(TOKEN)) {
    const at = match.index ?? 0;
    if (at > last) parts.push(text.slice(last, at));
    const [whole, bold, label, href] = match;

    if (bold !== undefined) {
      parts.push(<strong key={at}>{bold}</strong>);
    } else if (href.startsWith('/')) {
      parts.push(
        <Link key={at} href={href}>
          {label}
        </Link>
      );
    } else if (/^(https?:|mailto:|tel:)/.test(href)) {
      parts.push(
        <a key={at} href={href} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      );
    } else {
      parts.push(whole); // anything else stays as written
    }
    last = at + whole.length;
  }

  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
