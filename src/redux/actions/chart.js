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

import {dateOfMonth} from '../../util';

export const LineTypes = {
  TEMP_AVG_RAW: {
    name: 'Average Temperature',
    shortName: 'Avg.Temp',
    keyName: 'temp_mean',
    id: 'raw',
    color: {
      s: 75,
      v: 75
    }
  },
  TEMP_AVG_MIN: {
    name: 'Min Temperature',
    shortName: 'Min.Temp',
    keyName: 'temp_min',
    id: 'min',
    color: {
      s: 75,
      v: 85
    }
  },
  TEMP_AVG_MAX: {
    name: 'Max Temperature',
    shortName: 'Max.Temp',
    keyName: 'temp_max',
    id: 'max',
    color: {
      s: 75,
      v: 85
    }
  },
  MOVING_AVG: {
    name: 'Moving Average (\\pm 5)',
    shortName: 'MovAvg',
    id: 'movavg',
    color: {
      s: 75,
      v: 40
    },
    transform: {
      years: (range, month, date, year, arr) => {
        let ret = 0, w = 0;
        for (let k = -range; k <= range; ++k) {
          let p = parseInt(month), q = parseInt(date) + k;
          if (q > dateOfMonth(p, year)) {
            q -= dateOfMonth(p, year);
            p++;
          }
          if (q <= 0) {
            p -= 1;
            q += dateOfMonth(p, year) + 1;
          }
          if (arr[p] && arr[p][q]) {
            ret += arr[p][q].temp_mean;
            w++;
          }
        }
        return ret / w;
      },
      solarTerm: (range, year, arr) => {
        let ret = 0, w = 0;
        for (let k = -range; k <= range; ++k) {
          let m = parseInt(year) + k;
          if (arr[m]) {
            ret += arr[m].temp_mean;
            w++;
          }
        }
        return ret / w;
      }
    }
  }
};

// export const LineOptions = {
//   TEMP_AVG: 'Average Temp',
//   MOVING_AVG: 'Moving Average Temp'
// };

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
