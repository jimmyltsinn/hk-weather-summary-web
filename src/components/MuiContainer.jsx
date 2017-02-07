import React from 'react';

import {connect} from 'react-redux';
import {getTheme} from '../redux/selectors/ui';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {lightBlue500, lightBlue700, grey900, grey500} from 'material-ui/styles/colors';

import Main from './Main';

const MuiContainer = (props) => (
  <MuiThemeProvider muiTheme={props.theme}>
    <Main />
  </MuiThemeProvider>
);

MuiContainer.propTypes = {
  theme: React.PropTypes.object
};

const mapStateToProps = (state) => {
  console.log('mapState of mui-container')
  return ({
  theme: getTheme(state)
});};

export default connect(mapStateToProps)(MuiContainer);
