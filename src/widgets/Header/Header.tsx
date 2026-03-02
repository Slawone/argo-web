'use client';

import { useState } from 'react';
import { useEffect } from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { LogoIcon } from "@/shared/ui";
import { Menu } from './components';
import { MobileMenu } from './components';
import { Actions } from './components';
import { NAV_LINKS } from './config';
import styles from './Header.module.scss';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.wrapper}>
        <Link href={'/'}>
          <LogoIcon className={styles.logo} />
        </Link>

        <Menu items={NAV_LINKS} isActive={isActive} />
        <Actions toggle={toggle} isOpen={isOpen}/>
      </div>
      <MobileMenu items={NAV_LINKS} close={close} isOpen={isOpen} />
    </header>
  );
};
