import { combineReducers } from 'redux';

import chart from './reducers/chart';
import ui from './reducers/ui';
import data from './reducers/data';

export default combineReducers({
  chart,
  ui,
  data
});
