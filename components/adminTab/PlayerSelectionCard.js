import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import PlayerPicker from './PlayerPicker';
import { palette } from '../../colorPalette';

const PlayerSelectionCard = props => (
  <Card containerStyle={{ borderColor: '#555', backgroundColor: palette.primary }}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
      <Text style={{ color: palette.text, flex: 1, fontSize: 20 }}>
        Starting Hole:
      </Text>
      <Text style={{ color: palette.accent, fontSize: 25 }}>
        {props.startingHole}
      </Text>
    </View>

    <PlayerPicker
      player={props.card.players[0]}
      showModal={props.showModal}
      cardKey={props.cardKey}
    />
    <PlayerPicker
      player={props.card.players[1]}
      showModal={props.showModal}
      cardKey={props.cardKey}
    />
    <PlayerPicker
      player={props.card.players[2]}
      showModal={props.showModal}
      cardKey={props.cardKey}
    />
    <PlayerPicker
      player={props.card.players[3]}
      showModal={props.showModal}
      cardKey={props.cardKey}
    />

  </Card>
);

PlayerSelectionCard.propTypes = ({
  card: PropTypes.shape({
    players: PropTypes.array.isRequired,
  }).isRequired,
  startingHole: PropTypes.number.isRequired,
  showModal: PropTypes.func.isRequired,
  cardKey: PropTypes.string.isRequired,
});

export default PlayerSelectionCard;
