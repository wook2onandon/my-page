import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { FiArrowUp } from 'react-icons/fi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useMediaQuery } from 'react-responsive';

export default function Navbar({ goodsTabs }) {
  const [scrollTop, setScrollTop] = useState(true);
  const [openHamburger, setOpenHamburger] = useState(false);
  const isDesktop = useMediaQuery({ minDeviceWidth: 1000 });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setScrollTop(false);
    } else {
      setScrollTop(true);
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleHamburger = () => {
    setOpenHamburger((status) => !status);
  };

  return (
    <>
      <div
        className={`${styles.container} ${
          isDesktop && !scrollTop && styles.active
        } ${!isDesktop && styles.active}`}
      >
        <div className={styles.wrap}>
          <span className={styles.logo} onClick={handleScrollTop}>
            WOOK's Portfolio
          </span>
          {isDesktop ? (
            <ul className={styles.menuList}>
              {Array.from(goodsTabs).map((tab, index) => {
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
          ) : (
            <div className={styles.hamburgerWrap}>
              <RxHamburgerMenu
                className={styles.hamburgerBtn}
                onClick={handleHamburger}
              />
            </div>
          )}
        </div>
        {!isDesktop && (
          <ul
            className={`${styles.menuListMobile} ${
              !openHamburger && styles.menuFolded
            }`}
          >
            {Array.from(goodsTabs).map((tab, index) => {
              return (
                <li
                  className={styles.menuMobile}
                  onClick={() => {
                    tab.onMoveToElement();
                    handleHamburger();
                  }}
                  key={index}
                >
                  {tab.name}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div
        className={`${styles.upBtn} ${scrollTop && styles.activeUpBtn}`}
        onClick={handleScrollTop}
      >
        <FiArrowUp className={styles.arrowBtn} />
      </div>
    </>
  );
}
