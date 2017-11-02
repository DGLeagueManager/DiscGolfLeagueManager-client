import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { Button, Icon, List, ListItem, CheckBox, Header } from 'react-native-elements';
import { Constants } from 'expo';
import AdminSelectionBoxes from './AdminSelectionBoxes';
import { connect } from 'react-redux';
import { addPlayersToRound, addPlayerToRound, addEmptyCards, removePlayer } from '../../actions/adminRoundConfigStartActions';
import { palette } from '../../colorPalette';

import "@expo/vector-icons"; // 5.2.0


class AdminRoundConfigStart extends Component {
  constructor(props) {
    super(props);

  }

  handleAmDivisionSelect = ( playerid ) => {
    function idMatches( player ) {
      return player._id === playerid
    }
    let player = this.props.leaguePlayers.find(idMatches);
    player.division = 'AM';

    this.props.onAddPlayer(player)
  }

  handleProDivisionSelect = ( playerid ) => {
    function idMatches(player) {
      return player._id === playerid;
    }

    let player = this.props.leaguePlayers.find(idMatches);
    player.division = "PRO";
    this.props.onAddPlayer(player)

  }

  handleRemovePlayer = (playerId) => {
    this.props.removePlayer(playerId)
  }

  handleSubmit = () => {
    let emptyCards = this.generateEmptyCards();
    this.props.onSubmit(emptyCards)
    this.props.navigation.navigate('PlayerSelection')
  }

  generateEmptyCards() {
    let playersTotal = Object.keys(this.props.playersPresent).length;
    let numberOfCards = Math.ceil(playersTotal / 4);
    let cards = {};

    for (let i = 1; i <= numberOfCards; i++) {
      cards[i] = {
        startingHole: i,
        players: []
      }
    }


    return cards;
  }

  render() {
    return (
      <ScrollView style={{ marginTop: 20, paddingTop: 0}}>
        <List style={{ marginBottom: 20 }}>
          {
            this.props.leaguePlayers.map((ele, i) => (
              <View key={'view'+i}>
                <ListItem
                  roundAvatar
                  /* avatar={{ uri: ele.avatar_url }} */
                  key={i}
                  title={ele.first_name + ' ' + ele.last_name}
                  rightTitleStyle={null}
                  label={
                    <AdminSelectionBoxes
                      key={ele._id}
                      value={ele._id}
                      handleAmDivisionSelect={this.handleAmDivisionSelect.bind(this)}
                      handleProDivisionSelect={this.handleProDivisionSelect.bind(this)}
                      handleRemovePlayer={this.handleRemovePlayer.bind(this)}
                      i={i}
                    />
                  }
                  hideChevron
                />
              </View>
            ))
          }
        </List>
        <Button
          buttonStyle={{marginBottom: 20}}
          onPress={this.handleSubmit}
          color='black'
          backgroundColor={palette.accent}
          title='Next'
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    newRound: state.newRoundReducer.newRound,
    leaguePlayers: state.applicationReducer.leaguePlayers,
    playersPresent: state.newRoundReducer.newRound.playersPresent
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitPlayers: (amPlayers, proPlayers, emptyCards) => {
      dispatch(addPlayersToRound(emptyCards));
    },
    onAddPlayer: (player) => {
      dispatch(addPlayerToRound(player))
    },
    onSubmit: (cards) => {
      dispatch(addEmptyCards(cards))
    },
    removePlayer: (playerId) => {
      dispatch(removePlayer(playerId))
    }
  };
};

export default connect( mapStateToProps, mapDispatchToProps )(AdminRoundConfigStart);
