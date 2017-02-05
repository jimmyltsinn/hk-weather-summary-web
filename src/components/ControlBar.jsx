import React from 'react';

import {connect} from 'react-redux';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import ChartTypeComponent from './ControlBar/ChartTypeComponent';
import YearRangeComponent from './ControlBar/YearRangeComponent';
import SolarTermComponent from './ControlBar/SolarTermComponent';
import YearComponent from './ControlBar/YearComponent';
import DateComponent from './ControlBar/DateComponent';

const ControlBar = () => {
  const SelectChartType = (
    <ToolbarGroup firstChild={true}>
      <ChartTypeComponent />
    </ToolbarGroup>
  );

  const SelectYearRange = (
    <ToolbarGroup>
      <YearRangeComponent />
    </ToolbarGroup>
  );

  const SelectSolarTerm = (
    <ToolbarGroup>
      <SolarTermComponent />
    </ToolbarGroup>
  );

  const SelectYear = (
    <ToolbarGroup>
      <YearComponent />
    </ToolbarGroup>
  );

  const SelectDate = (
    <ToolbarGroup>
      <DateComponent />
    </ToolbarGroup>
  ); 

  return (
    <Toolbar label="Default">
      {SelectChartType}
      {SelectYearRange}
      {SelectSolarTerm}
      {SelectYear}
      {SelectDate}
    </Toolbar>
  );
};

ControlBar.propTypes = {
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlBar);
