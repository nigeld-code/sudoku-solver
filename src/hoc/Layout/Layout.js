import React from 'react';

import Header from '../../components/Header/Header';

import styles from './Layout.module.scss';

const Layout = props => {
  return (
    <React.Fragment>
      <Header />
      <main className={styles.Main}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
