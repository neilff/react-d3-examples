import createLogger from 'redux-logger';
import immutableToJS from '../utils/immutableToJS';

export default createLogger({
  collapsed: true,
  transformer: (state) => {
    return immutableToJS(state);
  },
  predicate: (getState, { type }) => {
    return type !== 'App/CHANGE_DATASET';
  },
});
