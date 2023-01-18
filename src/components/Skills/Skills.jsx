import React from 'react';
import { skillsInfo } from '../../assets/projectData';
import styles from './Skills.module.css';

export default function Skills({ elementRef }) {
  return (
    <article className={styles.section}>
      <div className={styles.container} ref={elementRef}>
        <div className={styles.title}>SKILLS</div>
        <div className={styles.listContainer}>
          {skillsInfo.map((skill, index) => {
            return (
              <div className={styles.listWrap} key={index}>
                <div className={styles.listTitle}>{skill.title}</div>
                <img
                  className={styles.listImg}
                  src={skill.src}
                  alt={skill.title}
                />
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}
