import 'server-only';
import { createClient } from '@supabase/supabase-js';

// Supabase client for public pages (the blog): no login and no cookies, so the pages can be built
// ahead of time and cached. Only sees what anyone may see (row level security applies).
export function createPublicClient() {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    auth: { persistSession: false },
  });
}
