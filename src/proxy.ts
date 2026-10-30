import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

// Runs before the account pages only (see `matcher` – the public website never waits on it):
// keeps the Supabase login fresh, sends logged-out visitors from /dashboard and /account to /login,
// and logged-in ones from /login and /signup to their dashboard. The role check (staff vs client)
// is done in the pages themselves – see src/app/(dashboard)/layout.tsx.
export async function proxy(request: NextRequest) {
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Also refreshes an expiring session – nothing may run between createServerClient and this
  const { data } = await supabase.auth.getClaims();
  const loggedIn = Boolean(data?.claims?.sub);
  const { pathname, search } = request.nextUrl;

  const redirectTo = (path: string) => {
    const url = request.nextUrl.clone();
    const [target, query] = path.split('?');
    url.pathname = target;
    url.search = query ? `?${query}` : '';
    const redirect = NextResponse.redirect(url);
    // carry over any refreshed login cookies
    response.cookies.getAll().forEach((cookie) => redirect.cookies.set(cookie));
    return redirect;
  };

  const isPrivate = pathname.startsWith('/dashboard') || pathname.startsWith('/account');
  if (!loggedIn && isPrivate) {
    return redirectTo(`/login?next=${encodeURIComponent(pathname + search)}`);
  }
  if (loggedIn && (pathname === '/login' || pathname === '/signup')) {
    return redirectTo('/dashboard'); // clients are passed on to /account from there
  }

  return response;
}

export const config = {
  matcher: ['/dashboard/:path*', '/account/:path*', '/login', '/signup'],
};
