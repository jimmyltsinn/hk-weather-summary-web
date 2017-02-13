import React from 'react';

import {connect} from 'react-redux';
import {fetchDataNeeded} from '../redux/actions/data';

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

  componentWillMount() {
    this.props.dispatch(fetchDataNeeded());
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.state.chart !== nextProps.state.chart)
      this.props.dispatch(fetchDataNeeded());
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

ChartArea.propTypes = {
  state: React.PropTypes.object,
  dispatch: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  state
});
//
// const mapDispatchToProps = (dispatch) => ({
//   dispatch
// });

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(ChartArea);
