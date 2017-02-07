import React from 'react';

import Paper from 'material-ui/Paper';

import muiThemeable from 'material-ui/styles/muiThemeable';

const Footer = (props) => (
	<Paper zDepth={2} style={props.muiTheme.footer}>
		<div>This site is built with React, Redux with material-ui. </div>
	</Paper>
);

Footer.propTypes = {
	muiTheme: React.PropTypes.object
};

export default muiThemeable()(Footer);
