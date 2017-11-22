import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignUp from './SignUp';
import Login from './Login';
import { signUp, login } from '../../actions/auth';

class Authenticate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      showSignUp: false,
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.userLogin = this.userLogin.bind(this);
    this.userSignUp = this.userSignUp.bind(this);
    this.toggleShowSignUp = this.toggleShowSignUp.bind(this);
  }

  handleFirstNameChange(text) {
    this.setState({ firstName: text });
  }

  handleLastNameChange(text) {
    this.setState({ lastName: text });
  }

  handleEmailChange(text) {
    this.setState({ email: text });
  }

  handlePasswordChange(text) {
    this.setState({ password: text });
  }

  userSignUp(e) {
    this.props.onSignUp(
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.password,
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
        userSignUp={this.userSignUp}
        handleFirstNameChange={this.handleFirstNameChange}
        handleLastNameChange={this.handleLastNameChange}
        handleEmailChange={this.handleEmailChange}
        handlePasswordChange={this.handlePasswordChange}
        toggleShowSignUp={this.toggleShowSignUp}
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        email={this.state.email}
        password={this.state.password}
        error={this.props.error}
      />
    ) : (
      <Login
        userLogin={this.userLogin}
        handleEmailChange={this.handleEmailChange}
        handlePasswordChange={this.handlePasswordChange}
        toggleShowSignUp={this.toggleShowSignUp}
        email={this.state.email}
        password={this.state.password}
      />
    );
  }
}

const mapStateToProps = state => (
  {
    error: state.auth.error,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onSignUp: (firstName, lastName, email, password) => {
      dispatch(signUp(firstName, lastName, email, password));
    },
    onLogin: (email, password) => {
      dispatch(login(email, password));
    },
  }
);

Authenticate.propTypes = ({
  onSignUp: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  error: PropTypes.object,
});

Authenticate.defaultProps = ({
  error: null,
});

export default connect(mapStateToProps, mapDispatchToProps)(Authenticate);
