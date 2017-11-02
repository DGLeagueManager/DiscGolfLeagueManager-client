import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet, Picker, FlatList, TouchableHighlight, } from 'react-native';
import { Card, Button, Divider } from 'react-native-elements';
import AdminStack from './AdminStack';
import { addPlayerToCard, changeStartingHole } from '../../actions/playerSelectionActions';
import PlayerPicker from './PlayerPicker';
import Modal from 'react-native-modal'

class PlayerSelectionCard extends Component {
  componentWillMount() {
    if (this.props.card.players.length >= 4) {
      this.props.toggleModal(null)
    }
  }

  render() {
    return <Card>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>
          <Text style={{ flex: 1, fontSize: 20}}>
            Starting Hole:
          </Text>
          <Text style={{ fontSize: 25}}>
            {this.props.startingHole}
          </Text>
        </View>

        <PlayerPicker player={this.props.card.players[0]} showModal={this.props.showModal} cardKey={this.props.cardKey} />
        <PlayerPicker player={this.props.card.players[1]} showModal={this.props.showModal} cardKey={this.props.cardKey} />
        <PlayerPicker player={this.props.card.players[2]} showModal={this.props.showModal} cardKey={this.props.cardKey}/>
        <PlayerPicker player={this.props.card.players[3]} showModal={this.props.showModal} cardKey={this.props.cardKey} />

      </Card>;
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

export default PlayerSelectionCard;
