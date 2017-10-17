<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignUp from './SignUp';
import Secured from './Secured';
 
class Application extends Component {
    render() {
        if (this.props.isLoggedIn) {
            return <Secured />;
        } else {
            return <SignUp />;
        }
=======
import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "./Login";
import Secured from "./Secured";

class Application extends Component {
  render() {
    if (this.props.isLoggedIn) {
      return <Secured />;
    } else {
      return <Login />;
>>>>>>> working on nesting tabnav inside of stacknav
    }
  }
}

const mapStateToProps = (state, ownProps) => {
<<<<<<< HEAD
    console.log('STATE:  ', state)
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}
 
export default connect(mapStateToProps)(Application);
=======
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
};

export default connect(mapStateToProps)(Application);
>>>>>>> working on nesting tabnav inside of stacknav
