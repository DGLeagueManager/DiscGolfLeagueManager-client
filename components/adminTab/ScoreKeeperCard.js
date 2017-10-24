import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet, Picker } from 'react-native';
import { Card, Button, Divider } from 'react-native-elements';
import AdminStack from './AdminStack'

export default class ScoreKeeperCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <Card>
        <Text style={{ flex: 3 }}> Starting Hole: {this.props.index}</Text>

        <Button buttonStyle={{ marginTop: 20 }} backgroundColor={this.state.open === 0 ? "red" : "grey"} onPress={() => {
             this.setState({ open: 0 });
             this.props.changeScoreKeeper(this.props.players[0], this.props.index)
         }} title={this.props.players[0]} />

        <Button raised backgroundColor={this.state.open === 1 ? "red" : "grey"} onPress={() => {
             this.setState({ open: 1 });
             this.props.changeScoreKeeper(this.props.players[1], this.props.index)
           }} style={styles.button} title={this.props.players[1]} />

        <Button raised backgroundColor={this.state.open === 2 ? "red" : "grey"} onPress={() => {
             this.setState({ open: 2 });
             this.props.changeScoreKeeper(this.props.players[2], this.props.index)
           }} style={styles.button} title={this.props.players[2]} />

        <Button raised backgroundColor={this.state.open === 3 ? "red" : "grey"} onPress={() => {
             this.setState({ open: 3 });
             this.props.changeScoreKeeper(this.props.players[3], this.props.index)
           }} style={styles.button} title={this.props.players[3]} />

      </Card>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 20
  },
  header: {
    fontSize: 30
  },
  button: {
    marginTop: 5
  }
});


/*

Map Card Array to render complete cards with a selection button for the score keeper.

Map state to props:
  -Card Array:
    -playerFirstName
    -playerLastName
    -playerDivision
    -playerID

Map Dispatch to props:
  -onSubmit Function:
    -dispatch new list comprised of:
      -cards with score keeper id selected
      -hole start info
      -send cards to database
    -point to next screen in stack
      -Implement Round in Progress screen?  Set up logic for the start round screen?
      -If round in progress, no option for going through stack?
*/