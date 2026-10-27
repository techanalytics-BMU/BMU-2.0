import Image from 'next/image';
import Link from 'next/link';
import Badge from '@/components/ui/Badge/Badge';
import { contactHero } from '@/data/contact/contactHero';
import styles from './ContactHero.module.css';
import ContactHeroForm from './ContactHeroForm';

const DETAIL_ICONS = {
  mail: '/icons/common/mail.svg',
  phone: '/icons/common/phone.svg',
  location: '/icons/common/location.svg',
  briefcase: '/icons/common/briefcase.svg',
};

// Faint circuit lines with glowing nodes at the side edges (decoration).
// Drawn for the left side; the right side is the same SVG mirrored in CSS.
function Circuit({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 220 560" fill="none" aria-hidden="true">
      <g stroke="rgba(140, 198, 63, 0.35)" strokeWidth="1">
        <path d="M0 110 H70 L100 140 H210" />
        <path d="M0 190 H40 L70 160" />
        <path d="M0 420 H90 L120 390 H200" />
        <path d="M0 500 H60" />
      </g>
      <g fill="#8cc63f">
        <circle cx="210" cy="140" r="3.5" />
        <circle cx="70" cy="160" r="3" />
        <circle cx="200" cy="390" r="3.5" />
        <circle cx="60" cy="500" r="3" />
      </g>
    </svg>
  );
}

// Contact page hero: big faded "CONTACT" behind, form on the left, details on the right
export default function ContactHero() {
  const { watermark, badge, headingStart, headingHighlight, description, details, form } = contactHero;

  return (
    <section id="contact" className={styles.section}>
      <span className={styles.glow} aria-hidden="true" />
      <span className={styles.watermark} aria-hidden="true">
        {watermark}
      </span>
      <Circuit className={styles.circuitLeft} />
      <Circuit className={styles.circuitRight} />

      <div className={styles.inner}>
        <div className={styles.formColumn}>
          <ContactHeroForm form={form} />
        </div>

        <div className={styles.info}>
          <Badge>{badge}</Badge>
          <h1 className={styles.heading}>
            {headingStart} <span className={styles.accent}>{headingHighlight}</span>
          </h1>
          <p className={styles.description}>{description}</p>

          <ul className={styles.details}>
            {details.map((detail) => (
              <li key={detail.label} className={styles.detail}>
                <span className={styles.icon}>
                  <Image src={DETAIL_ICONS[detail.icon]} alt="" width={18} height={18} />
                </span>
                <span className={styles.detailText}>
                  <span className={styles.detailLabel}>{detail.label}</span>
                  {detail.href ? (
                    <Link href={detail.href} className={styles.detailValue}>
                      {detail.value}
                    </Link>
                  ) : (
                    <span className={styles.detailValue}>{detail.value}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
