import React from 'react';
import { skillsInfo } from '../../assets/projectData';
import Title from '../Title/Title';
import styles from './Skills.module.css';

export default function Skills({ elementRef }) {
  return (
    <article className={styles.section}>
      <div className={styles.container} ref={elementRef}>
        <Title font="SKILLS" lineColor="#000" color="#000" />
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
