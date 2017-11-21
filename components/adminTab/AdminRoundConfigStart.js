import React from 'react';
import { ScrollView, View } from 'react-native';
import {
  Button,
  List,
  ListItem,
} from 'react-native-elements';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AdminSelectionBoxes from './AdminSelectionBoxes';
import {
  addPlayersToRound,
  addPlayerToRound,
  addEmptyCards,
  removePlayer,
} from '../../actions/adminRoundConfigStartActions';
import { palette } from '../../colorPalette';

const AdminRoundConfigStart = (props) => {
  const handleAmDivisionSelect = (playerid) => {
    const idMatches = player => (
      player._id === playerid
    );

    const player = props.leaguePlayers.find(idMatches);
    player.division = 'AM';
    props.onAddPlayer(player);
  };

  const handleProDivisionSelect = (playerid) => {
    const idMatches = player => (
      player._id === playerid
    );

    const player = props.leaguePlayers.find(idMatches);
    player.division = 'PRO';
    props.onAddPlayer(player);
  };

  const handleRemovePlayer = (playerId) => {
    props.removePlayer(playerId);
  };

  const handleSubmit = () => {
    const emptyCards = generateEmptyCards();
    props.onSubmit(emptyCards);
    props.navigation.navigate('PlayerSelection');
  };

  const generateEmptyCards = () => {
    const playersTotal = Object.keys(props.playersPresent).length;
    const numberOfCards = Math.ceil(playersTotal / 4);
    const cards = {};

    for (let i = 1; i <= numberOfCards; i++) {
      cards[i] = {
        startingHole: i,
        players: [],
      };
    }
    return cards;
  };

  return (
    <ScrollView style={{ marginTop: 20, paddingTop: 0 }}>
      <List style={{ marginBottom: 20 }}>
        {props.leaguePlayers.map((ele, i) => (
          <View>
            <ListItem
              roundAvatar
              /* avatar={{ uri: ele.avatar_url }} */
              key={ele._id}
              title={`${ele.first_name} ${ele.last_name}`}
              rightTitleStyle={null}
              label={
                <AdminSelectionBoxes
                  key={ele._id}
                  value={ele._id}
                  handleAmDivisionSelect={handleAmDivisionSelect}
                  handleProDivisionSelect={handleProDivisionSelect}
                  handleRemovePlayer={handleRemovePlayer}
                  i={i}
                />
              }
              hideChevron
            />
          </View>
        ))}
      </List>
      <Button
        buttonStyle={{ marginBottom: 20 }}
        onPress={handleSubmit}
        color="black"
        backgroundColor={palette.accent}
        title="Next"
      />
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  newRound: state.newRoundReducer.newRound,
  leaguePlayers: state.applicationReducer.leaguePlayers,
  playersPresent: state.newRoundReducer.newRound.playersPresent,
});

const mapDispatchToProps = dispatch => ({
  onSubmitPlayers: (amPlayers, proPlayers, emptyCards) => {
    dispatch(addPlayersToRound(emptyCards));
  },
  onAddPlayer: (player) => {
    dispatch(addPlayerToRound(player));
  },
  onSubmit: (cards) => {
    dispatch(addEmptyCards(cards));
  },
  removePlayer: (playerId) => {
    dispatch(removePlayer(playerId));
  },
});

AdminRoundConfigStart.propTypes = ({
  leaguePlayers: PropTypes.array.isRequired,
  onAddPlayer: PropTypes.func.isRequired,
  removePlayer: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  playersPresent: PropTypes.array.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminRoundConfigStart);
