import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ScrollView,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import PlayerSelectionCard from './PlayerSelectionCard';
import { addPlayerToCard } from '../../actions/playerSelectionActions';
import PlayerPickerModal from './PlayerPickerModal';
import { palette } from '../../colorPalette';

class PlayerSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unassignedPlayers: [],
      modalVisible: false,
      activeCard: null,
    };
    this.handleSelectPlayer = this.handleSelectPlayer.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentWillMount() {
    const arr = [...Object.values(this.props.playersPresent)];
    this.setState({ unassignedPlayers: arr });
  }

  handleSelectPlayer(i, cardKey) {
    const card = this.props.cards[cardKey];
    const selectedPlayer = this.state.unassignedPlayers[i];
    const { unassignedPlayers } = this.state;

    unassignedPlayers.splice(i, 1);
    this.props.updateCard(selectedPlayer, card);
    this.setState({ unassignedPlayers });

    if (card.players.length >= 4 || unassignedPlayers.length === 0) {
      this.setState({ modalVisible: false, activeCard: null });
    }
  }


  showModal(key) {
    this.setState({ modalVisible: true, activeCard: key });
  }
  hideModal(key) {
    this.setState({ modalVisible: false, activeCard: key });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: palette.background }}>
        <PlayerPickerModal
          isVisible={this.state.modalVisible}
          activeCard={this.state.activeCard}
          unassignedPlayers={this.state.unassignedPlayers}
          handleSelectPlayer={this.handleSelectPlayer}
          hideModal={this.hideModal}
        />
        <ScrollView>
          <Text style={
            {
              marginTop: 20,
              marginLeft: 20,
              fontSize: 20,
              textAlign: 'center',
              color: palette.text,
            }
          }
          >
            Unassigned Players: {this.state.unassignedPlayers.length}
          </Text>

          {/* <Button
            onPress={this.handleRandom}
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="red"
            title="Randomize All"
          /> */}

          {Object.keys(this.props.cards).map((key) => {
            const card = this.props.cards[key];
            return (
              <View >
                <PlayerSelectionCard
                  key={key}
                  cardKey={key}
                  startingHole={card.startingHole}
                  card={card}
                  unassignedPlayers={this.state.unassignedPlayers}
                  handleSelectPlayer={this.handleSelectPlayer}
                  showModal={this.showModal}
                  modalVisible={this.state.modalVisible}
                />
              </View>
            );
          })}

          <Button
            backgroundColor={palette.accent2}
            disabled={this.state.unassignedPlayers.length !== 0}
            buttonStyle={{ marginVertical: 20 }}
            onPress={() =>
              this.props.navigation.navigate('ScoreKeeperSelection')}
            title="Next"
          />
        </ScrollView>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => (
  {
    updateCard: (player, card) => {
      dispatch(addPlayerToCard(player, card));
    },
  }
);

const mapStateToProps = state => (
  {
    newRound: state.newRoundReducer.newRound,
    cards: state.newRoundReducer.newRound.cards,
    playersPresent: state.newRoundReducer.newRound.playersPresent,
  }
);

PlayerSelection.propTypes = ({
  playersPresent: PropTypes.array.isRequired,
  cards: PropTypes.array.isRequired,
  updateCard: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSelection);
