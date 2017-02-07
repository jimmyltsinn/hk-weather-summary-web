import { createSelector } from 'reselect';
import {grey900, grey500} from 'material-ui/styles/colors';

export const getTheme = createSelector(state => state.ui.theme, theme => {
	console.log("[Selector] getTheme");
	return Object.assign({}, theme, {
		footer: Object.assign({}, theme.toolbar, {
			background: grey900,
			color: grey500,
			textAlign: 'center',
			paddingTop: 32,
			height: 128
		})
	});
});

export const getContentWidth = createSelector(state => state.ui.window, getTheme, (window) => (
	window.width
));

export const getContentHeight = createSelector(state => state.ui.window, getTheme, (window, theme) => (
	Math.max(
		window.height - theme.appBar.height - theme.toolbar.height - theme.footer.height,
		400
	)
));

export const getContentSize = createSelector(getContentWidth, getContentHeight, (width, height) => ({width, height}));
