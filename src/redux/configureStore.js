import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import trackerMiddleware from './middleware/tracker';

import reducer from './reducers';

import {resizeWindow} from './actions/ui';
import {fetchSolarTermMap} from './actions/data';

import {persistStore, autoRehydrate} from 'redux-persist';

const configureStore = () => {
  let store = createStore(
    reducer,
    compose(
      applyMiddleware(
        thunkMiddleware,
        trackerMiddleware,
        createLogger()
      ),
      autoRehydrate()
    )
  );

  persistStore(store, {
    whitelist: ['chart']
  });

  store.dispatch(resizeWindow(window.innerWidth, window.innerHeight));
  store.dispatch(fetchSolarTermMap());

  window.addEventListener('resize', () => {
    store.dispatch(resizeWindow(window.innerWidth, window.innerHeight));
  });

  // store.dispatch(fetchDataNeeded());

  return store;
};

export default configureStore;
