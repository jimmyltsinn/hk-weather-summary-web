import React from 'react';

import {connect} from 'react-redux';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import muiThemeable from 'material-ui/styles/muiThemeable';

import ChartTypeComponent from './ControlBar/ChartTypeComponent';
import YearRangeComponent from './ControlBar/YearRangeComponent';
import SolarTermComponent from './ControlBar/SolarTermComponent';
import YearComponent from './ControlBar/YearComponent';
import DateComponent from './ControlBar/DateComponent';

const ControlBar = (props) => {
  const SelectChartType = (
    <ChartTypeComponent key="selectChartType" />
  );

  const SelectYearRange = (
    <YearRangeComponent key="selectYearRange" />
  );

  const SelectSolarTerm = (
    <SolarTermComponent key="selectSolarTerm" />
  );

  const SelectYear = (
    <YearComponent key="selectYear" />
  );

  const SelectDate = (
    <DateComponent key="selectDate" />
  );

  return (
    <Toolbar>
      <ToolbarGroup>
        {SelectChartType}
      </ToolbarGroup>
      <ToolbarGroup>
        {props.chartType == 'BY_YEAR' ? [SelectYear] : props.chartType == 'BY_SOLARTERM' ? [SelectYearRange, SelectSolarTerm] : [SelectYearRange, SelectDate]}
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

const mapDispatchToProps = (dispatch) => ({
});

export default muiThemeable()(connect(mapStateToProps, mapDispatchToProps)(ControlBar));
