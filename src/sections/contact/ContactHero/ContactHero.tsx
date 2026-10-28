import Image from 'next/image';
import Link from 'next/link';
import Badge from '@/components/ui/Badge/Badge';
import { contactHero } from '@/data/contact/contactHero';
import type { ContactDetail } from '@/types/contact';
import styles from './ContactHero.module.css';
import ContactHeroForm from './ContactHeroForm';

const DETAIL_ICONS: Record<ContactDetail['icon'], string> = {
  whatsapp: '/icons/social/whatsapp.svg',
  mail: '/icons/common/mail.svg',
  phone: '/icons/common/phone.svg',
  location: '/icons/common/location.svg',
  briefcase: '/icons/common/briefcase.svg',
};

// A way to reach us: a link when it has one, plain text otherwise
function DetailTile({ detail }: { detail: ContactDetail }) {
  const content = (
    <>
      <span className={styles.tileIcon}>
        <Image src={DETAIL_ICONS[detail.icon]} alt="" width={18} height={18} />
      </span>
      <span className={styles.tileText}>
        <span className={styles.tileLabel}>{detail.label}</span>
        <span className={styles.tileValue}>{detail.value}</span>
      </span>
    </>
  );
  return detail.href ? (
    <Link href={detail.href} className={`${styles.tile} ${styles.tileLink}`}>
      {content}
    </Link>
  ) : (
    <div className={styles.tile}>{content}</div>
  );
}

// Contact page hero. Left: the heading, what happens after you write to us, and the quick ways to
// reach us. Right: the short step-by-step form. On phones: heading → form → the rest.
export default function ContactHero() {
  const {
    badge,
    headingStart,
    headingHighlight,
    description,
    nextStepsLabel,
    nextSteps,
    details,
    careers,
    form,
  } = contactHero;

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <Badge>{badge}</Badge>
          <h1 className={styles.heading}>
            <span className={styles.line}>{headingStart}</span>
            <span className={styles.accent}>{headingHighlight}</span>
          </h1>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.form}>
          <ContactHeroForm form={form} />
        </div>

        <div className={styles.rest}>
          <p className={styles.restLabel}>{nextStepsLabel}</p>
          <ol className={styles.nextSteps}>
            {nextSteps.map((item, i) => (
              <li key={item.title}>
                <span className={styles.stepDot}>{i + 1}</span>
                <span className={styles.stepTitle}>{item.title}</span>
                <span className={styles.stepText}>{item.text}</span>
              </li>
            ))}
          </ol>

          <div className={styles.tiles}>
            {details.map((detail) => (
              <DetailTile key={detail.label} detail={detail} />
            ))}
          </div>

          <p className={styles.careers}>
            <Image src={DETAIL_ICONS[careers.icon]} alt="" width={14} height={14} />
            {careers.label}{' '}
            {careers.href ? (
              <Link href={careers.href}>{careers.value}</Link>
            ) : (
              <span>{careers.value}</span>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
