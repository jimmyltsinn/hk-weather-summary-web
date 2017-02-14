import { combineReducers } from 'redux';

import {
  REQUEST_DATA, RECEIVE_DATA,
  REQUEST_SOLARTERM_MAP, RECEIVE_SOLARTERM_MAP,
  RECEIVE_DATA_YEAR, RECEIVE_DATA_SOLARTERM, RECEIVE_DATA_DATE,
  START_FETCH, COMPLETE_FETCH,
  DataTypes
} from '../actions/data';

function years(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DATA_YEAR: return Object.assign({}, state, {
      [action.year]: action.data
    });
    default: return state;
  }
}

function solarTerm(state = { map: {}}, action) {
  switch (action.type) {
    case RECEIVE_SOLARTERM_MAP: return Object.assign({}, state, {map: action.map});
    case RECEIVE_DATA_SOLARTERM: return Object.assign({}, state, {
      [action.term]: action.data
    });
    default: return state;
  }
}

function date(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DATA_DATE: return Object.assign({}, state, {
      [action.month]: Object.assign({}, state[action.month] || {}, {
        [action.date]: action.data
      })
    });
    default: return state;
  }
}

function status(state = {
  isFetching: true
}, action) {
  switch (action.type) {
    case START_FETCH: return { isFetching: true };
    case COMPLETE_FETCH: return { isFetching: false };
    default: return state;
  }
}

const data = combineReducers({
  years,
  solarTerm,
  date,
  status
});

export default data;
