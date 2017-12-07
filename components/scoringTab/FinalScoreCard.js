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
    return (
    <Card title={null}>
      <View style={styles.titleContainer}>
        <View>
          <Text
            style={styles.title}
            numberOfLines={1}
            ellipsizeMode={'tail'}
          >
            {(this.props.player.first_name +
              " " +
              this.props.player.last_name
            ).toUpperCase()}
          </Text>
        </View>
        <View>
          <Text style={styles.score}>
            {this.props.scores.scoreRelativeToPar} ({this.props.scores.totalStrokes})
            </Text>
        </View>
      </View>
      <Button raised icon={{ name: "assignment" }} title="Review Hole Scores" buttonStyle={{ backgroundColor: palette.accent2 }} />
    </Card>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    flex: 1
  },
  titleContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center'
  },
  score: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
    color: palette.accent
  },
});
