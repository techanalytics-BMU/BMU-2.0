import { NextResponse, type NextRequest } from 'next/server';
import { createClient } from '@/lib/supabase/server';

// The link in Supabase's confirmation email lands here with a one-time `code`: swap it for a
// session, then send them on (/account – staff are passed on to /dashboard from there).
export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) return NextResponse.redirect(`${origin}/account`);
  }

  // Expired link, or opened in a different browser from the one they signed up in
  return NextResponse.redirect(`${origin}/login?notice=confirm`);
}
