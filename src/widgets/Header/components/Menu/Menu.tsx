import Link from "next/link";
import styles from './Menu.module.scss';

interface NavLink {
  href: string;
  label: string;
};

interface MenuProps {
  items: NavLink[];
  isActive: (href: string) => boolean;
};

export const Menu = ({ items, isActive }: MenuProps) => {
  return (
    <nav className={styles.nav} aria-label="Основная навигация">
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.href} className={styles.item}>
            <Link href={item.href} className={`${styles.link} ${
            isActive(item.href) ? styles.active : ''
          }`}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
