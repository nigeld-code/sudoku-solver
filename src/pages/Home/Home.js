import React from 'react';

import Logo from '../../components/UI/Logo/Logo';
import Button from '../../components/UI/Button/Button';

import styles from './Home.module.scss';

const Home = props => {
  const navToSolve = () => {
    props.history.push('/solve');
  };

  return (
    <div className={styles.Home}>
      <h1>
        Welcome to <br /> Sudoku Solver
      </h1>
      <Logo classes={styles.HomeLogo} />
      <Button classes={styles.HomeButton} clicked={navToSolve} text='Start' />
    </div>
  );
};

export default Home;
