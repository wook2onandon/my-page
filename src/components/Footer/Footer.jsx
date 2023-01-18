import React from 'react';
import styles from './Footer.module.css';
import { BsGithub, BsInstagram, BsFacebook } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <ul className={styles.listWrap}>
        <li className={styles.list}>
          <a
            className={styles.iconWrap}
            href="https://github.com/wook2onandon/"
          >
            <BsGithub className={styles.icon} />
          </a>
        </li>
        <li className={styles.list}>
          <a
            className={styles.iconWrap}
            href="https://www.instagram.com/wook2onandon"
          >
            <BsInstagram className={styles.icon} />
          </a>
        </li>
        <li className={styles.list}>
          <a
            className={styles.iconWrap}
            href="https://www.facebook.com/wook2onandon"
          >
            <BsFacebook className={styles.icon} />
          </a>
        </li>
      </ul>
      <div className={styles.text}>
        © 2023. Kim Jong Wook. All rights reserved.
      </div>
    </footer>
  );
}
