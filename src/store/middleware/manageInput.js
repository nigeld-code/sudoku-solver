import * as actionTypes from '../actions/actionTypes';
import * as actions from '../actions/';

const GRID_SIZE = 9;
const resetCellCouldBe = [];
for (let i = 0; i < GRID_SIZE; i++) {
  resetCellCouldBe[i] = i + 1;
}

const numberInputMiddleware = ({ dispatch }) => next => action => {
  if (action.type === actionTypes.NUMBER_INPUT) {
    dispatch(actions.changeCellNumber(action.xPos, action.yPos, action.number));
    dispatch(actions.countNumberInputs());
  }
  return next(action);
};

const availableInputsMiddleWare = ({
  dispatch,
  getState
}) => next => action => {
  if (
    action.type === actionTypes.SELECT_CELL ||
    action.type === actionTypes.NUMBER_INPUT
  ) {
    const unavailableInputs = [];
    const availableInputs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const state = getState();

    const thisCell = state.grid[action.xPos][action.yPos];
    if (thisCell.number) {
      dispatch(actions.manageInputs([]));
      return next(action);
    }
    state.grid.forEach(gridRow => {
      gridRow.forEach(cell => {
        if (
          cell.column === thisCell.column ||
          cell.row === thisCell.row ||
          cell.group === thisCell.group
        ) {
          if (cell.number && !unavailableInputs.includes(cell.number)) {
            unavailableInputs.push(cell.number);
          }
        }
      });
    });
    dispatch(
      actions.manageInputs(
        availableInputs.filter(input => !unavailableInputs.includes(input))
      )
    );
  }
  return next(action);
};

const resetFilledCellsCounter = ({ dispatch }) => next => action => {
  if (action.type === actionTypes.RESET_ALL) {
    dispatch(actions.resetCounter());
  }
  next(action);
};

export default [
  numberInputMiddleware,
  availableInputsMiddleWare,
  resetFilledCellsCounter
];
