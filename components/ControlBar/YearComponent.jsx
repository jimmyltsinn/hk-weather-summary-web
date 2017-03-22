import React from 'react';

import {connect} from 'react-redux';
import {toggleYear} from '../../redux/actions/chart';

import {ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import {FlatButton, Checkbox} from 'material-ui';
import List, {ListItem} from 'material-ui/List';
import Popover, {PopoverAnimationVertical, PopoverAnimationHorizontal} from 'material-ui/Popover';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

import {range} from '../../util';

const pageStep = 12;

class Component extends React.Component {
  constructor() {
    super();
    let state = {};
    range(1886, 2016, pageStep).map(i => state[i] = {});
    this.state = state;
  }

  buttonLabel() {
    let checkedList = Object.keys(this.props.checked).filter(i => this.props.checked[i]).map(i => this.props.checked[i] ? i : '');
    let buttonLabel = checkedList.slice(0, 3).join(', ');
    if (checkedList.length > 3) buttonLabel += ' ...';
    if (buttonLabel == '') buttonLabel = 'Select';

    return buttonLabel;
  }

  render() {
    return (
      <ToolbarGroup>
        <ToolbarTitle text="Years" />
        <FlatButton
          label={this.buttonLabel()}
          onTouchTap={(event) => {
            event.preventDefault();
            this.setState({
              open: true,
              anchorEl: event.currentTarget
            });
          }} />
          <Popover
            open={this.state.open ? true : false}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={() => this.setState({open: false})}
            animation={PopoverAnimationVertical}>
            <List>
              {range(1886, 2016, pageStep).map(i => (
                <ListItem
                  key={i}
                  primaryText={i + ' -'}
                  style={{fontWeight: ((range(i, i + pageStep - 1).filter(i => this.props.checked[i])).length > 0 ? 'bold' : 'normal')}}
                  rightIcon={<ChevronRight />}
                  onTouchTap={(event) => {
                    event.preventDefault();
                    let updatedState = {};
                    updatedState[i] = {
                      open: true,
                      anchorEl: event.currentTarget
                    };
                    this.setState(updatedState);
                  }}
                  />
              ))}
            </List>
          </Popover>
          {/* 2nd level menu */}
          {range(1886, 2016, pageStep).map(i => (
            <Popover
              key={i}
              open={this.state[i].open ? true : false}
              anchorEl={this.state[i].anchorEl}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
              onRequestClose={() => {
                let updatedState = {};
                updatedState[i] = {
                  open: false
                };
                this.setState(updatedState);
              }}
              animation={PopoverAnimationHorizontal}>
              <List>
                {range(i, i + pageStep - 1).filter(i => i < 1940 || i > 1946).map(i => i <= 2016 ? (
                  <ListItem key={i} primaryText={i} leftCheckbox={
                      <Checkbox
                        checked={this.props.checked[i] ? true : false}
                        onCheck={(element, checked) => this.props.toggleYear(i, checked)}
                      />} />
                ) : '')}
              </List>
            </Popover>
          ))}
      </ToolbarGroup>
    );
  }
}

Component.propTypes = {
  checked: React.PropTypes.object.isRequired,
  toggleYear: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  checked: state.chart.years
});

const mapDispatchToProps = (dispatch) => ({
  toggleYear: (value, checked) => dispatch(toggleYear(value, checked))
});


export default connect(mapStateToProps, mapDispatchToProps)(Component);
