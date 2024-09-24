import React from 'react';
import styles from './Content.module.scss';
import { skills } from '@/data/contents/skills';
const SkillsContent = () => {
  return (
    <div className={styles.skills__wrap}>
          {skills.map((skill) => (
            <div key={skill.id} className={styles.skills__item}>
              <div className={styles.skills__img}>
                {skill.url === '' ? null 
                 : <img src={skill.url} alt={skill.name} />}
              </div>
              <span className={styles.skills__title}>{skill.name}</span>
            </div>
          ))}
    </div>
  );
}

export default SkillsContent;