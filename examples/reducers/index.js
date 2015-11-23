import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import data from './data';

const rootReducer = combineReducers({
  data,
  router: routerStateReducer,
});

export default rootReducer;
