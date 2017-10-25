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
import Modal from 'react-native-modal'
import PlayerSelectionCard from "./PlayerSelectionCard";
import { connect } from "react-redux";
import { addPlayerToCard } from "../../actions/playerSelectionActions";

class PlayerSelection extends Component {
  constructor(props) {
    super(props);
    console.log("player selection props:", props);
    this.state = {
      unassignedPlayers: [],
      modalVisible: false
    };
  }

  componentWillMount() {
    let arr = [];
    for (var key in this.props.playersPresent) {
      arr.push(this.props.playersPresent[key]);
    }
    this.setState({ unassignedPlayers: arr });
  }

  handleSelectPlayer(i, card) {
    let selectedPlayer = this.state.unassignedPlayers[i];
    let unassignedPlayers = this.state.unassignedPlayers;
    unassignedPlayers.splice(i, 1);
    this.props.updateCard(selectedPlayer, card);
    this.setState({ unassignedPlayers: unassignedPlayers });
    console.log("handleSelectPlayer invoked...");
  }

  toggleModal() {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  render() {
    return (
      <View>
        <Modal
          isVisible={this.state.modalVisible}
          onRequestClose={() => {
            console.log("");
          }}
        >
          <View style={styles.modalContent}>
            <FlatList
              data={this.state.unassignedPlayers}
              renderItem={({ item, i }) => (
                <TouchableHighlight
                  onPress={(value) => {
                    alert( item.first_name);
                  }}
                  key={i}
                >
                  <View style={styles.listItem}>
                    <Text>
                      {item.first_name + " " + item.last_name}
                    </Text>
                  </View>
                </TouchableHighlight>
              )}
            />
            <Button
              onPress={this.toggleModal.bind(this)}
              title='Close'
            />
          </View>
        </Modal>

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
              <PlayerSelectionCard
                key={'test' +  i}
                startingHole={card.startingHole}
                card={card}
                unassignedPlayers={this.state.unassignedPlayers}
                handleSelectPlayer={this.handleSelectPlayer.bind(this)}
                toggleModal={this.toggleModal.bind(this)}
              />
            );
          })}

          <Button
            backgroundColor="red"
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
  listItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    padding: 5,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});

/*
Create SelectPlayerFunction:
  should show a scroll view of all available players
  user should be able to select player for card, followed by removal from list
  each card should only have four slots and choose from the playerArray

Create RandomFunction to map Array:
  map should auto populate cards with same division
  no card should have only one player

  Map state to props:
  -players array:
    -playerFirstName
    -playerLastName
    -playerDivision
    -playerID

Map Dispatch to props:
  -onSubmit Function:
    -dispatch new list of cards:
      -players present
      -players division
      -players contact info
      -what card players belong too
    -point to next screen in stack
*/
