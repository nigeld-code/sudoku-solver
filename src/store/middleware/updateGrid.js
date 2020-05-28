import * as actionTypes from '../actions/actionTypes';
import * as actions from '../actions/';

const GRID_SIZE = 9;

const solveSweep = ({ dispatch, getState }) => next => action => {
  if (action.type === actionTypes.ATTEPMT_SOLVE) {
    dispatch(actions.failedToSolve(false));
    const state = getState();
    state.grid.forEach((gridRow, xIndex) => {
      gridRow.forEach((cell, yIndex) => {
        if (!cell.number) {
          dispatch(actions.checkCouldBeSweep(xIndex, yIndex));
        }
      });
    });
    const nextAction = next(action);
    const stateNew = getState();
    if (
      stateNew.input.qtyFilledCells <= Math.pow(GRID_SIZE, 2) &&
      stateNew.input.qtyFilledCells > state.input.qtyFilledCells
    ) {
      dispatch(actions.attemptSolve());
    } else {
      dispatch(actions.failedToSolve(true));
    }
    return nextAction;
  }
  return next(action);
};

const checkCouldBeSweepMiddleware = ({
  getState,
  dispatch
}) => next => action => {
  if (action.type === actionTypes.CHECK_COULD_BE_SWEEP) {
    const nextAction = next(action);
    const state = getState();
    const thisCell = state.grid[action.xPos][action.yPos];
    const cellHasNumber = [];
    state.grid.forEach(gridRow => {
      const rowHasNum = gridRow.filter(cellNumCheck => cellNumCheck['number']);
      if (rowHasNum.length) {
        rowHasNum.forEach(cell => {
          if (
            cell.column === thisCell.column ||
            cell.row === thisCell.row ||
            cell.group === thisCell.group
          ) {
            cellHasNumber.push(cell);
          }
        });
      }
    });
    if (cellHasNumber.length) {
      let numbersForCouldBe = [];
      let rowTotal = 0;
      let columnTotal = 0;
      let groupTotal = 0;
      cellHasNumber.forEach(cellObject => {
        numbersForCouldBe.push(cellObject.number);
        if (cellObject.row === thisCell.row) {
          rowTotal += cellObject.number;
        }
        if (cellObject.column === thisCell.row) {
          columnTotal += cellObject.number;
        }
        if (cellObject.group === thisCell.group) {
          groupTotal += cellObject.number;
        }
      });
      const largestCount = Math.max(rowTotal, columnTotal, groupTotal);
      numbersForCouldBe = [...new Set(numbersForCouldBe)];
      if (numbersForCouldBe.length === GRID_SIZE - 1) {
        const numberForChange = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(
          num => !numbersForCouldBe.includes(num)
        );
        dispatch(
          actions.changeCellNumber(action.xPos, action.yPos, numberForChange[0])
        );
        dispatch(actions.countNumberInputs());
      } else {
        if (45 - largestCount < 9) {
          numbersForCouldBe = numbersForCouldBe.filter(
            num => num < 45 - largestCount
          );
        }
        dispatch(
          actions.setCouldBe(action.xPos, action.yPos, numbersForCouldBe)
        );
      }
    }
    return nextAction;
  }
  return next(action);
};

export default [solveSweep, checkCouldBeSweepMiddleware];
