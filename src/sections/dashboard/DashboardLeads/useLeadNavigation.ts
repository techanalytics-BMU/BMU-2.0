'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';
import { filtersToQuery } from '@/lib/leads/filters';
import type { LeadFilters } from '@/types/leads';

/**
 * Changing the leads page's filters (they live in the address, so the server re-reads the list)
 * and opening / closing a lead in the side panel (`?lead=<id>` – changed in the browser only,
 * so opening a lead doesn't reload the list).
 */
export function useLeadNavigation(filters: LeadFilters) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [pending, startTransition] = useTransition();

  /** New filters – back to page 1 unless a page is given */
  const setFilters = (changes: Partial<LeadFilters>) => {
    const next = { ...filters, page: 1, ...changes };
    startTransition(() => router.replace(`${pathname}${filtersToQuery(next)}`, { scroll: false }));
  };

  const withLead = (id: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (id) params.set('lead', id);
    else params.delete('lead');
    const query = params.toString();
    return `${pathname}${query ? `?${query}` : ''}`;
  };

  // pushState: the browser's Back button closes the panel again
  const openLead = (id: string) => window.history.pushState(null, '', withLead(id));
  const closeLead = () => window.history.replaceState(null, '', withLead(null));

  return { pending, setFilters, openLead, closeLead, openLeadId: searchParams.get('lead') };
}
