import React from 'react';
import { connect } from 'react-redux';

import NumberSelector from '../../UI/NumberSelector/NumberSelector';

import styles from './GridCell.module.scss';

const GridCell = props => {
  const { xPos, yPos } = props;

  const numberForCell = props.grid[xPos - 1][yPos - 1].number;

  return (
    <div className={styles.GridCell}>
      <NumberSelector
        number={numberForCell}
        xPos={xPos}
        yPos={yPos}
        altStyle={props.altStyle}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    grid: state.grid
  };
};

export default connect(mapStateToProps)(GridCell);
