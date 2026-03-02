import styles from './Actions.module.scss';

interface ActionsProps {
  toggle: () => void;
  isOpen: boolean;
}

export const Actions = ({ toggle, isOpen }: ActionsProps) => {
  return (
    <div className={styles.actions}>
      <button className={styles.button}>
        Контакты
      </button>
      <button
        type="button"
        className={styles.burger}
        onClick={toggle}
        aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <span className={styles.lines} />
      </button>
    </div>
  );
};
