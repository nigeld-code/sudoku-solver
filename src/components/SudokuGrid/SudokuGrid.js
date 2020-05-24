import React from 'react';

import GridRow from './GridRow/GridRow';
import GridCell from './GridCell/GridCell';

import styles from './SudokuGrid.module.scss';

const GRID_SIZE = 9;

const SudokuGrid = () => {
  const grid = [];
  const gridRow = [];

  for (let x = 0; x < GRID_SIZE; x++) {
    gridRow[x] = <GridCell key={x} xPos={x} />;
  }

  for (let y = 0; y < GRID_SIZE; y++) {
    grid[y] = (
      <GridRow key={y}>
        {gridRow.map(gridCell => (
          <gridCell.type key={`(${y}, ${gridCell.props.xPos})`} xPos={gridCell.props.xPos + 1} yPos={GRID_SIZE - y} />
        ))}
      </GridRow>
    );
  }

  return <div className={styles.SudokuGrid}>{grid}</div>;
};

export default SudokuGrid;
