import React from 'react';
import { projectData } from '../../assets/projectData';
import Slide from '../Slide/Slide';
import styles from './Projects.module.css';

export default function Projects({ elementRef }) {
  return (
    <article ref={elementRef} className={styles.container}>
      <div className={styles.title}>Project</div>
      <ul className={styles.listWrap}>
        {projectData.map((data) => {
          return (
            <li className={styles.list} key={data.id}>
              <div className={styles.projectTitleWrap}>
                <h2 className={styles.projectTitle}>{data.title}</h2>
                <p className={styles.projectSubTitle}>{data.subTitle}</p>
              </div>
              <div className={styles.projectItemWrap}>
                <Slide slider={data.images} />
                <div className={styles.projectBox}>
                  <p className={styles.projectTextDetail}>{data.detail}</p>
                  <button className={styles.btn}>자세히보기</button>
                  <div className={styles.hr} />
                  <ul className={styles.projectDetailList}>
                    <li className={styles.projectDetailWrap}>
                      <div className={styles.projectDetail}>주요기능</div>
                      <div className={styles.projectDetailText}>
                        {data.features}
                      </div>
                    </li>
                    <li className={styles.projectDetailWrap}>
                      <div className={styles.projectDetail}>GitHub</div>
                      <div className={styles.projectDetailText}>
                        <a href={data.github}>{data.github}</a>
                      </div>
                    </li>
                    <li className={styles.projectDetailWrap}>
                      <div className={styles.projectDetail}>url</div>
                      <div className={styles.projectDetailText}>
                        <a href={data.url}>{data.url}</a>
                      </div>
                    </li>
                    <li className={styles.projectDetailWrap}>
                      <div className={styles.projectDetail}>Frontend</div>
                      <div className={styles.projectDetailText}>
                        {data.frontend}
                      </div>
                    </li>
                    {data.backend && (
                      <li className={styles.projectDetailWrap}>
                        <div className={styles.projectDetail}>Backend</div>
                        <div className={styles.projectDetailText}>
                          {data.backend}
                        </div>
                      </li>
                    )}
                    {data.database && (
                      <li className={styles.projectDetailWrap}>
                        <div className={styles.projectDetail}>Database</div>
                        <div className={styles.projectDetailText}>
                          {data.database}
                        </div>
                      </li>
                    )}
                    {data.deployment && (
                      <li className={styles.projectDetailWrap}>
                        <div className={styles.projectDetail}>Deployment</div>
                        <div className={styles.projectDetailText}>
                          {data.deployment}
                        </div>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
