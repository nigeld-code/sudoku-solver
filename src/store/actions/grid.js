import * as actionTypes from './actionTypes';

export const changeCellNumber = (xPos, yPos, number, isFinalInput = false) => {
  return {
    type: actionTypes.CHANGE_CELL_NUM,
    xPos,
    yPos,
    number,
    isFinalInput
  };
};

export const resetCell = (xPos, yPos) => {
  return {
    type: actionTypes.RESET_CELL,
    xPos,
    yPos
  };
};

export const setCouldBe = (xPos, yPos, set, isFinalInput = false) => {
  return {
    type: actionTypes.SET_COULD_BE,
    xPos,
    yPos,
    set,
    isFinalInput
  };
};

export const couldBeAfterClear = (xPos, yPos, resetNum) => {
  return {
    type: actionTypes.COULD_BE_AFTER_CLEAR,
    xPos,
    yPos,
    resetNum
  };
};

export const checkCouldBeSweep = (xPos, yPos) => {
  return {
    type: actionTypes.CHECK_COULD_BE_SWEEP,
    xPos,
    yPos
  };
};
