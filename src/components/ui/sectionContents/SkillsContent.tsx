'use client';
import React, { useState, useRef, useEffect } from 'react';
import styles from './Content.module.scss';
import { skills } from '@/data/contents/skills';

const SkillsContent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const basicSkills = skills.filter(skill => skill.type === 'basic');
  const additionalSkills = skills.filter(skill => skill.type === 'additional');

  return (
      <div ref={containerRef} className={styles.skills__wrap}>
        <div className={styles.skills__type}>
          {basicSkills.map((skill) => (
            <div key={skill.id} className={styles.skills__item}>
              {skill.percent && (
                <div className={styles.skills__percent}>
                  <div
                    className={`${styles.skills__percentBar} ${isVisible ? styles.animate : ''}`}
                    style={{ 
                      width: isVisible ? `${skill.percent}%` : '0%',
                    }}
                  ></div>
                </div>
              )}
              <div className={styles.skills__img}>
                {skill.url && <img src={skill.url} alt={skill.name} />}
              </div>
              <span className={styles.skills__title}>{skill.name}</span>
            </div>
          ))}
        </div>
        <div className={styles.skills__type}>
          {additionalSkills.map((skill) => (
            <div key={skill.id} className={styles.skills__item}>
              <div className={styles.skills__img}>
                {skill.url && <img src={skill.url} alt={skill.name} />}
              </div>
              <span className={styles.skills__title}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
  );
}

export default SkillsContent;
