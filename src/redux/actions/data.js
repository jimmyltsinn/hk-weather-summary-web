import fetch from 'isomorphic-fetch';

import Config from '../../config.js';

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const RECEIVE_DATA_YEAR = 'RECEIVE_DATA_YEAR';
export const RECEIVE_DATA_SOLARTERM = 'RECEIVE_DATA_SOLARTERM';
export const RECEIVE_DATA_DATE = 'RECEIVE_DATA_DATE';

export const START_FETCH = 'START_FETCH';
export const COMPLETE_FETCH = 'COMPLETE_FETCH';

export const REQUEST_SOLARTERM_MAP = 'REQUEST_SOLARTERM_MAP';
export const RECEIVE_SOLARTERM_MAP = 'RECEIVE_SOLARTERM_MAP';

export const DataTypes = {
  BY_SOLARTERM: 'By Solar Term',
  BY_DATE: 'By Date',
  BY_YEAR: 'By Year'
};

export let requestData = (dataType, entry) => ({
  type: REQUEST_DATA,
  dataType,
  entry
});

export let receiveData = (dataType, entry, data) => ({
  type: RECEIVE_DATA,
  dataType,
  entry,
  data
});

export let startFetch = () => ({
  type: START_FETCH
});

export let completeFetch = () => ({
  type: COMPLETE_FETCH
});

export let fetchData = (dataType, entry) => dispatch => {
  dispatch(requestData(dataType, entry));

  let url = Config.serverAddress + '/weather/';
  switch (dataType) {
    case DataTypes.BY_SOLARTERM:
      url += `solar-term/${entry.term}`;
      break;
    case DataTypes.BY_DATE:
      url += `date/${entry.month}/${entry.date}`;
      break;
    case DataTypes.BY_YEAR:
      url += `year/${entry.year}`;
      break;
  }

  return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(receiveData(dataType, entry, json)));
};

export let requestSolarTermMap = () => ({
  type: REQUEST_SOLARTERM_MAP,
  dataType: DataTypes.BY_SOLARTERM
});

export let receiveSolarTermMap = map => ({
  type: RECEIVE_SOLARTERM_MAP,
  dataType: DataTypes.BY_SOLARTERM,
  map
});

export let fetchSolarTermMap = () => dispatch => {
  dispatch(requestSolarTermMap());

  return fetch(Config.serverAddress + '/solar-term/map')
    .then(response => response.json())
    .then(json => dispatch(receiveSolarTermMap(json)))
    .catch(console.error);
};

let receiveYearData = (year, data) => ({
  type: RECEIVE_DATA_YEAR,
  year,
  data
});

let fetchYearData = (dispatch, year) => {
  const url = Config.serverAddress + `/weather/year/${year}`;
  return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(receiveYearData(year, json)));
};

let receiveSolarTermData = (term, data) => ({
  type: RECEIVE_DATA_SOLARTERM,
  term,
  data
});

let fetchSolarTermData = (dispatch, term) => {
  const url = Config.serverAddress + `/weather/solar-term/${term}`;
  return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(receiveSolarTermData(term, json)));
};

let receiveDateData = (month, date, data) => ({
  type: RECEIVE_DATA_DATE,
  month,
  date,
  data
});

let fetchDateData = (dispatch, month, date) => {
  const url = Config.serverAddress + `/weather/date/${month}/${date}`;
  console.log(url);
  return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(receiveDateData(month, date, json)));
};

export let fetchDataNeeded = () => (dispatch, getState) => {
  dispatch(startFetch());

  const state = getState();
  let promises = [];

  switch (state.chart.type) {
    case 'BY_YEAR': {
      Object.keys(state.chart.years)
        .filter(i => state.chart.years[i])
        .filter(i => typeof state.data.years[i] === 'undefined')
        .map(i => promises.push(fetchYearData(dispatch, i)));
      break;
    }
    case 'BY_SOLARTERM': {
      Object.keys(state.chart.solarTerm)
        .filter(i => state.chart.solarTerm[i])
        .filter(i => typeof state.data.solarTerm[i] === 'undefined')
        .map(i => promises.push(fetchSolarTermData(dispatch, i)));
      break;
    }
    case 'BY_DATE': {
      if (typeof state.data.date[state.chart.date.month] === 'undefined' || typeof state.data.date[state.chart.date.month][state.chart.date.date] === 'undefined')
        promises.push(fetchDateData(dispatch, state.chart.date.month, state.chart.date.date));
      // Object.keys(state.chart.date)
      //   .map(i => Object.keys(state.chart.date[i])
      //     .filter(j => state.chart.date[i][j])
      //     .filter(j => typeof state.data.date[i] === 'undefined' || typeof state.data.date[i][j] === 'undefined')
      //     .map(j => promises.push(fetchDateData(dispatch, i, j)))
      //   );
      break;
    }
  }

  return Promise.all(promises)
    .then(() => dispatch(completeFetch()));
};
