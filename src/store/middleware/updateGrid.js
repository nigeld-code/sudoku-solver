import * as actionTypes from '../actions/actionTypes';
import * as actions from '../actions/';

const GRID_SIZE = 9;

const solveSweep = ({ dispatch, getState }) => next => action => {
  if (action.type === actionTypes.ATTEPMT_SOLVE) {
    const state = getState();
    state.grid.forEach((gridRow, xIndex) => {
      gridRow.forEach((cell, yIndex) => {
        if (!cell.number) {
          //check appriate cells and change couldBe and if couldBe = 1 then insert number break than start again
          dispatch(actions.checkCouldBeSweep(xIndex, yIndex));
        }
      });
    });
    // const nextAction = next(action);
    // const stateNew = getState();
    // if (stateNew.input.qtyFilledCells <= Math.pow(GRID_SIZE, 2)) {
    //   dispatch(actions.attemptSolve());
    // }
    // return nextAction;
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
        if (81 - largestCount < 9) {
          numbersForCouldBe = numbersForCouldBe.filter(
            num => num < 81 - largestCount
          );
          console.log(81 - largestCount);
        }
        dispatch(
          actions.setCouldBe(action.xPos, action.yPos, numbersForCouldBe)
        );
        console.log(thisCell);
        console.log(numbersForCouldBe);
      }
    }
    return nextAction;
  }
  return next(action);
};

const checkCouldBeLength = ({ dispatch, getState }) => next => action => {
  // if (action.type === actionTypes.SET_COULD_BE && !action.isFinalInput) {
  //   const stateOld = getState();
  //   const thisCellOld = stateOld.grid[action.xPos][action.yPos];
  //   const nextAction = next(action);
  //   const state = getState();

  //   const thisCell = state.grid[action.xPos][action.yPos];

  //   if (
  //     thisCell.couldBe.length === 1 &&
  //     (!thisCell.number || thisCell.number === thisCellOld.couldBe[0])
  //   ) {
  //     dispatch(
  //       actions.changeCellNumber(action.xPos, action.yPos, thisCell.couldBe[0])
  //     );
  //   }

  //   const nums = [];
  //   for (let i = 1; i <= GRID_SIZE; i++) {
  //     if (!action.set.includes(i)) {
  //       nums.push(i);
  //     }
  //   }
  //   state.grid.forEach((gridRow, xIndex) => {
  //     gridRow.forEach((cell, yIndex) => {
  //       if (xIndex === action.xPos && yIndex === action.yPos) {
  //         if (action.set.length === GRID_SIZE) {
  //           dispatch(actions.changeCellNumber(xIndex, yIndex, null));
  //         }
  //       } else if (
  //         cell.column === thisCell.column ||
  //         cell.row === thisCell.row ||
  //         cell.group === thisCell.group
  //       ) {
  //         if (
  //           action.set.length === 1 &&
  //           thisCellOld.couldBe.length === 1 &&
  //           !cell.couldBe.includes(thisCellOld.couldBe[0])
  //         ) {
  //           dispatch(
  //             actions.couldBeAfterClear(xIndex, yIndex, thisCellOld.couldBe[0])
  //           );
  //         }
  //         if (action.set.length === 1) {
  //           if (cell.number === action.set[0]) {
  //             dispatch(actions.resetCell(xIndex, yIndex));
  //             dispatch(actions.changeCellNumber(xIndex, yIndex, null));
  //           } else {
  //             dispatch(actions.setCouldBe(xIndex, yIndex, nums));
  //           }
  //         } else if (action.set.length === GRID_SIZE && !cell.number) {
  //           dispatch(
  //             actions.couldBeAfterClear(xIndex, yIndex, thisCell.number)
  //           );
  //         }
  //       }
  //     });
  //   });
  //   return nextAction;
  // }
  return next(action);
};

const manageChangeCellNumber = ({ dispatch, getState }) => next => action => {
  // if (action.type === actionTypes.CHANGE_CELL_NUM && action.number) {
  //   const stateOld = getState();
  //   const nextAction = next(action);
  //   const state = getState();

  //   const thisCell = state.grid[action.xPos][action.yPos];

  //   stateOld.grid.forEach((gridRowOld, xIndex) => {
  //     gridRowOld.forEach((cellOld, yIndex) => {
  //       if (
  //         (cellOld.column === thisCell.column ||
  //           cellOld.row === thisCell.row ||
  //           cellOld.group === thisCell.group) &&
  //         !(xIndex = action.xPos && yIndex === action.yPos)
  //       ) {
  //         if (cellOld.number === action.number) {
  //           dispatch(
  //             actions.setCouldBe(
  //               xIndex,
  //               yIndex,
  //               [...cellOld.couldBe, action.number],
  //               true
  //             )
  //           );
  //         } else if (cellOld.couldBe.includes(action.number)) {
  //           dispatch(actions.couldBeAfterClear(xIndex, yIndex, action.number));
  //         }
  //       }
  //     });
  //   });
  //   return nextAction;
  // }
  return next(action);
};

export default [
  checkCouldBeLength,
  manageChangeCellNumber,
  solveSweep,
  checkCouldBeSweepMiddleware
];
