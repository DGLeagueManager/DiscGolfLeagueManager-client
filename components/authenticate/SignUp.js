import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView, Alert } from "react-native";
import { FormLabel, FormInput, Button, Icon } from "react-native-elements"; // 0.17.0
import { Constants } from "expo";
import { connect } from "react-redux";


const SignUp = (props) => {
  return (
      <View style={styles.container}>
        <Text style={styles.paragraph}> Create an account </Text>
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
          style={{ marginTop: 10, marginBottom: 20 }}
          disabled={
            props.first_name === "" ||
            props.last_name === "" ||
            props.email === "" ||
            props.password === ""
          }
        />
          <Button
          onPress={props.toggleShowSignUp}
          raised
          title="Go to Login"
        />
        {props.error ? (
          <Text>Email or Password not valid</Text>
        ) : null}
      </View>
  )
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    paddingBottom: "20%"
  },
  paragraph: {
    margin: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e"
  },
  input: {
    width: 250
  },
  formView: {
    backgroundColor: "#fefefe"
  }
});

export default SignUp;
