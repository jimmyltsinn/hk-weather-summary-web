export const SELECT_UI_THEME = 'SELECT_UI_THEME';
export const RESIZE_WINDOW = 'SCREEN_RESIZE';

export let selectTheme = theme => ({
  meta: {
    analytics: {
      category: 'ui'
    }
  },
  type: SELECT_UI_THEME,
  theme
});

export let resizeWindow = (width, height) => ({
  type: RESIZE_WINDOW,
  width,
  height
});
