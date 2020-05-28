import { combineReducers } from 'redux';

import inputReducer from './input';
import gridReducer from './grid';

export default combineReducers({
  input: inputReducer,
  grid: gridReducer
});