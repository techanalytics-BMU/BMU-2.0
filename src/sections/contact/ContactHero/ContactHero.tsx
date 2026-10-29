import Badge from '@/components/ui/Badge/Badge';
import { contactHero } from '@/data/contact/contactHero';
import type { ContactHeroContent } from '@/types/contact';
import styles from './ContactHero.module.css';
import ContactHeroForm from './ContactHeroForm';
import ContactMobileBar from './ContactMobileBar';

// Line icons for the steps (24 × 24, drawn in a lime stroke)
const STEP_ICONS: Record<ContactHeroContent['nextSteps'][number]['icon'], React.ReactNode> = {
  // a chat bubble with a reply in it
  reply: (
    <>
      <path d="M4 5.5h16v10H9.5L5 19.5v-4H4z" />
      <path d="M8.5 9.5h7M8.5 12.5h4.5" />
    </>
  ),
  // a magnifier over a rising line
  audit: (
    <>
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="m15 15 4.5 4.5" />
      <path d="m7.5 12 2-2 1.5 1.5 2.5-3" />
    </>
  ),
  // a page with a tick
  plan: (
    <>
      <path d="M6 3.5h8.5L18 7v13.5H6z" />
      <path d="M14 3.5V7.5h4" />
      <path d="m9 14 2 2 4-4.5" />
    </>
  ),
};

// Contact page. The first screen is just the form ("Let's have a coffee."): a glass card in the
// middle, with a fine beam of light falling through it onto a planet horizon at the bottom.
// Below: what happens next – three step cards, with a glow travelling through the gaps between
// them. On phones a bar with WhatsApp / the form stays at the bottom once it's scrolled past.
export default function ContactHero() {
  const { headingStart, headingHighlight, description, form, next, nextSteps, mobileBar } =
    contactHero;

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.stage}>
        <span className={styles.beam} aria-hidden="true" />
        <span className={styles.horizon} aria-hidden="true" />
        <span className={styles.flare} aria-hidden="true" />

        <div id="contact-form-area" className={styles.cardArea}>
          <ContactHeroForm form={form} nextSteps={nextSteps}>
            <h1 className={styles.heading}>
              <span className={styles.line}>{headingStart}</span>{' '}
              <span className="text-accent">{headingHighlight}</span>
            </h1>
            <p className={styles.description}>{description}</p>
          </ContactHeroForm>
        </div>
      </div>

      <div className={styles.next}>
        <div className={styles.nextHeader}>
          <Badge>{next.badge}</Badge>
          <h2 className={styles.nextHeading}>
            <span className={styles.line}>{next.heading}</span>
            <span className="text-accent">{next.highlight}</span>
          </h2>
        </div>

        <ol className={styles.steps}>
          {nextSteps.map((step, i) => (
            <li key={step.title} className={styles.step}>
              <div className={styles.stepTop}>
                <span className={styles.stepIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22">
                    {STEP_ICONS[step.icon]}
                  </svg>
                </span>
                <span className={styles.stepNumber}>
                  Step <strong>{String(i + 1).padStart(2, '0')}</strong>
                </span>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>

      <ContactMobileBar bar={mobileBar} />
    </section>
  );
}
