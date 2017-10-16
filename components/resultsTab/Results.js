import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class Results extends Component {

  render() {
    return (
      <View style={styles.view}>
        <Text>Results Page</Text>
        {/** The below prop is how we'll know what screen we're displaying */}
        <Text>{this.props.navigation.state.key}</Text>
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
