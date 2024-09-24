import React from 'react';
import Image from 'next/image';
import styles from './Content.module.scss';

const IntroContent = () => {
  return (
    <>
      <div className={styles.intro}>
        <span className={styles.intro__title}>안녕하세요,</span>
        <span className={styles.intro__subtitle}>도전하는 프론트엔드 개발자 장황민 입니다.</span>
        <span className={styles.intro__text}>사용자 경험을 최우선으로 생각하며,</span>
        <span className={styles.intro__text}> 최신 기술을 지속적으로 학습하고 있습니다.</span>
        <span className={styles.intro__text}>함께 성장할 수 있는 기회를 기대합니다.</span>
      </div>
      <div className={styles.image__wrap}>
        {/* 이미지가 필요하다면 여기에 추가하세요 */}
      </div>
    </>
  );
};

export default IntroContent;
