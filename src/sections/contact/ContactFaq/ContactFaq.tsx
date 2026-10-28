'use client';

import Link from 'next/link';
import { useState } from 'react';
import Badge from '@/components/ui/Badge/Badge';
import { contactFaq } from '@/data/contact/contactFaq';
import styles from './ContactFaq.module.css';

// FAQ accordion – one answer open at a time (the first starts open). Each question is a quiet card;
// the open one lights its rim and its "+" turns into a "−". A WhatsApp line for anything else.
export default function ContactFaq() {
  const { badge, headingStart, headingHighlight, items, more } = contactFaq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.header}>
        <Badge>{badge}</Badge>
        <h2 className={styles.heading}>
          <span className={styles.line}>{headingStart}</span>{' '}
          <span className={styles.accent}>{headingHighlight}</span>
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

      <p className={styles.more}>
        {more.text}{' '}
        <Link href={more.cta.href} className={styles.moreLink}>
          {more.cta.label}
          <span aria-hidden="true">→</span>
        </Link>
      </p>
    </section>
  );
}
