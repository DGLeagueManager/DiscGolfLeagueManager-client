import React, { Component } from 'react';
import { connect } from 'react-redux';
import Secured from './Secured';
import Authenticate from './Authenticate';

class Application extends Component {
  render() {
      if (this.props.isLoggedIn) {
          return <Secured />;
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
export default connect(mapStateToProps)(Application);
