import React from 'react';
import styles from './Spinner.module.css'; 

const Spinner = () => {
  return (
    <div className={styles.spinner} data-testid="loading-spinner">
      <div className={styles.doubleBounce1}></div>
      <div className={styles.doubleBounce2}></div>
    </div>
  );
};

export default Spinner;
