import React from 'react';

import {connect} from 'react-redux';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import ChartTypeComponent from './ControlBar/ChartTypeComponent'; 
import YearRangeComponent from './ControlBar/YearRangeComponent';

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

  return (
    <Toolbar label="Default">
      {SelectChartType}
      {SelectYearRange}
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
