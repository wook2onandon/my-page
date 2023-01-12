import React from 'react';
import styles from './Projects.module.css';

export default function Projects({ elementRef }) {
  return (
    <div ref={elementRef} className={styles.container}>
      <div className={styles.title}>Project</div>
      <ul className={styles.listWrap}>
        <li className={styles.list}>
          <div className={styles.projectTitleWrap}>
            <h2 className={styles.projectTitle}>title</h2>
            <p className={styles.projectSubTitle}>subtitle</p>
          </div>
          <div className={styles.projectItemWrap}>
            <div className={styles.projectSliderWrap}>슬라이더</div>
            <div className={styles.projectBox}>
              <p className={styles.projectTextDetail}>프로젝트 내용</p>
              <ul className={styles.projectDetailList}>
                <li className={styles.projectDetailWrap}>
                  <div className={styles.projectDetail}>주요기능</div>
                  <div className={styles.projectDetailText}>기능내용</div>
                </li>
                <li className={styles.projectDetailWrap}>
                  <div className={styles.projectDetail}>GitHub</div>
                  <div className={styles.projectDetailText}>주소</div>
                </li>
                <li className={styles.projectDetailWrap}>
                  <div className={styles.projectDetail}>url</div>
                  <div className={styles.projectDetailText}>주소</div>
                </li>
                <li className={styles.projectDetailWrap}>
                  <div className={styles.projectDetail}>Frontend</div>
                  <div className={styles.projectDetailText}>기술스택</div>
                </li>
                <li className={styles.projectDetailWrap}>
                  <div className={styles.projectDetail}>backend</div>
                  <div className={styles.projectDetailText}>기술스택</div>
                </li>
                <li className={styles.projectDetailWrap}>
                  <div className={styles.projectDetail}>database</div>
                  <div className={styles.projectDetailText}>기술스택</div>
                </li>
                <li className={styles.projectDetailWrap}>
                  <div className={styles.projectDetail}>Deployment</div>
                  <div className={styles.projectDetailText}>기술스택</div>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
