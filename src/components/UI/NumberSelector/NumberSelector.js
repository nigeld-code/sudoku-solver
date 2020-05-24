import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/';

import styles from './NumberSelector.module.scss';

const NumberSelector = props => {
  const { xPos, yPos, number } = props;

  let selectedStyle = null;

  if (props.selectedCell.xPos === xPos && props.selectedCell.yPos === yPos) {
    selectedStyle = {
      backgroundColor: 'black',
      color: 'white'
    };
  }

  const selectCellHandler = () => {
    props.selectCell(xPos, yPos);
  };

  return (
    <React.Fragment>
      <button className={styles.NumberSelector} style={selectedStyle} onClick={selectCellHandler}>
        {number}
      </button>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    selectedCell: state.input.selectCellGridRef
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectCell: (xPos, yPos) => dispatch(actions.selectCell(xPos, yPos))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NumberSelector);
