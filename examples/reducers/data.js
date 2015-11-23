export const CHANGE_DATASET = 'App/CHANGE_DATASET';

import getRandomInt from '../utils/getRandomInt';
import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
  percentageDonut: 56,
  donut: [0, 10, 20],
});

function sessionReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {

  case CHANGE_DATASET:
    return state.merge(fromJS(action.payload));

  default:
    return state;
  }
}

export const randomizeDataset = () => {
  const int = () => getRandomInt(0, 100);

  return {
    type: CHANGE_DATASET,
    payload: {
      percentageDonut: int(),
      donut: [int(), int(), int()],
    },
  };
};

export default sessionReducer;
