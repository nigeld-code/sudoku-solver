import React from 'react';

import GridRow from './GridRow/GridRow';
import GridCell from './GridCell/GridCell';

import styles from './SudokuGrid.module.scss';

const GRID_SIZE = 9;

const altStyleController = (counter, gridSize) => {
  if (counter < Math.sqrt(gridSize) && counter >= 0) {
    return [true, counter + 1];
  } else if (counter === Math.sqrt(gridSize)) {
    return [false, -Math.sqrt(gridSize) + 1];
  }
  return [false, counter + 1];
};

const SudokuGrid = () => {
  const grid = [];
  const gridRow = [];

  let altStyleCounter = 0;
  for (let x = 0; x < GRID_SIZE; x++) {
    const [altStyle, newCounter] = altStyleController(
      altStyleCounter,
      GRID_SIZE
    );
    altStyleCounter = newCounter;
    gridRow[x] = <GridCell key={x} xPos={x} altStyle={altStyle} />;
  }

  altStyleCounter = 0;
  for (let y = 0; y < GRID_SIZE; y++) {
    const [altStyle, newCounter] = altStyleController(
      altStyleCounter,
      GRID_SIZE
    );
    altStyleCounter = newCounter;
    grid[y] = (
      <GridRow key={y}>
        {gridRow.map(gridCell => (
          <gridCell.type
            key={`(${y}, ${gridCell.props.xPos})`}
            xPos={gridCell.props.xPos}
            yPos={GRID_SIZE - 1 - y}
            gridSize={GRID_SIZE}
            altStyle={
              altStyle ? gridCell.props.altStyle : !gridCell.props.altStyle
            }
          />
        ))}
      </GridRow>
    );
  }

  return <div className={styles.SudokuGrid}>{grid}</div>;
};

export default SudokuGrid;
