import styles from './Slogan.module.scss';

interface SloganProps {
  text: string;
}

export const Slogan = ({text}: SloganProps) => {
  const words = text.split(' ');
  const firstWord = words[0];
  const restOfText = words.slice(1).join(' ');

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <p className={styles.text}>
          <span className={styles.accent}>{firstWord} </span>
          {restOfText && ' ' + restOfText}
        </p>
      </div>
    </section>
  );
};
