import React from 'react';

import {connect} from 'react-redux';

import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
// import {ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import muiThemeable from 'material-ui/styles/muiThemeable';

import ChartTypeComponent from './ControlBar/ChartTypeComponent';
import YearRangeComponent from './ControlBar/YearRangeComponent';
import SolarTermComponent from './ControlBar/SolarTermComponent';
import YearComponent from './ControlBar/YearComponent';
import DateComponent from './ControlBar/DateComponent';
import LineComponent from './ControlBar/LineComponent';
import YAxisScaleComponent from './ControlBar/YAxisScaleComponent';

const ControlBar = (props) => {
  const selectChartType = (
    <ChartTypeComponent key="selectChartType" />
  );

  const selectYearRange = (
    <YearRangeComponent key="selectYearRange" />
  );

  const selectSolarTerm = (
    <SolarTermComponent key="selectSolarTerm" />
  );

  const selectYear = (
    <YearComponent key="selectYear" />
  );

  const selectDate = (
    <DateComponent key="selectDate" />
  );

  const selectLine = (
    <LineComponent key="selectLine" />
  );

  const selectYAxisScale = (
    <YAxisScaleComponent key="selectYAxisScale" />
  );

  return (
    <Toolbar>
      <ToolbarGroup>
        {selectChartType}
        {selectLine}
        {selectYAxisScale}
      </ToolbarGroup>
      <ToolbarGroup>
        {props.chartType == 'BY_YEAR' ? [selectYear] : props.chartType == 'BY_SOLARTERM' ? [selectYearRange, selectSolarTerm] : [selectYearRange, selectDate]}
      </ToolbarGroup>
    </Toolbar>
  );
};

ControlBar.propTypes = {
  chartType: React.PropTypes.string
};

const mapStateToProps = (state) => ({
  chartType: state.chart.type
});

// const mapDispatchToProps = (dispatch) => ({
// });

export default muiThemeable()(connect(
  mapStateToProps
  // mapDispatchToProps
)(ControlBar));
