import React from 'react';
import Slide from '../Slide/Slide';
import styles from './Projects.module.css';

export default function Projects({ elementRef }) {
  return (
    <div ref={elementRef} className={styles.container}>
      <div className={styles.title}>Project</div>
      <ul className={styles.listWrap}>
        <li className={styles.list}>
          <div className={styles.projectTitleWrap}>
            <h2 className={styles.projectTitle}>포트폴리오 웹사이트</h2>
            <p className={styles.projectSubTitle}>
              2023.01 (1人 개인 프로젝트)
            </p>
          </div>
          <div className={styles.projectItemWrap}>
            <div className={styles.projectSliderWrap}>슬라이더</div>
            {/* <Slide /> */}
            <div className={styles.projectBox}>
              <p className={styles.projectTextDetail}>
                포트폴리오 용도로 제작한 웹사이트입니다. 지금 보고 있는 바로 이
                <br />
                웹사이트에 해당합니다. 이미 순수 React로 개발을 완료한
                <br />
                프로젝트였지만, Next.js의 학습을 위해 이를 Next.js로 다시
                <br />
                개발하였습니다. 그 과정에서 서버 사이드 렌더링을 함께 지원하는
                <br />
                Next.js의 위대함을 느낄 수 있었습니다. 또한, Vercel을 이용하여
                <br />
                정적 웹사이트의 Lean한 배포도 경험해볼 수 있었습니다.
              </p>
              <button className={styles.btn}>자세히보기</button>
              <div className={styles.hr} />
              <ul className={styles.projectDetailList}>
                <li className={styles.projectDetailWrap}>
                  <div className={styles.projectDetail}>주요기능</div>
                  <div className={styles.projectDetailText}>
                    간단한 자기소개, 인적 사항, 기술 스택, GitHub 및 티스토리
                    링크, 프로젝트 경험, 업무 경력
                  </div>
                </li>
                <li className={styles.projectDetailWrap}>
                  <div className={styles.projectDetail}>GitHub</div>
                  <div className={styles.projectDetailText}>
                    github.com/wook2onandon/my-page
                  </div>
                </li>
                <li className={styles.projectDetailWrap}>
                  <div className={styles.projectDetail}>url</div>
                  <div className={styles.projectDetailText}>
                    wook-portfolio.com
                  </div>
                </li>
                <li className={styles.projectDetailWrap}>
                  <div className={styles.projectDetail}>Frontend</div>
                  <div className={styles.projectDetailText}>
                    react, module css, react-slick
                  </div>
                </li>
                <li className={styles.projectDetailWrap}>
                  <div className={styles.projectDetail}>backend</div>
                  <div className={styles.projectDetailText}> 없음</div>
                </li>
                <li className={styles.projectDetailWrap}>
                  <div className={styles.projectDetail}>database</div>
                  <div className={styles.projectDetailText}>없음</div>
                </li>
                <li className={styles.projectDetailWrap}>
                  <div className={styles.projectDetail}>Deployment</div>
                  <div className={styles.projectDetailText}>Netlify</div>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
