import React from 'react';

import sudokuLogo from '../../../assets/images/logo.png';
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.Logo}>
      <img src={sudokuLogo} alt=""/>
    </div>
  );
};

export default Logo;