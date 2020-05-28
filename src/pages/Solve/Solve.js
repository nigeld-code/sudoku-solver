import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import SudokuGrid from '../../components/SudokuGrid/SudokuGrid';
import NumberInputPanel from '../../components/NumberInputPanel/NumberInputPanel';
import Button from '../../components/UI/Button/Button';

import * as actions from '../../store/actions/';

const Solve = props => {
  const [showNumberInputPanel, setShowNumberInputPanel] = useState(false);

  useEffect(() => {
    if (props.selectedCell.set) {
      setShowNumberInputPanel(true);
    } else {
      setShowNumberInputPanel(false);
    }
  }, [props.selectedCell.set]);

  return (
    <React.Fragment>
      <SudokuGrid />
      <NumberInputPanel show={showNumberInputPanel} />
      <Button
        buttonStyle={{ display: 'block', margin: 'auto' }}
        notAvailable={props.numberOfClues < 16 || props.numberOfClues >= 81}
        clicked={props.attemptSolve}
        text='Attempt Solve'
        size='large'
      />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    selectedCell: state.input.selectCellGridRef,
    numberOfClues: state.input.qtyFilledCells
  };
};

const mapDispatchToProps = dispatch => {
  return {
    attemptSolve: () => dispatch(actions.attemptSolve())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Solve);
