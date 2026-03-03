import styles from './InfoGrid.module.scss';

interface Card {
  title: string;
  text: string;
}

interface InfoGridProps {
  items: Card[];
}

export const InfoGrid = ({items}: InfoGridProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        {items.map(item => (
          <article key={item.title} className={styles.article}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
