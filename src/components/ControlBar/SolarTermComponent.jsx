import React from 'react';

import {connect} from 'react-redux';
import {toggleSolarTerm} from '../../redux/actions';

import {FlatButton, Checkbox} from 'material-ui';
import {GridList, GridTile} from 'material-ui/GridList';
import {List, ListItem} from 'material-ui/List';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';

let unorm = require('unorm');

const style = {
  gridList: {
    width: 400,
    overflowY: 'auto'
  },
  gridTile: {

  }
};

class SolarTermComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div>
        <FlatButton
          label="Solar Terms"
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
            <GridList
              style={style.gridList}
              cellHeight='auto'
              cols={3}>
              {Object.keys(this.props.map).map(i => (
                <ListItem
                  style={style.gridTile}
                  key={i}
                  leftCheckbox={
                    <Checkbox
                      checked={this.props.checked[i] ? true : false}
                      onCheck={(element, checked) => this.props.toggleSolarTerm(i, checked)}
                      />
                  }
                  primaryText={this.props.map[i]} />))
                }
            </GridList>
          </Popover>
    </div>
    );
  }
}

SolarTermComponent.propTypes = {
  map: React.PropTypes.object.isRequired,
  checked: React.PropTypes.object.isRequired,
  toggleSolarTerm: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  // chartType: state.chart.type
  map: {  // TODO fetch from server
    1 : unorm.nfd('小寒'),
    2 : unorm.nfd('大寒'),
    3 : unorm.nfd('立春'),
    4 : unorm.nfd('雨水'),
    5 : unorm.nfd('驚蟄'),
    6 : unorm.nfd('春分'),
    7 : unorm.nfd('清明'),
    8 : unorm.nfd('穀雨'),
    9 : unorm.nfd('立夏'),
    10 : unorm.nfd('小滿'),
    11 : unorm.nfd('芒種'),
    12 : unorm.nfd('夏至'),
    13 : unorm.nfd('小暑'),
    14 : unorm.nfd('大暑'),
    15 : unorm.nfd('立秋'),
    16 : unorm.nfd('處暑'),
    17 : unorm.nfd('白露'),
    18 : unorm.nfd('秋分'),
    19 : unorm.nfd('寒露'),
    20 : unorm.nfd('霜降'),
    21 : unorm.nfd('立冬'),
    22 : unorm.nfd('小雪'),
    23 : unorm.nfd('大雪'),
    24 : unorm.nfd('冬至')
  },
  checked: state.chart.solarTerm
});

const mapDispatchToProps = (dispatch) => ({
  toggleSolarTerm: (value, checked) => dispatch(toggleSolarTerm(value, checked))
});

export default connect(mapStateToProps, mapDispatchToProps)(SolarTermComponent);
