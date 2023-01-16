import React from 'react';
import styles from './Skills.module.css';

const skillsInfo = [
  {
    title: 'Frontend',
    src: '/images/frontend.png',
  },
  {
    title: 'Communication',
    src: '/images/communication.png',
  },
  {
    title: 'Version Control',
    src: '/images/version-control.png',
  },
  {
    title: 'Deployment',
    src: '/images/deployment.png',
  },
  {
    title: 'Backend',
    src: '/images/backend.png',
  },
];

export default function Skills({ elementRef }) {
  return (
    <section className={styles.section}>
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
    </section>
  );
}
