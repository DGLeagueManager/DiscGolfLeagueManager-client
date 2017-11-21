import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import PlayerPicker from './PlayerPicker';
import { palette } from '../../colorPalette';

class PlayerSelectionCard extends Component {
  componentWillMount() {
    if (this.props.card.players.length >= 4) {
      this.props.toggleModal();
    }
  }

  render() {
    return (
      <Card containerStyle={{ borderColor: '#555', backgroundColor: palette.primary }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
          <Text style={{ color: palette.text, flex: 1, fontSize: 20 }}>
            Starting Hole:
          </Text>
          <Text style={{ color: palette.accent, fontSize: 25 }}>
            {this.props.startingHole}
          </Text>
        </View>

        <PlayerPicker
          player={this.props.card.players[0]}
          showModal={this.props.showModal}
          cardKey={this.props.cardKey}
        />
        <PlayerPicker
          player={this.props.card.players[1]}
          showModal={this.props.showModal}
          cardKey={this.props.cardKey}
        />
        <PlayerPicker
          player={this.props.card.players[2]}
          showModal={this.props.showModal}
          cardKey={this.props.cardKey}
        />
        <PlayerPicker
          player={this.props.card.players[3]}
          showModal={this.props.showModal}
          cardKey={this.props.cardKey}
        />

      </Card>
    );
  }
}

PlayerSelectionCard.propTypes = ({
  card: PropTypes.shape({
    players: PropTypes.array.isRequired,
  }).isRequired,
  toggleModal: PropTypes.func.isRequired,
  startingHole: PropTypes.number.isRequired,
  showModal: PropTypes.bool,
  cardKey: PropTypes.number.isRequired,
});

PlayerSelectionCard.defaultProps = ({
  showModal: false,
});

export default PlayerSelectionCard;
