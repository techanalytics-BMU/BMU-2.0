'use client';

import Image from 'next/image';
import { useState } from 'react';
import { contactFaq } from '@/data/contact/contactFaq';
import styles from './ContactFaq.module.css';

// FAQ accordion – one answer open at a time (the first starts open)
export default function ContactFaq() {
  const { badge, headingStart, headingHighlight, items } = contactFaq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.badge}>{badge}</span>
        <h2 className={styles.heading}>
          {headingStart} <span className={styles.accent}>{headingHighlight}</span>
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
                  <Image src="/icons/contact/faq/search.svg" alt="" width={16} height={16} />
                  <span className={styles.questionText}>{item.question}</span>
                  <span className={styles.chevron} aria-hidden="true" />
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
    </section>
  );
}
