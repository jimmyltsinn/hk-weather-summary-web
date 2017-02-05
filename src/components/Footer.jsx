import React from 'react';

import Paper from 'material-ui/Paper';

import muiThemeable from 'material-ui/styles/muiThemeable';
import {grey900, grey500} from 'material-ui/styles/colors';

const style = (muiTheme) => {
	let ret = Object.assign({}, muiTheme.toolbar);
	ret.background = grey900;
	ret.color = grey500;
	ret.textAlign = 'center';
	ret.paddingTop = 32;
	ret.height = 128;
	return ret;
};

const Footer = (props) => (
	<Paper zDepth={2} style={style(props.muiTheme)}>
		<div>This site is built with React, Redux with material-ui. </div>
	</Paper>
);

Footer.propTypes = {
	muiTheme: React.PropTypes.object
};

export default muiThemeable()(Footer);
