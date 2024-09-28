'use client';
import React from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import { menuItems } from '@/data/menu/menuItems';
import { useScroll } from '@/contexts/ScrollContext';
import { usePathname } from 'next/navigation';
import { Home } from 'lucide-react';
const Header = () => {
  const { scrollTo } = useScroll();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    scrollTo(id);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <span className={styles.header__logo}>AboutMin</span>
        <nav className={styles.header__nav}>
            {pathname === '/' ? (
              menuItems.map((item) => (
                <li key={item.id}>
                  <button onClick={(e) => handleClick(e , item.link)}>
                    {item.name}  
                  </button>
                </li>
              )) 
            ) : (
              <li>
                <Link href='/'>
                  홈
                </Link>
              </li>
            ) 
            }
        </nav>
      </div>
    </header>
  );
}

export default Header;