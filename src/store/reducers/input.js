import * as actionTypes from '../actions/actionTypes';

const initialState = {
  selectCellGridRef: {
    xPos: null,
    yPos: null,
    set: false
  },
  qtyFilledCells: 0,
  availableInputs: [],
  hasFailedToSolve: false
};

const selectCell = (state, action) => {
  return {
    ...state,
    selectCellGridRef: {
      ...state.selectCellGridRef,
      xPos: action.xPos,
      yPos: action.yPos,
      set: true
    }
  };
};

const unselectCell = (state, action) => {
  return {
    ...initialState,
    qtyFilledCells: state.qtyFilledCells
  };
};

const manageAvaialbleInputs = (state, action) => {
  return {
    ...state,
    availableInputs: action.inputs
  };
};

const countNumberInputs = (state, action) => {
  return {
    ...state,
    qtyFilledCells: state.qtyFilledCells + 1
  };
};

const failedToSolve = (state, action) => {
  return {
    ...state,
    hasFailedToSolve: action.hasFailedToSolve
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_CELL:
      return selectCell(state, action);
    case actionTypes.MANAGE_INPUTS:
      return manageAvaialbleInputs(state, action);
    case actionTypes.COUNT_NUMBER_INPUTS:
      return countNumberInputs(state, action);
    case actionTypes.UNSELECT_CELL:
      return unselectCell(state, action);
    case actionTypes.FAILED_TO_SOLVE:
      return failedToSolve(state, action);
    case actionTypes.RESET_COUNTER:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
