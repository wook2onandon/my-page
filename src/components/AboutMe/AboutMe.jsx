import React from 'react';
import styles from './AboutMe.module.css';
import {
  BsFillPersonFill,
  BsFillCalendarFill,
  BsTelephoneFill,
  BsFillPencilFill,
} from 'react-icons/bs';
import { IoLocationSharp } from 'react-icons/io5';
import { IoMdMail } from 'react-icons/io';
import Title from '../Title/Title';

export default function AboutMe({ elementRef }) {
  return (
    <article className={styles.container} ref={elementRef}>
      <Title font="ABOUT ME" lineColor="#cccccc" color="#000" />
      <ul className={styles.menuList}>
        <li className={styles.menu}>
          <div className={styles.menuBox}>
            <span className={styles.menuIconWrap}>
              <BsFillPersonFill className={styles.menuIcon} />
            </span>
            <div className={styles.menuItem}>
              <h4 className={styles.menuTitle}>이름</h4>
              <p className={styles.menuText}>김종욱</p>
            </div>
          </div>
        </li>
        <li className={styles.menu}>
          <div className={styles.menuBox}>
            <span className={styles.menuIconWrap}>
              <BsFillCalendarFill className={styles.menuIcon} />
            </span>
            <div className={styles.menuItem}>
              <h4 className={styles.menuTitle}>생년월일</h4>
              <p className={styles.menuText}>92.02.09</p>
            </div>
          </div>
        </li>
        <li className={styles.menu}>
          <div className={styles.menuBox}>
            <span className={styles.menuIconWrap}>
              <IoLocationSharp className={styles.menuIcon} />
            </span>
            <div className={styles.menuItem}>
              <h4 className={styles.menuTitle}>주소지</h4>
              <p className={styles.menuText}>경기도 고양시 일산서구</p>
            </div>
          </div>
        </li>
        <li className={styles.menu}>
          <div className={styles.menuBox}>
            <span className={styles.menuIconWrap}>
              <BsTelephoneFill className={styles.menuIcon} />
            </span>
            <div className={styles.menuItem}>
              <h4 className={styles.menuTitle}>연락처</h4>
              <p className={styles.menuText}>010-6279-6154</p>
            </div>
          </div>
        </li>
        <li className={styles.menu}>
          <div className={styles.menuBox}>
            <span className={styles.menuIconWrap}>
              <IoMdMail className={styles.menuIcon} />
            </span>
            <div className={styles.menuItem}>
              <h4 className={styles.menuTitle}>이메일</h4>
              <p className={styles.menuText}>babyldk@gmail.com</p>
            </div>
          </div>
        </li>
        <li className={styles.menu}>
          <div className={styles.menuBox}>
            <span className={styles.menuIconWrap}>
              <BsFillPencilFill className={styles.menuIcon} />
            </span>
            <div className={styles.menuItem}>
              <h4 className={styles.menuTitle}>학력</h4>
              <p className={styles.menuText}>
                건국대학교 글로컬캠퍼스
                <br />
                (패션디자인학부)
              </p>
            </div>
          </div>
        </li>
      </ul>
    </article>
  );
}
