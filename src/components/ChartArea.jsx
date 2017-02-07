import React from 'react';

import {connect} from 'react-redux';

import Paper from 'material-ui/Paper';

import Chart from './ChartArea/Chart';

const style = {
  textAlign: 'center',
};

class ChartArea extends React.Component {
  constructor() {
    super();
    this.style = style;
  }

  render() {
    return (
      <Paper
        style={style}
        zDepth={0}>
        <Chart />
      </Paper>
    );
  }
}

// const mapStateToProps = (state) => ({
//   state
// });
//
// const mapDispatchToProps = (dispatch) => ({
//   dispatch
// });

export default connect(
  // mapStateToProps,
  // mapDispatchToProps
)(ChartArea);
