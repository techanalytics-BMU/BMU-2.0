'use client';

import Image from 'next/image';
import { useState } from 'react';
import Button from '@/components/ui/Button/Button';
import type { FooterNewsletter } from '@/types/footer';
import styles from './Footer.module.css';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Newsletter field in the footer – checks the email in the browser and shows a thank-you line.
// Saving the address (Supabase) will be added later in handleSubmit.
export default function FooterSubscribe({ newsletter }: { newsletter: FooterNewsletter }) {
  const [status, setStatus] = useState<'idle' | 'invalid' | 'sending' | 'sent'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = String(new FormData(event.currentTarget).get('email') ?? '').trim();
    if (!EMAIL.test(email)) {
      setStatus('invalid');
      return;
    }
    setStatus('sending');
    // TODO (Supabase): save the email here
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus('sent');
  };

  if (status === 'sent') {
    return (
      <p className={styles.subscribed} role="status">
        {newsletter.success}
      </p>
    );
  }

  return (
    <form className={styles.subscribe} onSubmit={handleSubmit} noValidate>
      <div className={styles.subscribeField} data-invalid={status === 'invalid'}>
        <input
          name="email"
          type="email"
          placeholder={newsletter.placeholder}
          aria-label={newsletter.placeholder}
          aria-invalid={status === 'invalid'}
          aria-describedby={status === 'invalid' ? 'footer-subscribe-error' : undefined}
          className={styles.subscribeInput}
          onChange={() => status === 'invalid' && setStatus('idle')}
        />
        <Button type="submit" className={styles.subscribeButton} disabled={status === 'sending'}>
          {status === 'sending' ? newsletter.sending : newsletter.button}
          <Image src="/icons/common/navbar-cta-icon.svg" alt="" width={32} height={32} />
        </Button>
      </div>
      {status === 'invalid' && (
        <p id="footer-subscribe-error" className={styles.subscribeError}>
          {newsletter.error}
        </p>
      )}
    </form>
  );
}
