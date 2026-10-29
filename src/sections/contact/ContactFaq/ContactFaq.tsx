'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Badge from '@/components/ui/Badge/Badge';
import { contactFaq } from '@/data/contact/contactFaq';
import { useInView } from '@/hooks/useInView';
import styles from './ContactFaq.module.css';

// The WhatsApp mark (as in /icons/social/whatsapp.svg), in the current text colour
function WhatsAppIcon({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path
        d="M3.6 20.4l1.3-4.2A8.6 8.6 0 1 1 8 19.3z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.4 8.7c.3-.5.6-.6.9-.6h.5c.2 0 .4.1.5.4l.7 1.6c.1.2 0 .4-.1.6l-.5.6c-.1.1-.2.3-.1.5.5.9 1.3 1.7 2.2 2.2.2.1.4.1.5-.1l.6-.6c.2-.2.4-.2.6-.1l1.6.7c.2.1.4.3.4.5v.5c0 .3-.1.6-.6.9-.6.3-1.6.4-2.9-.3-1.3-.7-2.4-1.8-3.1-3.1-.7-1.3-.6-2.3-.3-2.9z"
        fill="currentColor"
      />
    </svg>
  );
}

// FAQ accordion – one answer open at a time (the first starts open). Each question is a quiet card;
// the open one lights its rim and its "+" turns into a "−". Under it, a card for anything else:
// ask on WhatsApp, with a little chat preview of the message the button starts – it pops in, and
// the team "types" a reply, when the card scrolls into view.
export default function ContactFaq() {
  const { badge, headingStart, headingHighlight, items, more } = contactFaq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ask = useInView<HTMLDivElement>({ threshold: 0.4 });

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.header}>
        <Badge>{badge}</Badge>
        <h2 className={styles.heading}>
          <span className={styles.line}>{headingStart}</span>{' '}
          <span className="text-accent">{headingHighlight}</span>
        </h2>
      </div>

      <ul className={styles.list}>
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <li key={item.question} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
              <h3 className={styles.questionWrap}>
                <button
                  type="button"
                  id={`faq-question-${i}`}
                  className={styles.question}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className={styles.number}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles.questionText}>{item.question}</span>
                  <span className={styles.toggle} aria-hidden="true" />
                </button>
              </h3>
              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                className={styles.answer}
              >
                <div className={styles.answerInner}>
                  <p>{item.answer}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div ref={ask.ref} className={styles.ask} data-in-view={ask.inView}>
        <div className={styles.askCopy}>
          <p className={styles.eyebrow}>{more.eyebrow}</p>
          <h3 className={styles.askTitle}>{more.title}</h3>
          <p className={styles.askText}>{more.text}</p>
        </div>

        {/* A preview of the chat the button opens */}
        <div className={styles.chat} aria-hidden="true">
          <div className={styles.chatHead}>
            <span className={styles.avatar}>
              <Image src="/images/common/bmu-logo-light.webp" alt="" width={556} height={268} />
            </span>
            <span className={styles.chatName}>
              BMU Marketing
              <span>
                <WhatsAppIcon size={11} /> WhatsApp
              </span>
            </span>
          </div>
          <p className={styles.bubbleOut}>
            {more.preview}
            <span className={styles.ticks}>✓✓</span>
          </p>
          <p className={styles.bubbleIn}>
            <span />
            <span />
            <span />
          </p>
        </div>

        <Link
          href={more.cta.href}
          className={styles.askButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          {more.cta.label}
          <span className={styles.askButtonIcon}>
            <WhatsAppIcon size={17} />
          </span>
        </Link>
      </div>
    </section>
  );
}
