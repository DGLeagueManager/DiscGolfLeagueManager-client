import React, { Component } from "react";
import { Text, ScrollView, View, StyleSheet, Picker } from "react-native";
import { Card, Button, Divider } from "react-native-elements";
import { palette } from "../../colorPalette";

export default class ScoreKeeperCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("SCORE KEEPER CARD props: scores: ", this.props.scores);
    return <Card title={null}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {(this.props.player.first_name +
              " " +
              this.props.player.last_name
            ).toUpperCase()}
          </Text>
          <Text style={styles.score}>
            {this.props.scores.scoreRelativeToPar} ({this.props.scores.totalStrokes})
          </Text>
        </View>

        {/*<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{flex: 1, flexDirection: "row", justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.label}>Strokes:</Text>
            <Text style={styles.value}>
              {this.props.scores.totalStrokes}
            </Text>
          </View>
          <View style={{flex: 1, flexDirection: "row", justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.label}>Score:</Text>
            <Text style={styles.value}>
              {this.props.scores.scoreRelativeToPar}
            </Text>
          </View>
          
          {Object.keys(this.props.scores).map((hole, i) => 
          <Text key={i}>
          {hole}
        </Text>)} 
        </View> */}

        <Button raised icon={{ name: "assignment" }} title="Review Hole Scores" buttonStyle={{ backgroundColor: palette.accent2, color: palette.secondary }} />
      </Card>;
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  titleContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1
  },
  score: {
    fontSize: 22,
    fontWeight: 'bold',
    flex: 1,
    color: palette.accent
  },
});
