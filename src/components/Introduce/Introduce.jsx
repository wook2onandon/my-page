import React, { useEffect, useState } from 'react';
import styles from './Introduce.module.css';

export default function Introduce() {
  const [blogTitle, setBlogTitle] = useState('');
  const [count, setCount] = useState(0);
  const completionWord = '웹 프론트엔드 포트폴리오';

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (count >= completionWord.length) {
        clearInterval(typingInterval);
      } else {
        setBlogTitle((prevTitleValue) => {
          let result = prevTitleValue
            ? prevTitleValue + completionWord[count]
            : completionWord[0];
          setCount(count + 1);
          return result;
        });
      }
    }, 200);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return (
    <article className={styles.container}>
      <img className={styles.mainBg} src="/images/work.jpg" alt="" />
      <div className={styles.textBox}>
        <h2 className={styles.title}>- 김종욱 -</h2>
        <h2 className={styles.subTitle}>{blogTitle}</h2>
        {/* <h2 className={styles.subTitle}>웹 프론트엔드 포트폴리오</h2> */}
        <div className={styles.hr} />
        <p className={styles.text}>
          안녕하세요.
          <br />
          항상 도전하는 웹 프론트엔드 개발자입니다.
          <br />
          꼼꼼한 성격과 끈기, 누구나와 원활한 의사소통을 할 수 있는것이 저의
          장점입니다.
        </p>
      </div>
    </article>
  );
}
