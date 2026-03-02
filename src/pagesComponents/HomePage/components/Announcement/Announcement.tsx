import { MaxIcon } from '@/shared/ui';
import styles from './Announcement.module.scss';

export const Announcement = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.accent}>New</div>
        <div className={styles.info}>
          <p className={styles.text}>Мы обновляем сайт. Следите за новостями:</p>
          <a className={styles.link} href="#!">
            <MaxIcon className={styles.icon} />
          </a>
        </div>
      </div>
    </section>
  );
};
