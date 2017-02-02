import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import reducer from './redux/reducers';
import MuiContainer from './components/MuiContainer';

let store = createStore(reducer);

injectTapEventPlugin();

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
	<Provider store={store}>
		<MuiContainer />
	</Provider>
	, document.getElementById('root')
);
