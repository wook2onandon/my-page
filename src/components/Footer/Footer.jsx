import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <a href="">
            <img src="" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="" alt="" />
          </a>
        </li>
      </ul>
      <div className={styles.text}>
        © 2023. Kim Jong Wook. All rights reserved.
      </div>
    </div>
  );
}
