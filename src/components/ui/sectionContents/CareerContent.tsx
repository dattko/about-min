import React from 'react';
import styles from './Content.module.scss';
import Link from 'next/link';
import { projects } from '@/data/contents/projects';



interface Props {
  text: string;
}
const CareerContent = () => {

  const BoldText: React.FC<Props> = ({text} ) => {
    return <span className={styles.selmiBold}>{text}</span>;
  }


  return (
  <>
    <div className={styles.career__card}>
      <div className={styles.career__company}>
        <div className={styles.career__img}>
          <img src="https://www.bizbee.co.kr/images/pc/logo.svg" alt="비즈비" />
        </div>
        <Link href={'https://www.bizbee.co.kr/pages/intro.html'} target="_blank" className={styles.career__company__title}>(주) 비즈비</Link>
        <span className={styles.career__company__date}>2022.04 - 2024.06</span>
      </div>
      <div className={styles.career__line}></div>
      <div className={styles.career__info}>

        <div className={styles.career__info__intro}>
          <span>비즈비는 디지털 마케팅과 IT 솔루션을 제공하는 <BoldText text='종합적인 서비스 플랫폼'/> 입니다.</span>
          <span>
          기본적으로 <BoldText text='UI/UX 개발' />을 주로 담당하며, 다양한 프레임워크(<BoldText text='React, Vue, Angular, React Native' />)를 활용한 웹 및 모바일 애플리케이션 개발을 수행해왔습니다. 특히 신규 프로젝트에서 <BoldText text='기술 스택 선정 및 구현' />을 주도하며 팀의 기술 역량 강화에 기여했습니다. 또한 <BoldText text='UI/UX 개선 및 성능 최적화' />와 관련된 복잡한 문제에 대한 기술적 해결책을 제시하여 프로젝트의 품질을 향상시켰습니다.
          </span>
          <span>
          다양한 <BoldText text='라이브러리' />를 효과적으로 활용해 프로젝트의 기능성과 사용자 경험을 크게 개선하였고, 이를 통해 클라이언트의 높은 만족도를 이끌어냈습니다. 마지막으로, <BoldText text='최신 웹 기술 트렌드' />를 지속적으로 연구하고 적용하여 프로젝트의 기술적 경쟁력을 유지하는 데 주력하고 있습니다.
          </span>
        </div>
        <div className={styles.career__info__projects}>
          {projects.map((project) => (
          <div key={project.id} className={styles.project}>
            <div className={styles.project__header}>
              <span className={styles.project__title}>{project.title}</span>
              <span className={styles.project__date}>{project.period}</span>
            </div>
            <div className={styles.project__detail}>
              {project.details.map((detail) => (
                <span key={project.id}>• {detail}</span>
              ))}
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  </>
  );
}


export default CareerContent;