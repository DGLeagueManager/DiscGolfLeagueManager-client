import React, { Component } from 'react';
import { connect } from 'react-redux';
import Application from './Application';
import Authenticate from './authenticate/Authenticate';
import { Text, StyleSheet, View } from "react-native";


class Root extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rerender: false
    };
  }

  componentWillUpdate() {
    console.log('receiving');
    // this.render();
  }
  render() {
    console.log('These are the props at root', this.props);
    if (this.props.isLoggedIn) {
        // return <Application />;
        return (<View>
          <Text>Hello We made it</Text>
          <Text>Hello We made it</Text>
          <Text>Hello We made it</Text>
          <Text>Hello We made it</Text>
          <Text>Hello We made it</Text>
          </View>)
    } else {
        return <Authenticate />;
    }
  }
}

const mapStateToProps = function(state, ownProps){
  console.log('Mapping');
	return ({
		isLoggedIn: (state.auth.isLoggedIn || false),
    token: state.auth.token,
    user: state.auth.user,
    message: state.auth.message,
    isIn: state.auth.isIn
	});
}
export default connect(mapStateToProps)(Root);
