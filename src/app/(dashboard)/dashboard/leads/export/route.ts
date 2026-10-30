import { NextResponse, type NextRequest } from 'next/server';
import { getProfile } from '@/lib/auth/session';
import { parseFilters, todayIST } from '@/lib/leads/filters';
import { formatDateTime } from '@/lib/leads/format';
import { applyFilters } from '@/lib/leads/queries';
import { dashboardLeads } from '@/data/dashboard/dashboardLeads';
import { createClient } from '@/lib/supabase/server';
import type { Lead } from '@/types/leads';

const MAX_ROWS = 5000;

// "Export CSV" (admins only): the leads in the current filters, as a file Excel / Google Sheets
// open. Same address query as the leads page – /dashboard/leads/export?range=7d&status=new…
export async function GET(request: NextRequest) {
  const profile = await getProfile();
  if (profile?.role !== 'admin') return new NextResponse('Not allowed', { status: 403 });

  const filters = parseFilters(Object.fromEntries(request.nextUrl.searchParams));
  const supabase = await createClient();
  const { data, error } = await applyFilters(supabase.from('leads').select('*'), filters)
    .order('created_at', { ascending: false })
    .limit(MAX_ROWS);
  if (error) return new NextResponse('Could not export leads', { status: 500 });

  const t = dashboardLeads;
  const columns: [string, (lead: Lead) => string | null][] = [
    ['Received', (lead) => formatDateTime(lead.created_at)],
    ['Name', (lead) => lead.name],
    ['Phone', (lead) => lead.phone],
    ['Email', (lead) => lead.email],
    ['Business', (lead) => lead.business],
    ['Message', (lead) => lead.message],
    ['Status', (lead) => t.statuses[lead.status]],
    ['Follow-up date', (lead) => lead.follow_up_on],
    ['Source', (lead) => t.sources[lead.source]],
    ['Sent from', (lead) => lead.page_path],
    ['First page', (lead) => lead.landing_page],
    ['Came from', (lead) => lead.referrer],
    ['UTM source', (lead) => lead.utm_source],
    ['UTM medium', (lead) => lead.utm_medium],
    ['UTM campaign', (lead) => lead.utm_campaign],
    ['UTM term', (lead) => lead.utm_term],
    ['UTM content', (lead) => lead.utm_content],
  ];

  // Quotes around every cell; a leading = + - @ is defused so spreadsheets don't run it as a formula
  const cell = (value: string | null) => {
    const text = (value ?? '').replace(/"/g, '""');
    return `"${/^[=+\-@]/.test(text) ? `'${text}` : text}"`;
  };
  const lines = [
    columns.map(([title]) => cell(title)).join(','),
    ...((data ?? []) as Lead[]).map((lead) => columns.map(([, read]) => cell(read(lead))).join(',')),
  ];

  // The BOM at the start makes Excel read the file as UTF-8 (₹, names in other scripts…)
  return new NextResponse(`﻿${lines.join('\r\n')}`, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="bmu-leads-${todayIST()}.csv"`,
      'Cache-Control': 'no-store',
    },
  });
}
