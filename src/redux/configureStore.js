import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import reducer from './reducers';

import {resizeWindow} from './actions/ui';
import {fetchSolarTermMap} from './actions/data';

import {fetchDataNeeded} from './actions/data';

const configureStore = () => {
  let store = createStore(
    reducer,
    applyMiddleware(
      thunkMiddleware
      // createLogger()
    )
  );

  store.dispatch(resizeWindow(window.innerWidth, window.innerHeight));
  store.dispatch(fetchSolarTermMap());

  window.addEventListener('resize', () => {
    store.dispatch(resizeWindow(window.innerWidth, window.innerHeight));
  });

  // store.dispatch(fetchDataNeeded());

  return store;
};

export default configureStore;
