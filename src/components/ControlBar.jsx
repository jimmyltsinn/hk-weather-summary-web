import React from 'react';

import {connect} from 'react-redux';
import { selectChartType } from '../redux/actions';

import {CHART_TYPES} from '../constants';

import {MenuItem, DropDownMenu} from 'material-ui';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const ControlBar = (props) => {
  const selectChartType = (
    <ToolbarGroup firstChild={true}>
      <DropDownMenu value={props.chartType} onChange={props.handleChartTypeChange}>
        {Object.keys(CHART_TYPES).map(i => <MenuItem key={i} value={i} primaryText={CHART_TYPES[i]}/>)}
      </DropDownMenu>
    </ToolbarGroup>
  );

  // const yearRange

  return (
    <Toolbar label="Default">
      {selectChartType}
      <ToolbarGroup>
      </ToolbarGroup>
    </Toolbar>
  );
};

ControlBar.propTypes = {
  chartType: React.PropTypes.string.isRequired,
  handleChartTypeChange: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  chartType: state.chart.type
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleChartTypeChange: (event, index, value) => dispatch(selectChartType(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlBar);
