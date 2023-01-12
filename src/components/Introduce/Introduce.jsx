import React from 'react';
import styles from './Introduce.module.css';

export default function Introduce() {
  return (
    <div className={styles.container}>
      <img className={styles.mainBg} src="/images/work.jpg" alt="" />
      <div className={styles.textBox}>
        <h2>김종욱</h2>
        <h2>웹 프론트엔드 포트폴리오</h2>
        <div></div>
        <p>
          안녕하세요.
          <br />
          항상 노력하는 웹 프론트엔드 개발자입니다.
          <br />
          꼼꼼한 성격과 끈기, 누구나와 원활한 의사소통을 할 수 있는것이 저의
          장점입니다.
        </p>
      </div>
    </div>
  );
}
