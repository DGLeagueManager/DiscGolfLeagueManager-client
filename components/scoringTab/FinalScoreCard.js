import React, { Component } from "react";
import { Text, ScrollView, View, StyleSheet, Picker } from "react-native";
import { Card, Button, Divider } from "react-native-elements";
import { palette } from '../../colorPalette';

export default class ScoreKeeperCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    console.log('SCORE KEEPER CARD PROPS', this.props)
    return ( 
      <Card>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{this.props.player.first_name}</Text>
        <Divider />
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {Object.keys(this.props.scores.scores).map((hole, i) => 
            <Text key={i}>
            {hole} : {this.props.scores.scores[hole].score}
            </Text>)}
        </View>
      </Card>
    )
  };
};


// style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: palette.text}}