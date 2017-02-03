import React from 'react';

import {connect} from 'react-redux';
import {selectChartYearRange} from '../../redux/actions';

import {FlatButton} from 'material-ui';
import Paper from 'material-ui/Paper';

import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';

import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

const style = {
  paper: {
    height: 40,
    width: 150,
    padding: 25,
    overflowX: 'hidden',
    overflowY: 'hidden'
  }
};

const yearRange = {
  max: 2016,
  min: 1900
};

class YearRangeComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      open: false,
      values: props.values
    };
  }

  handleChange(values) {
    this.setState({values: values});
  }

  render() {
    return (
      <div>
        <FlatButton
          label={this.props.buttonText}
          onTouchTap={(event) => {
            event.preventDefault();
            this.setState({
              open: true,
              anchorEl: event.currentTarget
            });
          }} />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={() => this.setState({open: false})}
          animation={PopoverAnimationVertical}>
          <Paper style={style.paper}>
              <InputRange
                minValue={yearRange.min}
                maxValue={yearRange.max}
                value={this.state.values}
                onChange={this.handleChange.bind(this)}
                onChangeComplete={this.props.handleChange} />
            </Paper>
        </Popover>
      </div>
    );
  }
}

YearRangeComponent.propTypes = {
  values: React.PropTypes.objectOf(React.PropTypes.number),
  buttonText: React.PropTypes.string,
  handleChange: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  values: state.chart.yearRange,
  buttonText: `Year: ${state.chart.yearRange.min} - ${state.chart.yearRange.max}`
});

const mapDispatchToProps = (dispatch) => ({handleChange: values => dispatch(selectChartYearRange(values))});

export default connect(mapStateToProps, mapDispatchToProps)(YearRangeComponent);
