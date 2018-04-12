import screen from './screen';

import { combineReducers } from 'redux';

export interface Action {
  type: string;
  payload: any;
}

const rootReducer = (combineReducers as any)({
  screen
});

export default rootReducer;
