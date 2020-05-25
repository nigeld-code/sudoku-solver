import * as actionTypes from '../actions/actionTypes';

const GRID_SIZE = 9;

const initialState = [];

for (let x = 0; x < GRID_SIZE; x++) {
  initialState[x] = [];
  for (let y = 0; y < GRID_SIZE; y++) {
    initialState[x][y] = {
      xPos: x + 1,
      yPos: y + 1,
      number: null
    };
  }
}

const changeCellNumber = (state, action) => {
  const newState = [...state];
  newState[action.xPos][action.yPos] = {
    ...state[action.xPos][action.yPos],
    number: action.number
  };
  return newState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CELL_NUM:
      return changeCellNumber(state, action);
    default:
      return state;
  }
};

export default reducer;
