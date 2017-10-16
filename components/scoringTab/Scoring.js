import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Scoring extends React.Component {
  render() {
    return (
      <View style={styles.view} >
        <Text> o helo thear </Text>
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