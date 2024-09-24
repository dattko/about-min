import React from 'react';
import styles from './Content.module.scss';
import Link from 'next/link';
import { portfolios } from '@/data/contents/portfolio';
const PortfolioContent = () => {

  return (
    <>
      <div className={styles.portfolio}>
          <Link className={styles.portfolio__git} href='https://github.com/dattko' target='_blank'>Go to git</Link>
        <span className={styles.portfolio__comment}>
        Turning Ideas into Code,<br /> Code into Reality
        {/* 아이디어를 코드로, 코드를 현실로 */}
        </span>
      </div>
      <div className={styles.portfolio}>
        {portfolios.map((portfolio) => (
          <div key={portfolio.id} className={styles.portfolio__item}>
            <div className={styles.portfolio__image}>
              {portfolio.link === '' ? null 
               : <img src={portfolio.image} alt={portfolio.title} />}
            </div>
            <span className={styles.portfolio__title}>{portfolio.title}</span>
            <span className={styles.portfolio__subtitle}>{portfolio.description}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default PortfolioContent;