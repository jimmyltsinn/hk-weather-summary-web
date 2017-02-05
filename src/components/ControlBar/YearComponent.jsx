import React from 'react';

import {connect} from 'react-redux';
import {} from '../../redux/actions'

class Component extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>(Year)</div>
    );
  }
}

Component.propTypes = {
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});


export default connect(mapStateToProps, mapDispatchToProps)(Component);
