import fetch from 'isomorphic-fetch';

import Config from '../../config.js';

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';

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

export let fetchData = (dataType, entry) => dispatch => {
  dispatch(requestData(dataType, entry));

  let url = Config.serverAddress + '/weather/';
  switch (dataType) {
    case DataTypes.BY_SOLARTERM:
      url += `solar-term/${entry.id}`;
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
