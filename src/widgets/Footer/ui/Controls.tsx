'use client';

import { useTheme } from '@/shared/hooks';
import { useScrollTop } from '@/shared/hooks';
import { SunIcon, MoonIcon, ArrowUpIcon } from '@/shared/ui/icons';
import classNames from 'classnames';
import styles from './Controls.module.scss';

export const Controls = () => {
  const { isDark, toggleTheme } = useTheme();
  const { isVisible, scrollToTop } = useScrollTop();

  return (
    <div className={classNames(styles.wrapper, { [styles.wrapperDark]: isDark })}>
      {/* Theme toggle — показываем луну на светлой, солнце на тёмной */}
      <button
        onClick={toggleTheme}
        aria-label={isDark ? 'Включить светлую тему' : 'Включить тёмную тему'}
        className={styles.button}
      >
        <span className={classNames(styles.iconWrap, { [styles.hidden]: isDark })}>
          <MoonIcon size={18} />
        </span>
        <span className={classNames(styles.iconWrap, { [styles.hidden]: !isDark })}>
          <SunIcon size={18} />
        </span>
      </button>

      <span className={styles.divider} />

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        aria-label='Наверх'
        className={classNames(styles.button, styles.scrollBtn, {
          [styles.scrollBtnVisible]: isVisible,
        })}
      >
        <ArrowUpIcon size={18} />
      </button>
    </div>
  );
};