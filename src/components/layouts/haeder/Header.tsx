'use client';
import React from 'react';
import styles from './Header.module.scss';
import { menuItems } from '@/data/menu/menuItems';
import { useScroll } from '@/contexts/ScrollContext';

const Header = () => {
  const { scrollTo } = useScroll();

  const handleClick = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    scrollTo(id);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <span className={styles.header__logo}>About Min</span>
        <nav className={styles.header__nav}>
          {menuItems.map((item) => (
            <li key={item.id}>
              <button onClick={(e) => handleClick(e , item.link)}>
                {item.name}  
              </button>
            </li>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;