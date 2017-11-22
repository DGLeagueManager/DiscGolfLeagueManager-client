import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'; // 0.17.0
import { Constants } from 'expo';
import { palette } from '../../colorPalette';

const Login = props => (
  <KeyboardAvoidingView behavior="padding" style={styles.mainContainer}>
    <Text style={styles.paragraph}> LOGIN </Text>
    <View style={styles.formView}>

      <FormLabel>Email: </FormLabel>
      <FormInput
        autoCapitalize="none"
        autoCorrect={false}
        autoFocus
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
      onPress={props.userLogin}
      title="Submit"
      icon={{ name: 'check', buttonStyle: styles.submitButton }}
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
      buttonStyle={styles.createButton}
      title="Create an Account"
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
  submitButton: {
    borderRadius: 10,
    margin: 10,
  },
  createButton: {
    borderRadius: 10,
    margin: 10,
  },
  paragraph: {
    margin: 24,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: palette.text,
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

Login.propTypes = ({
  email: PropTypes.string,
  password: PropTypes.string,
  handleEmailChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  userLogin: PropTypes.func.isRequired,
  toggleShowSignUp: PropTypes.func.isRequired,
  error: PropTypes.object,
});

Login.defaultProps = ({
  email: '',
  password: '',
  error: null,
});

export default Login;
