import React from 'react';

import Paper from 'material-ui/Paper';

import muiThemeable from 'material-ui/styles/muiThemeable';

const Footer = (props) => (
  <Paper zDepth={2} style={props.muiTheme.footer}>
    <div>A page built with React, Redux and material-ui. </div>
    // <div>Data are retrieved from Hong Kong Observatory. </div>
    // <div>This site is only for educational and academic uses. </div>
  </Paper>
);

Footer.propTypes = {
  muiTheme: React.PropTypes.object
};

export default muiThemeable()(Footer);
