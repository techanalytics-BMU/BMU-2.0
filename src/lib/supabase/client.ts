'use client';

import { createBrowserClient } from '@supabase/ssr';

// Supabase client for Client Components (runs in the browser, uses the anon key + RLS)
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
