import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import styles from './Navigation.module.scss';

const Navigation = () => {
  let nav = (
    <nav>
      <ul className={styles.NavigationRow}>
        <NavigationItem link="/about">About</NavigationItem>
      </ul>
    </nav>
  );
  return nav;
};

export default Navigation;
