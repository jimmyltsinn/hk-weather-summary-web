import { createSelector } from 'reselect';
import {grey900, grey500} from 'material-ui/styles/colors';

export const getTheme = createSelector(state => state.ui.theme, theme => {
	console.log("[Selector] getTheme");
	let ret = Object.assign({}, theme);
	let footer = Object.assign({}, theme.toolbar);
	footer.background = grey900;
	footer.color = grey500;
	footer.textAlign = 'center';
	footer.paddingTop = 32;
	footer.height = 128;
	ret.footer = footer;
	return ret;
});
