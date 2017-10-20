import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView, Alert } from "react-native";
import { FormLabel, FormInput, Button, Icon } from "react-native-elements"; // 0.17.0
import { Constants } from "expo";

const Login = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}> LOGIN </Text>
      <View style={styles.formView}>

        <FormLabel>Email: </FormLabel>
        <FormInput
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus={true}
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
          onPress={props.userLogin}
          raised
          title="Submit"
          icon={{ name: "check" }}

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
          style={{ margin: 20 }}
          title="Create an Account"
        />
        {props.error ? (
          <Text>Email or Password not valid</Text>
        ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",

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

export default Login;
