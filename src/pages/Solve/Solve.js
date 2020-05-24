import React from 'react';
import { connect } from 'react-redux';

import SudokuGrid from '../../components/SudokuGrid/SudokuGrid';

const Solve = props => {
  return (
    <React.Fragment>
      <SudokuGrid />
      <div>
        ({props.selectedCell.xPos},{' '}
        {props.selectedCell.yPos})
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    selectedCell: state.input.selectCellGridRef
  };
};

export default connect(mapStateToProps)(Solve);
