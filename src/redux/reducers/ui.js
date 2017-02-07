import { combineReducers } from 'redux';

import {SELECT_UI_THEME, RESIZE_WINDOW} from '../actions/ui';
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

function window(state = {width: 0, height: 0}, action) {
  switch (action.type) {
    case RESIZE_WINDOW: return {width: action.width, height: action.height};
    default: return state;
  }
}

const ui = combineReducers({
	theme,
  window
});

export default ui;
