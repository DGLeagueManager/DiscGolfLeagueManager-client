import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class Results extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text>League Page</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
