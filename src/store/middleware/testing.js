import * as actionTypes from '../actions/actionTypes';
// import * as actions from '../actions/';

const testColumns = ({ getState }) => next => action => {
  // if (action.type === actionTypes.NUMBER_INPUT) {
  //   const nextAction = next(action);
  //   let count = 0;
  //   const state = getState();
  //   state.grid.forEach(gridRow => {
  //     gridRow.forEach(cell => {
  //       if (
  //         cell.number &&
  //         cell.column === state.grid[action.xPos][action.yPos].column
  //       ) {
  //         count += cell.number;
  //       }
  //     });
  //   });
  //   console.log(
  //     `Test Column: ${
  //       state.grid[action.xPos][action.yPos].column + 1
  //     } -> ${count}`
  //   );
  //   return nextAction;
  // }
  return next(action);
};

const testRows = ({ getState }) => next => action => {
  // if (action.type === actionTypes.NUMBER_INPUT) {
  //   const nextAction = next(action);
  //   let count = 0;
  //   const state = getState();
  //   state.grid.forEach(gridRow => {
  //     gridRow.forEach(cell => {
  //       if (
  //         cell.number &&
  //         cell.row === state.grid[action.xPos][action.yPos].row
  //       ) {
  //         count += cell.number;
  //       }
  //     });
  //   });
  //   console.log(
  //     `Test Row: ${state.grid[action.xPos][action.yPos].row + 1} -> ${count}`
  //   );
  //   return nextAction;
  // }
  return next(action);
};

const testGroups = ({ getState }) => next => action => {
  // if (action.type === actionTypes.NUMBER_INPUT) {
  //   const nextAction = next(action);
  //   let count = 0;
  //   const state = getState();
  //   state.grid.forEach(gridRow => {
  //     gridRow.forEach(cell => {
  //       if (
  //         cell.number &&
  //         cell.group === state.grid[action.xPos][action.yPos].group
  //       ) {
  //         count += cell.number;
  //       }
  //     });
  //   });
  //   console.log(
  //     `Test Group: ${state.grid[action.xPos][action.yPos].group} -> ${count}`
  //   );
  //   return nextAction;
  // }
  return next(action);
};

const testCellSelection = ({ getState }) => next => action => {
  if (action.type === actionTypes.SELECT_CELL) {
    const state = getState();
    console.log(
      `Info for (${action.xPos}, ${action.yPos}): CouldBe -> ${
        state.grid[action.xPos][action.yPos].couldBe
      }`
    );
    console.log(state.grid[action.xPos][action.yPos]);
  }
  return next(action);
};

export default [testColumns, testRows, testGroups, testCellSelection];
