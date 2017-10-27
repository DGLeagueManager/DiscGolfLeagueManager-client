import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableHighlight,
  FlatList,
  StyleSheet
} from "react-native";
import { Button, Divider } from "react-native-elements";
import PlayerSelectionCard from "./PlayerSelectionCard";
import { connect } from "react-redux";
import { addPlayerToCard } from "../../actions/playerSelectionActions";
import PlayerPickerModal from './PlayerPickerModal';

class PlayerSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unassignedPlayers: [],
      modalVisible: false,
      activeCard: null,
    };
  }

  componentWillMount() {
    let arr = [];
    for (var key in this.props.playersPresent) {
      arr.push(this.props.playersPresent[key]);
    }
    this.setState({ unassignedPlayers: arr });
  }

  handleSelectPlayer(i, cardKey) {
    let card = this.props.cards[cardKey];
    let selectedPlayer = this.state.unassignedPlayers[i];
    let unassignedPlayers = this.state.unassignedPlayers;

    unassignedPlayers.splice(i, 1);
    this.props.updateCard(selectedPlayer, card);
    this.setState({ unassignedPlayers: unassignedPlayers });

    if (card.players.length >= 4 || unassignedPlayers.length === 0) {
      this.setState({ modalVisible: false, activeCard: null })
    }

  }

  toggleModal(key) {
    this.setState({ modalVisible: !this.state.modalVisible, activeCard: key });
  }

  render() {
    return (
      <View>
      <PlayerPickerModal 
        isVisible={this.state.modalVisible} 
        activeCard={this.state.activeCard} 
        unassignedPlayers={this.state.unassignedPlayers}
        handleSelectPlayer={this.handleSelectPlayer.bind(this)}
        toggleModal={this.toggleModal.bind(this)}
      />
        <ScrollView>
          <Text style={{ marginTop: 20, marginLeft: 20, fontSize: 20 }}>
            Unassigned Players: {this.state.unassignedPlayers.length}
          </Text>

          <Button
            onPress={this.handleRandom}
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="red"
            title="Randomize All"
          />

          {Object.keys(this.props.cards).map((key, i) => {
            let card = this.props.cards[key];
            return (
              <View>
                <PlayerSelectionCard
                  key={key}
                  cardKey={key}
                  startingHole={card.startingHole}
                  card={card}
                  unassignedPlayers={this.state.unassignedPlayers}
                  handleSelectPlayer={this.handleSelectPlayer.bind(this)}
                  toggleModal={this.toggleModal.bind(this)}
                  modalVisible={this.state.modalVisible}
                />
              </View>
            );
          })}

          <Button
            backgroundColor="red"
            disabled={this.state.unassignedPlayers.length !== 0}
            buttonStyle={{
              marginTop: 20,
              marginBottom: 20
            }}
            onPress={() =>
              this.props.navigation.navigate("ScoreKeeperSelection")}
            title="Next"
          />
        </ScrollView>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCard: (player, card) => {
      dispatch(addPlayerToCard(player, card));
    }
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    newRound: state.newRoundReducer.newRound,
    cards: state.newRoundReducer.newRound.cards,
    playersPresent: state.newRoundReducer.newRound.playersPresent
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSelection);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
});
