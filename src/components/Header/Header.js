import React from 'react';

import MenuToggle from './MenuToggle/MenuToggle';
import Logo from '../UI/Logo/Logo';
import Navigation from './Navigation/Navigation';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.Header}>
      <MenuToggle />
      <Logo classes={styles.HeaderLogo} />
      <nav>
        <Navigation />
      </nav>
    </header>
  );
};

export default Header;