import { combineReducers } from 'redux';

import {
	SELECT_CHART_TYPE, SELECT_CHART_LINES, SELECT_CHART_YEARS, SELECT_CHART_YEARRANGE, SELECT_CHART_SOLARTERM,
	FETCH_DATA_REQUEST, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS,
	ChartTypes
} from './actions.js';

function type(state = 'BY_SOLARTERM', action) {
	switch (action.type) {
		case SELECT_CHART_TYPE: return action.chartType;
		default: return state;
	}
}

function lines(state = {
	'temp_avg': true,
}, action) {
	switch (action.type) {
		case SELECT_CHART_LINES: return action.lines;
		default: return state;
	}
}

function year(state = {
	'2016': true
}, action) {
	switch (action.type) {
		case SELECT_CHART_YEARS: return action.years;
		default: return state;
	}
}

function yearRange(state = {min: 1900, max: 2016}, action) {
	switch (action.type) {
		case SELECT_CHART_YEARRANGE: return action.yearRange;
		default: return state;
	}
}

function solarTerm(state = {
  '1': true
}, action) {
	switch (action.type) {
		case SELECT_CHART_SOLARTERM: return action.solarTerm;
		default: return state;
	}
}

const chart = combineReducers({
	type,
	lines,
	year,
	yearRange,
	solarTerm
});

const data = combineReducers({

});

const reducer = combineReducers({
	chart,
	// data
});

export default reducer;
