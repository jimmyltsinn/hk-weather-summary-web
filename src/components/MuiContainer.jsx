import React from 'react';

import {connect} from 'react-redux';
import {getTheme} from '../redux/selectors/ui';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Main from './Main';

const MuiContainer = (props) => (
  <MuiThemeProvider muiTheme={props.theme}>
    <Main />
  </MuiThemeProvider>
);

MuiContainer.propTypes = {
  theme: React.PropTypes.object
};

const mapStateToProps = (state) => ({
  theme: getTheme(state)
});

export default connect(mapStateToProps)(MuiContainer);
