import React from 'react';

import {connect} from 'react-redux';

import Paper from 'material-ui/Paper';

class ChartArea extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Paper
				zDepth={0}>
			</Paper>
		);
	}
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ChartArea);
