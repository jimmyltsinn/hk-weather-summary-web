import React from 'react';

import {connect} from 'react-redux';
import {toggleSolarTerm} from '../../redux/actions/chart';

import {ToolbarGroup} from 'material-ui/Toolbar';
// import {ToolbarTitle} from 'material-ui/Toolbar';
import {RaisedButton as Button, Checkbox} from 'material-ui';
import {GridList} from 'material-ui/GridList';
import {ListItem} from 'material-ui/List';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import CircularProgress from 'material-ui/CircularProgress';

const style = {
  popover: {
    width: 400
  },
  gridList: {
    width: 400,
    overflowX: 'hidden',
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

  buttonLabel() {
    return 'Solar Terms';
    // let checkedList = Object.keys(this.props.checked).filter(i => this.props.checked[i]).map(i => this.props.checked[i] ? this.props.map[i] : '');
    // let buttonLabel = checkedList.slice(0, 3).join(', ');
    // if (checkedList.length > 3) buttonLabel += ' ...';
    // if (buttonLabel == '') buttonLabel = 'Select';
    //
    // return buttonLabel;
  }

  render() {
    const solarTermList = Object.keys(this.props.map).length ? (
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
                onCheck={(event, checked) => this.props.toggleSolarTerm(i, checked)}
                />
            }
            primaryText={this.props.map[i]} />))
          }
      </GridList>
    ) : (
      <div style={{textAlign: 'center'}}>
      <CircularProgress />
      </div>
    );
    // <ToolbarTitle text="Solar Terms" />
    return (
      <ToolbarGroup>
        <Button
          label={this.buttonLabel()}
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
            style={style.popover}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={() => this.setState({open: false})}
            animation={PopoverAnimationVertical}>
            {solarTermList}
          </Popover>
    </ToolbarGroup>
    );
  }
}

SolarTermComponent.propTypes = {
  map: React.PropTypes.object.isRequired,
  checked: React.PropTypes.object.isRequired,
  toggleSolarTerm: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  map: state.data.solarTerm.map,
  checked: state.chart.solarTerm
});

const mapDispatchToProps = (dispatch) => ({
  toggleSolarTerm: (value, checked) => dispatch(toggleSolarTerm(value, checked))
});

export default connect(mapStateToProps, mapDispatchToProps)(SolarTermComponent);
