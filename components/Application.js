import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignUp from './SignUp';
import Secured from './Secured';

class Application extends Component {
	render() {
		if (this.props.isLoggedIn) {
			console.log(this.props)
			return <Secured />;
		} else {
			return <SignUp />;
		}
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		isLoggedIn: state.auth.isLoggedIn
	};
}

export default connect(mapStateToProps)(Application);
