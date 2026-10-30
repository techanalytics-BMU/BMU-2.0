import styles from './AuthCard.module.css';

type Props = {
  headingStart: string;
  headingHighlight: string; // in lime
  description: string;
  children: React.ReactNode;
};

// The glass card shared by /login, /signup and /account: heading (last words in lime), a line
// under it, then the page's form or message. Its form styles (fields, button…) are in
// AuthCard.module.css and used by the forms next to it.
export default function AuthCard({ headingStart, headingHighlight, description, children }: Props) {
  return (
    <div className={styles.card}>
      <h1 className={styles.heading}>
        {headingStart} <span className="text-accent">{headingHighlight}</span>
      </h1>
      <p className={styles.description}>{description}</p>
      {children}
    </div>
  );
}
