import React from 'react';

import {connect} from 'react-redux';
import {LineOptions, toggleLine} from '../../redux/actions/chart'

import {RaisedButton as Button, Checkbox} from 'material-ui';
import List, {ListItem} from 'material-ui/List';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import {ToolbarGroup} from 'material-ui/Toolbar';

class LineComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  buttonLabel() {
    return 'Line Options';
  }

  render() {
    return (
      <ToolbarGroup>
          <Button
            label={this.buttonLabel()}
            onTouchTap={event => {
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
                {Object.keys(LineOptions).map(id => (
                  <ListItem key={id} primaryText={LineOptions[id]} leftCheckbox={
                      <Checkbox
                        checked={this.props.checked[id] ? true : false}
                        onCheck={(element, checked) => this.props.toggleLine(id, checked)}
                      />} />
                ))}
              </List>
            </Popover>
      </ToolbarGroup>
      );
  }
}

// <RaisedButton label="Create Broadcast" primary={true} />

LineComponent.propTypes = {
  checked: React.PropTypes.object,
  toggleLine: React.PropTypes.func
};

const mapStateToProps = (state) => ({
  checked: state.chart.lines
});

const mapDispatchToProps = (dispatch) => ({
  toggleLine: (line, checked) => dispatch(toggleLine(line, checked))
});

export default connect(mapStateToProps, mapDispatchToProps)(LineComponent);
