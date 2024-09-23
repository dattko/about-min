import React from 'react';
import styles from './Section.module.scss';

const MainSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionContainer}>
        <div>메인 섹션</div>
      </div>
    </section>
  );
}