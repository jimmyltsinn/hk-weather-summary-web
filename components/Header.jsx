import React from 'react';

import { AppBar } from 'material-ui';
import IconButton from 'material-ui/IconButton';

import 'react-input-range/lib/css/index.css';

const Header = () => (
	<AppBar
		title="HK Weather Summary"
		iconElementLeft={<div></div>}
		iconElementRight={<IconButton
			iconClassName="fa fa-github"
			tooltip="Fork me at Github"
			href="//www.github.com/jimmyltsinn/hk-weather-summary-web" />}

		/>
);

export default Header;
