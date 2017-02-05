import React from 'react';

import {connect} from 'react-redux';

import Paper from 'material-ui/Paper';

const style = {
	height: '100%'
};

class ChartArea extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Paper
				style={style}
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
