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
      backgroundColor: 'black',
      color: 'white'
    };
  }

  if (props.altStyle) {
    altStyle = {
      backgroundColor: 'lightgrey'
    };
  }

  const selectCellHandler = () => {
    if (selectedCell) {
      props.unselectCell()
    } else {
      props.selectCell(xPos, yPos);
    }
  };

  return (
    <React.Fragment>
      <button
        className={styles.NumberSelector}
        style={{ ...altStyle, ...selectedStyle }}
        onClick={selectCellHandler}
      >
        {number ? number : ''}
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
    selectCell: (xPos, yPos) => dispatch(actions.selectCell(xPos, yPos)),
    unselectCell: () => dispatch(actions.unselectCell())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NumberSelector);
