import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiContainer from './components/MuiContainer';

import configureStore from './redux/configureStore';

let store = configureStore();

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <MuiContainer />
  </Provider>
  , document.getElementById('root')
);
