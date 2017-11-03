import React, { Component } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import { connect } from "react-redux";
import { signUp, login } from '../../actions/auth';
import { palette } from '../../colorPalette';

class Authenticate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      showSignUp: false
    };
  }

  handleFirstNameChange(text) {
    this.setState({ first_name: text });
  }

  handleLastNameChange(text) {
    this.setState({ last_name: text });
  }

  handleEmailChange(text) {
    this.setState({ email: text });
  }

  handlePasswordChange(text) {
    this.setState({ password: text });
  }

  userSignUp(e) {
    this.props.onSignUp(
      this.state.first_name,
      this.state.last_name,
      this.state.email,
      this.state.password
    );
    e.preventDefault();
  }

  userLogin(e) {
    this.props.onLogin(this.state.email, this.state.password);
    e.preventDefault();
  }

  toggleShowSignUp() {
    this.setState({ showSignUp: !this.state.showSignUp });
  }

  render() {
    return this.state.showSignUp ? (
      <SignUp
        userSignUp={this.userSignUp.bind(this)}
        handleFirstNameChange={this.handleFirstNameChange.bind(this)}
        handleLastNameChange={this.handleLastNameChange.bind(this)}
        handleEmailChange={this.handleEmailChange.bind(this)}
        handlePasswordChange={this.handlePasswordChange.bind(this)}
        toggleShowSignUp={this.toggleShowSignUp.bind(this)}
        firstName={this.state.first_name}
        lastName={this.state.last_name}
        email={this.state.email}
        password={this.state.password}
      />
    ) : (
      <Login
        userLogin={this.userLogin.bind(this)}
        handleEmailChange={this.handleEmailChange.bind(this)}
        handlePasswordChange={this.handlePasswordChange.bind(this)}
        toggleShowSignUp={this.toggleShowSignUp.bind(this)}
        email={this.state.email}
        password={this.state.password}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    // isLoggedIn: state.auth.isLoggedIn,
    error: state.auth.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignUp: (first_name, last_name, email, password) => {
      dispatch(signUp(first_name, last_name, email, password));
    },
    onLogin: (email, password) => {
      dispatch(login(email, password));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Authenticate);
