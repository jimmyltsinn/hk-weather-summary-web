import React from 'react';

import Paper from 'material-ui/Paper';

import muiThemeable from 'material-ui/styles/muiThemeable';

const Footer = (props) => (
	<Paper zDepth={2} style={props.muiTheme.footer}>
		<div>A page built with React, Redux and material-ui. </div>
    <div>All data are retrieved from Hong Kong Observatory. Data between year 1940 and 1946 is not available from HKO because of WWII. </div>
    <div>Umm ... I am not sure about the copyright issue. lol</div>
	</Paper>
);

Footer.propTypes = {
  muiTheme: React.PropTypes.object
};

export default muiThemeable()(Footer);
