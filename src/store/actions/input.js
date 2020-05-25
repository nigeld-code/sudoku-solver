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
