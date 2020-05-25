import * as actionTypes from './actionTypes';

export const changeCellNumber = (xPos, yPos, number) => {
  return {
    type: actionTypes.CHANGE_CELL_NUM,
    xPos: xPos - 1,
    yPos: yPos - 1,
    number
  }
}