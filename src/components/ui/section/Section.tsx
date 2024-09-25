'use client';
import React, { useRef, useEffect } from 'react';
import styles from './Section.module.scss';
import { useScroll } from '@/contexts/ScrollContext';

interface SectionProps {
  title?: string;
  children: React.ReactNode;
  main?: boolean;
  col?: boolean;
  black?: boolean;
  style?: React.CSSProperties;
  backColor?: string;
  id: string;
}

const Section: React.FC<SectionProps> = ({ title, children, main, col, black, style, backColor, id }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { addRef } = useScroll();

  useEffect(() => {
    addRef(id, sectionRef);
  }, [id, addRef]);

  return (
    <section 
      ref={sectionRef}
      style={backColor ? { backgroundColor: backColor, ...style } : style}
      className={`
        ${main ? styles.main__section : ''} 
        ${styles.section} ${black ? styles.section__black : ''}
      `}
    >
      <div className={styles.section__container}>
        {title && <span className={styles.section__title}>{title}</span>}
        <div className={`${col ? styles.content__col : ''} ${styles.content}`}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;