import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import SudokuGrid from '../../components/SudokuGrid/SudokuGrid';
import NumberInputPanel from '../../components/NumberInputPanel/NumberInputPanel';
import Button from '../../components/UI/Button/Button';

import * as actions from '../../store/actions/';

import styles from './Solve.module.scss';

const Solve = props => {
  const [showNumberInputPanel, setShowNumberInputPanel] = useState(false);

  useEffect(() => {
    if (props.selectedCell.set) {
      setShowNumberInputPanel(true);
    } else {
      setShowNumberInputPanel(false);
    }
  }, [props.selectedCell.set]);

  let failedToSolveDisplay;
  if (props.hasFailedToSolve) {
    failedToSolveDisplay = (
      <div className={styles.SolveFailedToSolveMessage}>
        Sorry this Sudoku is too difficult for me to solve!
      </div>
    );
  }

  return (
    <React.Fragment>
      <SudokuGrid />
      <NumberInputPanel show={showNumberInputPanel} />
      {failedToSolveDisplay}
      <Button
        buttonStyle={{ display: 'block', margin: 'auto' }}
        notAvailable={props.numberOfClues < 16 || props.numberOfClues >= 81}
        clicked={props.attemptSolve}
        text='Attempt Solve'
        size='large'
      />
      <Button
        buttonStyle={{ display: 'block', margin: '0.5rem auto' }}
        clicked={props.resetAll}
        text='Restart'
        size='small'
      />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    selectedCell: state.input.selectCellGridRef,
    numberOfClues: state.input.qtyFilledCells,
    hasFailedToSolve: state.input.hasFailedToSolve
  };
};

const mapDispatchToProps = dispatch => {
  return {
    attemptSolve: () => dispatch(actions.attemptSolve()),
    resetAll: () => dispatch(actions.resetAll())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Solve);
