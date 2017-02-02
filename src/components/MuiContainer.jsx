import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {lightBlue500, lightBlue700} from 'material-ui/styles/colors';

import Main from './Main';

const theme = getMuiTheme({
  palette: {
    primary1Color: lightBlue500,
    primary2Color: lightBlue700,
    pickerHeaderColor: lightBlue500,
  },
  appBar: {
    height: 50,
  },
});


class MuiContainer extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  changeTheme() {
    this.setState({
      // theme: getMuiTheme(this.state.theme == getMuiTheme(lightBaseTheme) ? darkBaseTheme : lightBaseTheme)
    });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <Main />
      </MuiThemeProvider>
    );
  }
}

export default MuiContainer;
