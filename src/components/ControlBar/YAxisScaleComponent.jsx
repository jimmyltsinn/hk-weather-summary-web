import React from 'react';

import {connect} from 'react-redux';
import {selectYAxisScale} from '../../redux/actions/chart';

import {ToolbarGroup} from 'material-ui/Toolbar';
import Checkbox from 'material-ui/Checkbox';

const style = {
  checkboxLabel: {
    whiteSpace: 'nowrap'
  }
};

const YAxisScale = (props) => (
  <ToolbarGroup>
    <Checkbox
      labelStyle={style.checkboxLabel}
      label='Auto y-axis scale'
      checked={props.check}
      onCheck={props.handleChange}
      />
  </ToolbarGroup>
);

YAxisScale.propTypes = {
  check: React.PropTypes.bool.isRequired,
  handleChange: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  check: state.chart.yAxisScale === 'auto'
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (event, checked) => dispatch(selectYAxisScale(checked ? 'auto' : 'fixed'))
});

export default connect(mapStateToProps, mapDispatchToProps)(YAxisScale);
