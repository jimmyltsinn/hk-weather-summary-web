import { createSelector } from 'reselect';
import {range, round} from '../../util';
import {LineTypes} from '../actions/chart';

export const getYearsData = createSelector(state => state.data.years, state => state.chart, (data, chartOptions) => {
  let map = {};
  let id = 0;
  for (let i = 1; i <= 12; ++i) {
    for (let j = 1; j <= 31; ++j) {
      if (i == 2 && j > 29) break;
      if ((i == 4 || i == 6 || i == 9 || i == 11) && j >= 31) break;
      if (j == 1) map[i] = {};
      map[i][j] = id;
      id++;
    }
  }

  let ret = [];

  Object.keys(data)
    .map(year => Object.keys(data[year])
      .map(month => Object.keys(data[year][month])
        .map(date => {
          if (!ret[map[month][date]]) ret[map[month][date]] = {
            'id': map[month][date] + 1,
            'date': `${month}/${date}`
          };

          Object.keys(chartOptions.lines)
            .filter(line => chartOptions.lines[line])
            .map(line => {
              if (LineTypes[line].keyName) {
                ret[map[month][date]][`${year}-${LineTypes[line].id}`] = data[year][month][date][LineTypes[line].keyName];
              } else {
                ret[map[month][date]][`${year}-${LineTypes[line].id}`] = round(LineTypes[line].transform.years(5, month, date, year, data[year]), 2);
              }});
        })));

  return ret;
});

export const getSolarTermData = createSelector(state => state.data.solarTerm, state => state.chart, (data, chartOptions) => {
  let ret = range(chartOptions.yearRange.min, chartOptions.yearRange.max).map(year => ({year}));

  Object.keys(data)
    .map(term => Object.keys(data[term])
      .filter(year => year >= chartOptions.yearRange.min && year <= chartOptions.yearRange.max)
      .map(year => {
        Object.keys(chartOptions.lines)
        .filter(line => chartOptions.lines[line])
        .map(line => {
          if (LineTypes[line].keyName) {
            ret[year - chartOptions.yearRange.min][`${term}-${LineTypes[line].id}`] = data[term][year][LineTypes[line].keyName];
          } else {
            ret[year - chartOptions.yearRange.min][`${term}-${LineTypes[line].id}`] = round(LineTypes[line].transform.solarTerm(5, year, data[term]), 2);
          }
        });
      })
  );

  return ret;
});
