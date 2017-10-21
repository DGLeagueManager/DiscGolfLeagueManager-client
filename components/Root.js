import React, { Component } from 'react';
import { connect } from 'react-redux';
import Application from './Application';
import Authenticate from './authenticate/Authenticate';

class Root extends Component {
  render() {
    if (this.props.isLoggedIn) {
        return <Application />;
    } else {
        return <Authenticate />;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
	return {
		isLoggedIn: state.auth.isLoggedIn
	};
}
export default connect(mapStateToProps)(Root);
