import * as actionTypes from './actionTypes';

export const changeCellNumber = (xPos, yPos, number) => {
  return {
    type: actionTypes.CHANGE_CELL_NUM,
    xPos,
    yPos,
    number,
  };
};

export const setCouldBe = (xPos, yPos, set) => {
  return {
    type: actionTypes.SET_COULD_BE,
    xPos,
    yPos,
    set
  };
};

export const checkCouldBeSweep = (xPos, yPos) => {
  return {
    type: actionTypes.CHECK_COULD_BE_SWEEP,
    xPos,
    yPos
  };
};

export const resetAll = () => {
  return {
    type: actionTypes.RESET_ALL
  };
};
