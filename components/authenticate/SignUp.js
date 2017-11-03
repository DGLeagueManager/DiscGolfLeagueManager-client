import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView, Alert } from "react-native";
import { FormLabel, FormInput, Button, Icon } from "react-native-elements"; // 0.17.0
import { Constants } from "expo";
import { connect } from "react-redux";
import { palette } from '../../colorPalette';


const SignUp = (props) => {
  return (
    <View style={styles.mainContainer}>
        <Text style={styles.paragraph}> SIGN UP </Text>

        <View style={styles.formView}>

          <FormLabel>First Name: </FormLabel>
          <FormInput
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus={true}
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
            secureTextEntry={true}
            value={props.password}
            style={styles.input}
            onChangeText={props.handlePasswordChange}
          />
        </View>

        <Button
          onPress={props.userSignUp}
          raised
          title="Submit"
          icon={{ name: "check", type: "" }}
          backgroundColor={palette.accent}
          fontWeight={'bold'}
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
          raised
          buttonStyle={styles.goToLogin}
          title="Go to Login"
        />
        {props.error ? (
          <Text>Email or Password not valid</Text>
        ) : null}
      </View>
  )
} 

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: palette.primary
  },
  paragraph: {
    margin: 24,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: palette.text
  },
  submitButton: {
    borderRadius: 10,
    margin: 10
  },
  goToLogin: {
    borderRadius: 10,
    margin: 10
  },
  input: {
    width: 240,
    height: 60,
    fontSize: 30,
    color: palette.text
  },
  formView: {
    backgroundColor: palette.primary,
  }
});

export default SignUp;
