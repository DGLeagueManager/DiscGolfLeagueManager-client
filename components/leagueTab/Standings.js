import React, { Component } from "react";
import { Text, StyleSheet, View  } from "react-native";

export default class Standings extends Component {

  render() {
    return (
      <View style={styles.view}>
        <Text>Standings Page</Text>
        <Text>These are the current standings for the current league season</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
