import styles from './AboutRevealText.module.css';

type Props = {
  text: string; // words between *asterisks* are highlighted in lime
  className?: string;
};

// Split into words, noting which fall inside *…* (the asterisks themselves are dropped)
const parse = (text: string) => {
  let inside = false;
  return text.split(' ').map((raw) => {
    let word = raw;
    if (word.startsWith('*')) {
      inside = true;
      word = word.slice(1);
    }
    const closes = word.includes('*');
    word = word.replace('*', '');
    const highlight = inside;
    if (closes) inside = false;
    return { word, highlight };
  });
};

// A statement whose words light up one after another – from grey to white, or to lime for the
// highlighted ones. How far it has lit up comes from a `--reveal` CSS variable (0 → 1) set by the
// parent section from the scroll.
export default function AboutRevealText({ text, className = '' }: Props) {
  const words = parse(text);

  return (
    <span
      className={`${styles.text} ${className}`}
      style={{ '--n': words.length } as React.CSSProperties}
    >
      {words.map(({ word, highlight }, i) => {
        // inside a highlighted phrase the space goes in with the word, so the underline runs on
        const joined = highlight && words[i + 1]?.highlight;
        return (
          <span key={i}>
            <span
              className={`${styles.word} ${highlight ? styles.highlight : ''}`}
              style={{ '--i': i } as React.CSSProperties}
            >
              {word}
              {joined && ' '}
            </span>
            {!joined && i < words.length - 1 && ' '}
          </span>
        );
      })}
    </span>
  );
}
