import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

module.exports.WeekOne = () => (
  <View style={styles.view}>
    <Text>Week One Results Go Here</Text>
  </View>
);

module.exports.WeekTwo = () => (
  <View style={styles.view}>
    <Text>Week Two Results Go Here</Text>
  </View>
);

module.exports.WeekThree = () => (
  <View style={styles.view}>
    <Text>Week Three Results Go Here</Text>
  </View>
);


const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
