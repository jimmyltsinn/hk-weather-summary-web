import _ from 'lodash';
import React from 'react';

import {connect} from 'react-redux';
import {toggleYear} from '../../redux/actions';

import {FlatButton, Checkbox} from 'material-ui';
import List, {ListItem} from 'material-ui/List';
import Popover, {PopoverAnimationVertical, PopoverAnimationHorizontal} from 'material-ui/Popover';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const pageStep = 12;

class Component extends React.Component {
  constructor() {
    super();
    let state = {};
    _.range(1900, 2017, pageStep).map(i => state[i] = {});
    this.state = state;
  }

  render() {
    return (
      <div>
        <FlatButton
          label="Years"
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
              {_.range(1900, 2016, pageStep).map(i => (
                <ListItem
                  key={i}
                  primaryText={i}
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
          {_.range(1900, 2017, pageStep).map(i => (
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
                {_.range(i, i + pageStep).map(i => i <= 2016 ? (
                  <ListItem key={i} primaryText={i} leftCheckbox={
                      <Checkbox
                        checked={this.props.checked[i] ? true : false}
                        onCheck={(element, checked) => this.props.toggleYear(i, checked)}
                      />} />
                ) : '')}
              </List>
            </Popover>

          ))}
      </div>
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
