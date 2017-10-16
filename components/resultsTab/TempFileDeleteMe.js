import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

const WeekOne = () => (
  <View style={styles.view}>
    <Text>Week One Results Go Here</Text>
  </View>
);

const WeekTwo = () => (
  <View style={styles.view}>
    <Text>Week Two Results Go Here</Text>
  </View>
);

const WeekThree = () => (
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

module.exports = { WeekOne, WeekTwo, WeekThree }