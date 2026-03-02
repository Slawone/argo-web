'use client';

import { MaxIcon } from "@/shared/ui";
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <div className={styles.company}>
            <h4 className={styles.title}>Компания</h4>
            <ul className={styles.list}>
              <li className={styles.item}>
                <a className={styles.link} href="mailto:info@argo.tech">E-mail: info@argo.tech</a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href="tel:+74994300054">8 (499) 430 00 54</a>
              </li>
              <li className={styles.item}>
                Юридический адрес: 111250, город Москва, проезд Завода Серп и Молот, дом 6, корпус 1, эт. 7, комн. 709
              </li>
              <li className={styles.item}>
                ИНН: 5010052504
              </li>
              <li className={styles.item}>
                ООО «АРГО ТЕХНОЛОДЖИ ИСТ»
              </li>
            </ul>
          </div>
          <div className={styles.social}>
            <h4 className={styles.title}>Социальные сети</h4>
            <ul className={styles.list}>
              <li className={styles.item}>
                <a className={styles.link} href="mailto: info@argo.tech">
                  <MaxIcon className={styles.icon} />
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href="https://companies.rbc.ru/id/1165007052583-argotech/" target="_blank">РБК Компании</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
