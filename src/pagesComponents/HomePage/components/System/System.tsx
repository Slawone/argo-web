import { Monitoring } from '@/shared/ui';
import { Storage } from '@/shared/ui';
import styles from './System.module.scss';

export const System = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.info}>
            <p className={styles.supText}>
              Широкий портфель
            </p>
            <p className={styles.text}>
              <span className='accent-text'>Экосистема</span> ИТ-решений для хранения, защиты
              и управления данными. Продукты <span className='accent-text'>ARGO.TECH</span> создаются командой, которая с 2016 года работает с инфраструктурой, понимает задачи инженеров
              и помогает повышать отказоустойчивость
              и стабильность систем.
            </p>
          </div>
          <Monitoring className={styles.img} />
        </div>
        <div className={styles.right}>
          <div className={styles.info}>
            <p className={styles.supText}>
              Безопасная разработка и защита данных
            </p>
            <p className={styles.text}>
              <span className='accent-text'>Более 10</span> лет создаём средства информационной безопасности. ARGO.TECH лицензирована ФСТЭК России (Л050-00107-00/00581308 от 13.08.2021), что подтверждает соответствие требованиям.
            </p>
          </div>
          <Storage className={styles.img} />
        </div>
      </div>
    </section>
  )
};
