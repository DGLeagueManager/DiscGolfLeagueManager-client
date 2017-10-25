import React, { Component } from "react";
import { Text, ScrollView, View, StyleSheet, Picker } from "react-native";
import { Card, Button, Divider } from "react-native-elements";
import AdminStack from "./AdminStack";

export default class ScoreKeeperCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: null
    };
  }

  render() {
    console.log("PRAPS: ", this.props);
    return (
      <Card>
        <Text style={{ flex: 3 }}> Starting Hole: {this.props.hole}</Text>

        {/* TODO: refactor this component to only render if there is a this.props.players[0] */}
    
        <Button buttonStyle={{ marginTop: 20 }} backgroundColor={this.state.open === 0 ? "red" : "grey"} onPress={() => {
            this.setState({ open: 0 });
            this.props.handleSelectScoreKeeper(this.props.players[0], this.props.card);
          }} title={this.props.players[0].first_name + this.props.players[0].last_name || null } />

        <Button raised backgroundColor={this.state.open === 1 ? "red" : "grey"} onPress={() => {
            this.setState({ open: 1 });
            this.props.handleSelectScoreKeeper(this.props.players[1], this.props.card);
          }} style={styles.button} title={this.props.players[1].first_name + this.props.players[1].last_name || null } />

        <Button raised backgroundColor={this.state.open === 2 ? "red" : "grey"} onPress={() => {
            this.setState({ open: 2 });
            this.props.handleSelectScoreKeeper(this.props.players[2], this.props.card);
          }} style={styles.button} title={this.props.players[2].first_name + this.props.players[2].last_name || null } />

        <Button raised backgroundColor={this.state.open === 3 ? "red" : "grey"} onPress={() => {
            this.setState({ open: 3 });
            this.props.handleSelectScoreKeeper(this.props.players[3], this.props.card);
          }} style={styles.button} title={this.props.players[3].first_name + this.props.players[3].last_name || null} />
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 20
  },
  header: {
    fontSize: 30
  },
  button: {
    marginTop: 5
  }
});
