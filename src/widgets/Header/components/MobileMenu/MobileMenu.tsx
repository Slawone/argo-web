import Link from "next/link";
import { LogoIcon } from "@/shared/ui";
import styles from './MobileMenu.module.scss';

interface NavLink {
  href: string;
  label: string;
};

interface MenuProps {
  items: NavLink[];
  close: () => void;
  isOpen: boolean;
};

export const MobileMenu = ({ items, close, isOpen }: MenuProps) => {
  return (
    <div
        className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ''}`}
        onClick={close}
    >
      <aside
        id="mobile-menu"
        className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`}
      >
        <div className={styles.drawerHeader}>
          <Link href="/" className={styles.drawerLogo} onClick={close} aria-label="На главную">
            <LogoIcon className={styles.logo} />
          </Link>

          <button type="button" className={styles.closeBtn} onClick={close} aria-label="Закрыть меню">
            ✕
          </button>
        </div>

        <nav className={styles.nav} aria-label="Мобильная навигация">
          <ul className={styles.list}>
            {items.map((item) => (
              <li key={item.href} className={styles.item}>
                <Link href={item.href} className={styles.link} onClick={close}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
   </div>
  );
};
