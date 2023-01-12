import React from 'react';
import styles from './AboutMe.module.css';

export default function AboutMe({ elementRef }) {
  return (
    <div className={styles.container} ref={elementRef}>
      <div className={styles.title}>ABOUT ME</div>
      <ul className={styles.menuList}>
        <li className={styles.menu}>
          <span className={styles.menuIcon}>
            <img src="" alt="" />
          </span>
          <div className={styles.menuItem}>
            <h4 className={styles.menuTitle}>이름</h4>
            <p className={styles.menuText}>김종욱</p>
          </div>
        </li>
        <li className={styles.menu}>
          <span className={styles.menuIcon}>
            <img src="" alt="" />
          </span>
          <div className={styles.menuItem}>
            <h4 className={styles.menuTitle}>생년월일</h4>
            <p className={styles.menuText}>92.02.09</p>
          </div>
        </li>
        <li className={styles.menu}>
          <span className={styles.menuIcon}>
            <img src="" alt="" />
          </span>
          <div className={styles.menuItem}>
            <h4 className={styles.menuTitle}>주소지</h4>
            <p className={styles.menuText}>경기도 고양시 일산서구</p>
          </div>
        </li>
        <li className={styles.menu}>
          <span className={styles.menuIcon}>
            <img src="" alt="" />
          </span>
          <div className={styles.menuItem}>
            <h4 className={styles.menuTitle}>연락처</h4>
            <p className={styles.menuText}>010-6279-6154</p>
          </div>
        </li>
        <li className={styles.menu}>
          <span className={styles.menuIcon}>
            <img src="" alt="" />
          </span>
          <div className={styles.menuItem}>
            <h4 className={styles.menuTitle}>이메일</h4>
            <p className={styles.menuText}>babyldk@gmail.com</p>
          </div>
        </li>
        <li className={styles.menu}>
          <span className={styles.menuIcon}>
            <img src="" alt="" />
          </span>
          <div className={styles.menuItem}>
            <h4 className={styles.menuTitle}>학력</h4>
            <p className={styles.menuText}>
              건국대학교 글로컬캠퍼스(패션디자인학부)
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
