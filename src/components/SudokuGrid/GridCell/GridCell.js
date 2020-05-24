import React from 'react';

import NumberSelector from '../../UI/NumberSelector/NumberSelector';

import styles from './GridCell.module.scss';

const GridCell = props => {
  const { xPos, yPos } = props;

  return (
    <div className={styles.GridCell}>
      <NumberSelector number="1" xPos={xPos} yPos={yPos}/>
    </div>
  );
};

export default GridCell;
