import * as actionTypes from '../actions/actionTypes';

const initialState = {
  selectCellGridRef: {
    xPos: null,
    yPos: null
  }
};



const selectCell = (state, action) => {
  return {
    ...state,
    selectCellGridRef: {
      ...state.selectCellGridRef,
      xPos: action.xPos,
      yPos: action.yPos
    }
  };
};

const unselectCell = (state, action) => {
  return {
    ...state,
    selectCellGridRef: {
      ...state.selectCellGridRef,
      xPos: null,
      yPos: null
    }
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_CELL:
      return selectCell(state, action);
    case actionTypes.UNSELECT_CELL:
      return unselectCell(state, action);
    default:
      return state;
  }
};

export default reducer;
