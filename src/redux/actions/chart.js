export const SELECT_CHART_TYPE = 'SELECT_CHART_TYPE';
export const SELECT_CHART_LINES = 'SELECT_CHART_LINES';
export const SELECT_CHART_YEARS = 'SELECT_CHART_YEARS';
export const SELECT_CHART_YEARRANGE = 'SELECT_CHART_YEARRANGE';
export const SELECT_CHART_SOLARTERM = 'SELECT_CHART_SOLARTERM';
export const SELECT_CHART_SOLARTERM_TOGGLE = 'SELECT_CHART_SOLARTERM_TOGGLE';
export const SELECT_CHART_DATE_MONTH = 'SELECT_CHART_DATE_MONTH';
export const SELECT_CHART_DATE_DATE = 'SELECT_CHART_DATE_DATE';
export const SELECT_CHART_YEARS_TOGGLE = 'SELECT_CHART_YEARS_TOGGLE';
export const SELECT_CHART_LINES_TOGGLE = 'SELECT_CHART_LINES_TOGGLE';

export {DataTypes as ChartTypes} from './data';

export const LineType = {
  TEMP_AVG_RAW: 'Average Temperature'
};

export const LineOptions = {
  TEMP_AVG: 'Average Temp',
  MOVING_AVG: 'Moving Average Temp'
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

export let selectChartDateMonth = month => ({
  type: SELECT_CHART_DATE_MONTH,
  month
});

export let selectChartDateDate = date => ({
  type: SELECT_CHART_DATE_DATE,
  date
});

export let toggleYear = (year, selected) => ({
  type: SELECT_CHART_YEARS_TOGGLE,
  year,
  selected
});

export let toggleLine = (line, selected) => ({
  type: SELECT_CHART_LINES_TOGGLE,
  line,
  selected
});
