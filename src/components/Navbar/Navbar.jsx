import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar({ goodsTabs }) {
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setScrollTop(true);
    } else {
      setScrollTop(false);
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className={`${styles.container} ${scrollTop && styles.active}`}>
        <span className={styles.logo} onClick={handleScrollTop}>
          WOOK's Portfolio
        </span>
        <ul className={styles.menuList}>
          {Array.from(goodsTabs).map((tab, index) => {
            // console.log(tab);
            return (
              <li
                className={styles.menu}
                onClick={tab.onMoveToElement}
                key={index}
              >
                {tab.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={`${styles.upBtn} ${scrollTop && styles.activeUpBtn}`}
        onClick={handleScrollTop}
      ></div>
    </>
  );
}
