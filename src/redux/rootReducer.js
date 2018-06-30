import { combineReducers } from 'redux';
import { main } from 'redux/reducers/main';

const allReducers = {
  main
};

export const rootReducer = combineReducers(allReducers);
