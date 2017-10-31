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
    console.log('SCORE KEEPER CARD PROPS', this.props)
    return <Card>
        <Text style={{ flex: 3 }}>{this.props.player.first_name}</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {Object.keys(this.props.scores).map((hole, i) => 
            <Text key={i}>
              {hole} : {this.props.scores[hole].score} |{" "}
            </Text>)}
        </View>
      </Card>;
  };
};