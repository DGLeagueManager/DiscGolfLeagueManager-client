import React, { Component } from "react";
import { Text, ScrollView, View, StyleSheet, Picker } from "react-native";
import { Card, Button, Divider } from "react-native-elements";

export default class ScoreKeeperCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return ( 
    <Card>
      <Text style={{ flex: 3 }}> Player Name Here: {this.props.hole}</Text>
      <Text>All hole info related to player here</Text>
    </Card>
    );
  };
};