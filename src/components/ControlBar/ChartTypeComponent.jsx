import React from 'react';

import {connect} from 'react-redux';
import {ChartTypes, selectChartType} from '../../redux/actions';

import {ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import {MenuItem, DropDownMenu} from 'material-ui';

const ChartTypeComponent = (props) => (
  <ToolbarGroup>
    <ToolbarTitle text="Chart Type" />
    <DropDownMenu value={props.chartType} onChange={props.handleChartTypeChange} style={{height: '100%'}}>
      {Object.keys(ChartTypes).map(i => <MenuItem key={i} value={i} primaryText={ChartTypes[i]}/>)}
    </DropDownMenu>
  </ToolbarGroup>
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
