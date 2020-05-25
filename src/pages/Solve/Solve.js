import React from 'react';
import { connect } from 'react-redux';

import SudokuGrid from '../../components/SudokuGrid/SudokuGrid';
import NumberInputPanel from '../../components/NumberInputPanel/NumberInputPanel';

const Solve = props => {
  let showNumberInputPanel = false;

  if (props.selectedCell.xPos !== null & props.selectedCell.yPos !== null) {
    showNumberInputPanel = true;
  }

  return (
    <React.Fragment>
      <SudokuGrid />
      <NumberInputPanel show={showNumberInputPanel} />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    selectedCell: state.input.selectCellGridRef
  };
};

export default connect(mapStateToProps)(Solve);
