import { combineReducers } from 'redux';

import {SELECT_UI_THEME} from '../actions/ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {lightBlue500, lightBlue700} from 'material-ui/styles/colors';

function theme(state = getMuiTheme({
  palette: {
    primary1Color: lightBlue500,
    primary2Color: lightBlue700,
    pickerHeaderColor: lightBlue500
	}}), action) {
	switch (action.type) {
		case SELECT_UI_THEME: return action.theme;
		default: return state;
	}
}

const ui = combineReducers({
	theme
});

export default ui;
