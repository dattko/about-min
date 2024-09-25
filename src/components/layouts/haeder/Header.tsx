import React from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import { menuItems } from '@/data/menu/menuItems';

const Header = () => {


  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <span className={styles.header__logo}>About Min</span>
        <nav className={styles.header__nav}>
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link 
                href={`#${item.link}`} 
              >
                {item.name}  
              </Link>
            </li>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;