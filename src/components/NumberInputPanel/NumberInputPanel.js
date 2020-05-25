import React from 'react';
import { connect } from 'react-redux';

import Button from '../UI/Button/Button';

import * as actions from '../../store/actions/';

import styles from './NumberInputPanel.module.scss';

const GRID_SIZE = 9;

const NumberInputPanel = props => {
  const numberButtons = [];

  for (let i = 0; i < GRID_SIZE; i++) {
    numberButtons[i] = (
      <Button
        key={i}
        size='small'
        text={i + 1}
        clicked={() => props.onChangeCellNumber(
          props.selectedCell.xPos,
          props.selectedCell.yPos,
          i + 1
        )}
      />
    );
  }

  numberButtons.push(
    <Button
      key='clear'
      size='small'
      text='clear'
      clicked={() =>
        props.onChangeCellNumber(
          props.selectedCell.xPos,
          props.selectedCell.yPos,
          null
        )
      }
    />
  );
  numberButtons.push(
    <Button key='close' size='small' text='close' clicked={props.onUnselect} />
  );

  const classes = [styles.NumberInputPanel];

  if (!props.show) {
    classes.push(styles.Hide);
  }

  return <div className={classes.join(' ')}>{numberButtons}</div>;
};

const mapStateToProps = state => {
  return {
    selectedCell: state.input.selectCellGridRef
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUnselect: () => dispatch(actions.unselectCell()),
    onChangeCellNumber: (xPos, yPos, number) =>
      dispatch(actions.changeCellNumber(xPos, yPos, number))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NumberInputPanel);
