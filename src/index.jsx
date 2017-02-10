import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import reducer from './redux/reducers';
import MuiContainer from './components/MuiContainer';

import init from './init';

let store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
);

init(store);

injectTapEventPlugin();


ReactDOM.render(
  <Provider store={store}>
    <MuiContainer />
  </Provider>
  , document.getElementById('root')
);
