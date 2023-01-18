import React from 'react';
import styles from './Archiving.module.css';

export default function Archiving({ elementRef }) {
  return (
    <article ref={elementRef} className={styles.container}>
      <div className={styles.title}>Archiving</div>
      <a className={styles.itemWrap} href="https://www.github.com/wook2onandon">
        <div className={styles.nameWrap}>
          <img className={styles.nameImg} src="/images/github.png" alt="" />
        </div>
        <div className={styles.address}>github.com/wook2onandon</div>
        <div className={styles.textTitle}>
          <b>소스 코드 저장소</b>입니다.
        </div>
        <ul className={styles.textWrap}>
          <li className={styles.text}>
            - 과거 프로젝트, 프로그램, 앱의 소스 코드
          </li>
          <li className={styles.text}>
            - 혼자서 코딩 연습을 위해 끄적이던 소스 코드
          </li>
        </ul>
      </a>
    </article>
  );
}
