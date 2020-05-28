import React from 'react';

import Logo from '../UI/Logo/Logo';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.Header}>
      <Logo classes={styles.HeaderLogo} />
    </header>
  );
};

export default Header;
