import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/';

import styles from './NumberSelector.module.scss';

const NumberSelector = props => {
  const { xPos, yPos, number } = props;

  const selectedCell =
    props.selectedCell.xPos === xPos && props.selectedCell.yPos === yPos;
  let selectedStyle = {};
  let altStyle = {};

  if (selectedCell) {
    selectedStyle = {
      backgroundColor: '#1a535c',
      color: '#fafcfa'
    };
  }

  if (props.altStyle) {
    altStyle = {
      backgroundColor: '#ddd'
    };
  }

  const selectCellHandler = () => {
    if (selectedCell) {
      props.unselectCell();
    } else {
      props.selectCell(xPos, yPos);
    }
  };

  const keyDownHandler = event => {
    if (props.allowedInput.includes(+event.key)) {
      props.onNumberInput(
        props.selectedCell.xPos,
        props.selectedCell.yPos,
        +event.key
      );
    } else if (event.key === 'Backspace' || event.key === '0') {
      props.onNumberInput(
        props.selectedCell.xPos,
        props.selectedCell.yPos,
        null
      );
    }
  };

  return (
    <React.Fragment>
      <button
        className={styles.NumberSelector}
        style={{ ...altStyle, ...selectedStyle }}
        onClick={selectCellHandler}
        onKeyDown={keyDownHandler}
      >
        {number ? number : ''}
      </button>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    selectedCell: state.input.selectCellGridRef,
    allowedInput: state.input.availableInputs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectCell: (xPos, yPos) => dispatch(actions.selectCell(xPos, yPos)),
    unselectCell: () => dispatch(actions.unselectCell()),
    onNumberInput: (xPos, yPos, number) =>
      dispatch(actions.numberInput(xPos, yPos, number))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NumberSelector);
