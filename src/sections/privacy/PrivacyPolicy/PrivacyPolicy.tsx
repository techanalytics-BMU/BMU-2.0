import { privacyPolicy } from '@/data/privacy/privacyPolicy';
import type { PrivacyBlock } from '@/types/privacy';
import styles from './PrivacyPolicy.module.css';

function Block({ block }: { block: PrivacyBlock }) {
  if (block.type === 'p') return <p className={styles.text}>{block.text}</p>;
  return (
    <ul className={styles.list}>
      {block.items.map((item) => (
        <li key={item.text}>
          {item.term && <strong className={styles.term}>{item.term}: </strong>}
          {item.text}
        </li>
      ))}
    </ul>
  );
}

// Privacy Policy: heading and date → a contents list (sticky beside the text on wide screens,
// above it on phones) → the numbered sections → company, website and a closing line.
export default function PrivacyPolicy() {
  const { heading, updated, company, website, sections, closing } = privacyPolicy;

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.updated}>Last updated: {updated}</p>
      </header>

      <div className={styles.layout}>
        <nav aria-label="Contents" className={styles.contents}>
          <p className={styles.contentsTitle}>Contents</p>
          <ol className={styles.contentsList}>
            {sections.map((item, i) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>
                  <span className={styles.number}>{String(i + 1).padStart(2, '0')}</span>
                  {item.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <article className={styles.article}>
          {sections.map((item, i) => (
            <section key={item.id} id={item.id} className={styles.part}>
              <h2 className={styles.partTitle}>
                <span className={styles.number}>{i + 1}.</span> {item.title}
              </h2>
              {item.blocks.map((block, j) => (
                <Block key={j} block={block} />
              ))}
            </section>
          ))}

          <footer className={styles.sign}>
            <p className={styles.company}>{company}</p>
            <p className={styles.text}>
              Website:{' '}
              <a href={website.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
                {website.label}
              </a>
            </p>
            <p className={styles.closing}>{closing}</p>
          </footer>
        </article>
      </div>
    </section>
  );
}
