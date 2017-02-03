export const SELECT_CHART_TYPE = 'SELECT_CHART_TYPE';
export const SELECT_CHART_LINES = 'SELECT_CHART_LINES';
export const SELECT_CHART_YEARS = 'SELECT_CHART_YEARS';
export const SELECT_CHART_YEARRANGE = 'SELECT_CHART_YEARRANGE';
export const SELECT_CHART_SOLARTERM = 'SELECT_CHART_SOLARTERM';
export const SELECT_CHART_SOLARTERM_TOGGLE = 'SELECT_CHART_SOLARTERM_TOGGLE';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export const ChartTypes = {
	BY_SOLARTERM: 'By Solar Term',
	BY_DATE: 'By Date',
  BY_YEAR: 'By Year'
};

export let selectChartType = chartType => ({
	type: SELECT_CHART_TYPE,
	chartType
});

export let selectChartLines = lines => ({
	type: SELECT_CHART_LINES,
	lines
});

export let selectChartYears = years => ({
	type: SELECT_CHART_YEARS,
	years
});

export let selectChartYearRange = (range) => ({
	type: SELECT_CHART_YEARRANGE,
	yearRange: range
});

export let selectChartSolarTerm = solarTerm => ({
	type: SELECT_CHART_SOLARTERM,
	solarTerm
});

export let toggleSolarTerm = (solarTerm, selected) => ({
  type: SELECT_CHART_SOLARTERM_TOGGLE,
  solarTerm,
  selected
});

// export let requestData = (yearRange, content) => {
// 	return {
// 		type: FETCH_DATA_REQUEST,
// 		yearRange,
// 		content
// 	};
// };
//
// export let fetchFailed = (err) => {
// 	return {
// 		type: FETCH_DATA_FAILURE,
// 		error: err
// 	};
// };
//
// export let fetchComplete = (data) => {
// 	return {
// 		type: FETCH_DATA_SUCCESS,
// 		data
// 	};
// };
