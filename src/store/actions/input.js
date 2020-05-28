import * as actionTypes from './actionTypes';

export const selectCell = (xPos, yPos) => {
  return {
    type: actionTypes.SELECT_CELL,
    xPos,
    yPos
  };
};

export const unselectCell = () => {
  return {
    type: actionTypes.UNSELECT_CELL
  };
};

export const numberInput = (xPos, yPos, number, isFinalInput) => {
  return {
    type: actionTypes.NUMBER_INPUT,
    xPos,
    yPos,
    number,
    isFinalInput
  };
};

export const countNumberInputs = () => {
  return {
    type: actionTypes.COUNT_NUMBER_INPUTS
  };
};

export const manageInputs = inputs => {
  return {
    type: actionTypes.MANAGE_INPUTS,
    inputs
  };
};

export const attemptSolve = () => {
  return {
    type: actionTypes.ATTEPMT_SOLVE
  };
};
