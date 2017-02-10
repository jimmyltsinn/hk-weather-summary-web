import { combineReducers } from 'redux';

import {
  REQUEST_DATA, RECEIVE_DATA,
  REQUEST_SOLARTERM_MAP, RECEIVE_SOLARTERM_MAP,
  DataTypes
} from '../actions/data';

function year(state = {}, action) {
  if (action.dataType != DataTypes.BY_YEAR) return state;
  switch (action.type) {
    default: return state;
  }
}

function solarTerm(state = { map: {}}, action) {
  if (action.dataType != DataTypes.BY_SOLARTERM) return state;
  switch (action.type) {
    case RECEIVE_SOLARTERM_MAP: return Object.assign({}, state, {map: action.map});
    default: return state;
  }
}

function date(state = {}, action) {
  if (action.dataType != DataTypes.BY_DATE) return state;
  switch (action.type) {
    default: return state;
  }
}

const data = combineReducers({
  year,
  solarTerm,
  date
});

export default data;
