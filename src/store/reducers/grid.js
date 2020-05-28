import * as actionTypes from '../actions/actionTypes';

const newGrid = gridSize => {
  const grid = [];
  const initialCouldBe = [];

  for (let i = 1; i <= gridSize; i++) {
    initialCouldBe.push(i);
  }

  let groupCounter = 0;
  for (let x = 0; x < gridSize; x++) {
    grid[x] = [];
    if (x % Math.sqrt(gridSize) === 0) {
      groupCounter += Math.sqrt(gridSize);
    }
    for (let y = 0; y < gridSize; y++) {
      if (y % Math.sqrt(gridSize) === 0) {
        if (groupCounter % Math.sqrt(gridSize) === 0 && groupCounter !== 0) {
          groupCounter -= Math.sqrt(gridSize);
        }
        groupCounter += 1;
      }
      grid[x][y] = {
        number: null,
        couldBe: initialCouldBe,
        group: groupCounter,
        row: y,
        column: x
      };
    }
  }
  return grid;
};

const initialState = newGrid(9);

const changeCellNumber = (state, action) => {
  const newState = [...state];
  newState[action.xPos][action.yPos] = {
    ...state[action.xPos][action.yPos],
    number: action.number
  };
  return newState;
};

const setCouldBe = (state, action) => {
  let newCouldBe = [...state[action.xPos][action.yPos].couldBe];
  newCouldBe = newCouldBe.filter(num => !action.set.includes(num));

  const newState = [...state];
  newState[action.xPos][action.yPos] = {
    ...state[action.xPos][action.yPos],
    couldBe: newCouldBe
  };
  return newState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CELL_NUM:
      return changeCellNumber(state, action);
    case actionTypes.SET_COULD_BE:
      return setCouldBe(state, action);
    case actionTypes.RESET_ALL:
      return newGrid(9);
    default:
      return state;
  }
};

export default reducer;
