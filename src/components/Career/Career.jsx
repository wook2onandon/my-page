import React from 'react';
import styles from './Career.module.css';

export default function Career({ elementRef }) {
  return (
    <div ref={elementRef} className={styles.container}>
      <div className={styles.title}>Career</div>
    </div>
  );
}
