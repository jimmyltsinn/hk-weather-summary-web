import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {resizeWindow} from './redux/actions/ui';

import reducer from './redux/reducers';
import MuiContainer from './components/MuiContainer';

let store = createStore(reducer);

injectTapEventPlugin();

console.log('[Redux] Init', store.getState());
store.subscribe(() => console.log('[Redux] Update', store.getState()));

store.dispatch(resizeWindow(window.innerWidth, window.innerHeight));
window.addEventListener('resize', () => {
  store.dispatch(resizeWindow(window.innerWidth, window.innerHeight));
});

ReactDOM.render(
	<Provider store={store}>
		<MuiContainer />
	</Provider>
	, document.getElementById('root')
);
