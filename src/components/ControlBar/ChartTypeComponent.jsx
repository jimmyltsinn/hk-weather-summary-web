import React from 'react';

import {connect} from 'react-redux';
import { ChartTypes, selectChartType } from '../../redux/actions';

import {MenuItem, DropDownMenu} from 'material-ui';

const ChartTypeComponent = (props) => (
  <DropDownMenu value={props.chartType} onChange={props.handleChartTypeChange}>
    {Object.keys(ChartTypes).map(i => <MenuItem key={i} value={i} primaryText={ChartTypes[i]}/>)}
  </DropDownMenu>
);

ChartTypeComponent.propTypes = {
  chartType: React.PropTypes.string.isRequired,
  handleChartTypeChange: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  chartType: state.chart.type
});

const mapDispatchToProps = (dispatch) => ({
  handleChartTypeChange: (event, index, value) => dispatch(selectChartType(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChartTypeComponent);
