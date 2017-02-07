import _ from 'lodash';
import React from 'react';

import {connect} from 'react-redux';
import {selectChartDateMonth, selectChartDateDate} from '../../redux/actions/chart';

import {MenuItem, DropDownMenu} from 'material-ui';

let zeroPaddingStr = (num, len) => ((new Array(len).join('0') + num).slice(-len));


class YearComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <DropDownMenu value={this.props.month} onChange={this.props.handleMonthChange}>
          {_.range(1, 13).map(i => <MenuItem key={i} value={i} primaryText={zeroPaddingStr(i, 2)} />)}
        </DropDownMenu>
        <DropDownMenu value={this.props.date} onChange={this.props.handleDateChange}>
          {_.range(1, this.props.month == 2 ? 30 : [4, 6, 9, 11].includes(this.props.month) ? 31 : 32).map(i => <MenuItem key={i} value={i} primaryText={zeroPaddingStr(i, 2)} />)}
        </DropDownMenu>
      </div>
    );
  }
}

YearComponent.propTypes = {
  month: React.PropTypes.number.isRequired,
  date: React.PropTypes.number.isRequired,
  handleMonthChange: React.PropTypes.func.isRequired,
  handleDateChange: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  month: state.chart.date.month,
  date: state.chart.date.date
});

const mapDispatchToProps = (dispatch) => ({
  handleMonthChange: (event, index, value) => dispatch(selectChartDateMonth(value)),
  handleDateChange: (event, index, value) => dispatch(selectChartDateDate(value))
});


export default connect(mapStateToProps, mapDispatchToProps)(YearComponent);
