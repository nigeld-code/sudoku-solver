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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_CELL:
      return selectCell(state, action);
    default:
      return state;
  }
};

export default reducer;
