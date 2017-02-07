import { combineReducers } from 'redux';

import {
	SELECT_CHART_TYPE, SELECT_CHART_LINES, SELECT_CHART_YEARS, SELECT_CHART_YEARRANGE, SELECT_CHART_SOLARTERM,
	SELECT_CHART_SOLARTERM_TOGGLE, SELECT_CHART_DATE_MONTH, SELECT_CHART_DATE_DATE, SELECT_CHART_YEARS_TOGGLE, SELECT_CHART_LINES_TOGGLE,
	// ChartTypes
} from '../actions/chart';

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
		case SELECT_CHART_LINES_TOGGLE: {
			let ret = Object.assign({}, state);
			ret[action.line] = action.selected;
			return ret;
		}
		default: return state;
	}
}

function years(state = {
	'2016': true
}, action) {
	switch (action.type) {
		case SELECT_CHART_YEARS: return action.years;
		case SELECT_CHART_YEARS_TOGGLE: {
			let ret = Object.assign({}, state);
			ret[action.year] = action.selected;
			return ret;
		}
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
  1: true,
	3: true
}, action) {
	switch (action.type) {
		case SELECT_CHART_SOLARTERM: return action.solarTerm;
		case SELECT_CHART_SOLARTERM_TOGGLE: {
			let ret = Object.assign({}, state);
			ret[action.solarTerm] = action.selected;
			return ret;
		}
		default: return state;
	}
}

function date(state = {
  month: 1,
  date: 1
}, action) {
  switch (action.type) {
		case SELECT_CHART_DATE_MONTH: {
			let ret = Object.assign({}, state);
			ret.month = action.month;
			if (ret.month == 2 && state.date > 29) ret.date = 29;
			if ([4, 6, 9, 11].includes(ret.month) && state.date > 30) ret.date = 30;
			return ret;
		}
    case SELECT_CHART_DATE_DATE: {
			let ret = Object.assign({}, state);
			ret.date = action.date;
			return ret;
    }
		default: return state;
  }
}

const chart = combineReducers({
	type,
	lines,
	years,
	yearRange,
	solarTerm,
  date
});

export default chart;
