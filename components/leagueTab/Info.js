import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class Info extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text>General League Info Goes Here</Text>
        <Text>About Us Blurb, contact info, etc.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
