import React from 'react';

import { AppBar, FlatButton } from 'material-ui';
import ControlBar from './ControlBar';

import { connect } from 'react-redux';
import { selectChartType } from '../redux/actions';

class Main extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     chartType: "1"
  //     // theme: getMuiTheme(lightBaseTheme)
  //   };
  // }

  // handleChartTypeChange(event, index, value) {
  //   this.setState({
  //     chartType: value
  //   });
  // }

  render() {
    return (
      <div>
        <AppBar
          title="HK Weather Summary"
          iconElementLeft={<div></div>}
          iconElementRight={<FlatButton label="Change Theme" onTouchTap={this.handleChangeTheme} disabled={true} />} />
        <ControlBar />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // chartType: state.chart.type
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChartTypeChange: (event, index, value) => dispatch(selectChartType(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
