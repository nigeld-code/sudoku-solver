import React from 'react';

import sudokuLogo from '../../../assets/images/logo.png';
import styles from './Logo.module.scss';

const Logo = props => {
  return (
    <React.Fragment>
      <img
        className={
          props.classes
            ? [styles.Logo].concat(props.classes).join(' ')
            : styles.Logo
        }
        src={sudokuLogo}
        alt=''
      />
    </React.Fragment>
  );
};

export default Logo;
