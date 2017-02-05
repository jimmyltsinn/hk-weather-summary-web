import React from 'react';

import {connect} from 'react-redux';

import { AppBar, FlatButton } from 'material-ui';

const Header = () => (
	<AppBar
		title="HK Weather Summary"
		iconElementLeft={<div></div>}
		iconElementRight={<FlatButton label="Change Theme" onTouchTap={() => alert('haha')} disabled={true} />} />
);

export default Header;
