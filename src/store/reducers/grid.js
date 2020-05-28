import * as actionTypes from '../actions/actionTypes';

const GRID_SIZE = 9;

const initialState = [];
const initialCouldBe = [];

for (let i = 1; i <= GRID_SIZE; i++) {
  initialCouldBe.push(i);
}

let groupCounter = 0;
for (let x = 0; x < GRID_SIZE; x++) {
  initialState[x] = [];
  if (x % Math.sqrt(GRID_SIZE) === 0) {
    groupCounter += Math.sqrt(GRID_SIZE);
  }
  for (let y = 0; y < GRID_SIZE; y++) {
    if (y % Math.sqrt(GRID_SIZE) === 0) {
      if (groupCounter % Math.sqrt(GRID_SIZE) === 0 && groupCounter !== 0) {
        groupCounter -= Math.sqrt(GRID_SIZE);
      }
      groupCounter += 1;
    }
    initialState[x][y] = {
      number: null,
      couldBe: initialCouldBe,
      group: groupCounter,
      row: y,
      column: x
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

const resetCell = (state, action) => {
  const newState = [...state];
  newState[action.xPos][action.yPos] = {
    ...state[action.xPos][action.yPos],
    couldBe: initialCouldBe
  }
  return newState;
}

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

const couldBeAfterClear = (state, action) => {
  let newCouldBe = [...state[action.xPos][action.yPos].couldBe];
  newCouldBe = newCouldBe.concat(action.resetNum);

  const newState = [...state];
  newState[action.xPos][action.yPos] = {
    ...state[action.xPos][action.yPos],
    couldBe: newCouldBe
  }
  return newState;
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CELL_NUM:
      return changeCellNumber(state, action);
    case actionTypes.RESET_CELL:
      return resetCell(state, action);
    case actionTypes.SET_COULD_BE:
      return setCouldBe(state, action);
    case actionTypes.COULD_BE_AFTER_CLEAR:
      return couldBeAfterClear(state, action);
    default:
      return state;
  }
};

export default reducer;
