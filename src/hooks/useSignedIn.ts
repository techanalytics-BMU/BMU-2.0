'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import type { AppRole } from '@/types/auth';

/** 'checking' until known; 'out' when logged out; otherwise the person's role */
export type SignedIn = 'checking' | 'out' | AppRole;

/**
 * Who's logged in, worked out in the browser – so the public pages stay pre-built and fast (the
 * server never has to read the login for them). Reads the login cookie already in the browser,
 * then the person's role; updates by itself on login and logout (other tabs too).
 */
export function useSignedIn(): SignedIn {
  const [state, setState] = useState<SignedIn>('checking');

  useEffect(() => {
    let supabase: ReturnType<typeof createClient>;
    try {
      supabase = createClient();
    } catch {
      setState('out'); // Supabase isn't set up here – nobody can be logged in
      return;
    }
    let cancelled = false;

    const check = async (userId: string | undefined) => {
      if (!userId) {
        if (!cancelled) setState('out');
        return;
      }
      const { data } = await supabase.from('profiles').select('role').eq('id', userId).maybeSingle();
      if (!cancelled) setState((data?.role as AppRole | undefined) ?? 'client');
    };

    void supabase.auth.getSession().then(({ data }) => check(data.session?.user.id));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      void check(session?.user.id);
    });

    return () => {
      cancelled = true;
      listener.subscription.unsubscribe();
    };
  }, []);

  return state;
}
