import React from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import { menuItems } from '@/data/menu/menuItems';

const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>Min</div>
        <ul className={styles.headerUl}>
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link href={`/${item.link}`}>
                {item.name}  
              </Link>
            </li>
            ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;