import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'; // 0.17.0
import { Constants } from 'expo';
import { palette } from '../../colorPalette';

const SignUp = props => (
  <KeyboardAvoidingView behavior="position" style={styles.mainContainer}>
    <Text style={styles.paragraph}> SIGN UP </Text>

    <View style={styles.formView}>

      <FormLabel>First Name: </FormLabel>
      <FormInput
        autoCapitalize="none"
        autoCorrect={false}
        autoFocus
        value={props.firstName}
        style={styles.input}
        onChangeText={props.handleFirstNameChange}
      />

      <FormLabel>Last Name: </FormLabel>
      <FormInput
        autoCapitalize="none"
        autoCorrect={false}
        value={props.lastName}
        style={styles.input}
        onChangeText={props.handleLastNameChange}
      />

      <FormLabel>Email: </FormLabel>
      <FormInput
        autoCapitalize="none"
        autoCorrect={false}
        value={props.email}
        style={styles.input}
        onChangeText={props.handleEmailChange}
      />

      <FormLabel>Password: </FormLabel>
      <FormInput
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        value={props.password}
        style={styles.input}
        onChangeText={props.handlePasswordChange}
      />
    </View>

    <Button
      onPress={props.userSignUp}
      title="Submit"
      icon={{ name: 'check', type: '' }}
      backgroundColor={palette.accent}
      fontWeight="bold"
      buttonStyle={styles.submitButton}
      /* disabled={
        props.first_name === "" ||
        props.last_name === "" ||
        props.email === "" ||
        props.password === ""
      } */
    />
    <Button
      onPress={props.toggleShowSignUp}
      buttonStyle={styles.goToLogin}
      title="Go to Login"
    />
    {props.error ? (
      <Text>Email or Password not valid</Text>
    ) : null}
  </KeyboardAvoidingView>
);


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: palette.primary,
  },
  paragraph: {
    margin: 24,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: palette.text,
  },
  submitButton: {
    borderRadius: 10,
    margin: 10,
  },
  goToLogin: {
    borderRadius: 10,
    margin: 10,
  },
  input: {
    width: 240,
    height: 60,
    fontSize: 30,
    color: palette.text,
  },
  formView: {
    backgroundColor: palette.primary,
  },
});

SignUp.propTypes = ({
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  handleFirstNameChange: PropTypes.func.isRequired,
  handleLastNameChange: PropTypes.func.isRequired,
  handleEmailChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  userSignUp: PropTypes.func.isRequired,
  toggleShowSignUp: PropTypes.func.isRequired,
  error: PropTypes.object,
});

SignUp.defaultProps = ({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  error: null,
});

export default SignUp;
