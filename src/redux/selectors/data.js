import { createSelector } from 'reselect';
import {range, round} from '../../util';

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

          ret[map[month][date]][`${year}-RAW`] = data[year][month][date].temp_mean;
        })));

  return ret;
});

export const getSolarTermData = createSelector(state => state.data.solarTerm, state => state.chart, (data, chartOptions) => {
  let ret = range(chartOptions.yearRange.min, chartOptions.yearRange.max).map(year => ({year}));

  Object.keys(data)
    .map(term => Object.keys(data[term])
      .filter(year => year >= chartOptions.yearRange.min && year <= chartOptions.yearRange.max)
      .map(year => {
        ret[year - chartOptions.yearRange.min][`${term}-RAW`] = data[term][year].temp_mean;
      })
  );

  return ret
    .filter(i => i.year < 1940 || i.year > 1946);
});

// export const getDateData = createSelector(state => state.data.date, date => {
//
// });
