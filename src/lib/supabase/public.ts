import 'server-only';
import { createClient } from '@supabase/supabase-js';

// Supabase client for public pages (the blog): no login and no cookies, so the pages can be built
// ahead of time and cached. Only sees what anyone may see (row level security applies).
// Null when the Supabase keys aren't set (e.g. a build where the hosting has no environment
// variables yet) – callers then show no posts instead of breaking the whole build.
export function createPublicClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    console.warn('[supabase] NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY are not set');
    return null;
  }
  return createClient(url, key, { auth: { persistSession: false } });
}
