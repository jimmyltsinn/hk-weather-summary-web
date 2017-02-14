import React from 'react';

import {connect} from 'react-redux';
import {fetchDataNeeded} from '../redux/actions/data';
import {getContentWidth, getContentHeight} from '../redux/selectors/ui';

import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';

import Chart from './ChartArea/Chart';

class ChartArea extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.dispatch(fetchDataNeeded());
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.state.chart !== nextProps.state.chart)
      this.props.dispatch(fetchDataNeeded());
  }

  render() {
    const style = {
      width: this.props.width,
      height: this.props.height,
      verticalAlign: 'middle',
      textAlign: 'center',
      display: 'table-cell'
    };
    return (
      <Paper
        style={style}
        zDepth={0}>
        {this.props.isFetching ? (
          <div>
          <CircularProgress size={80} thickness={5} />
          <div>Now Loading ... 💤</div>
          </div>
        ) : <Chart />}
      </Paper>
    );
  }
}

ChartArea.propTypes = {
  state: React.PropTypes.object,
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
  dispatch: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  state,
  isFetching: state.data.status.isFetching,
  width: getContentWidth(state),
  height: getContentHeight(state),
});
//
// const mapDispatchToProps = (dispatch) => ({
//   dispatch
// });

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(ChartArea);
