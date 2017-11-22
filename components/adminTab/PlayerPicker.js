import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import { palette } from '../../colorPalette';

const PlayerPicker = ({ player, showModal, cardKey }) => {
  if (!player) {
    return (
      <Button
        onPress={() => showModal(cardKey)}
        buttonStyle={{ marginTop: 20 }}
        backgroundColor={palette.accent}
        title="Select Player..."
      />
    );
  }
  return (
    <View style={{ padding: 5 }}>
      <Text style={
        {
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          color: palette.text,
        }
      }
      >{`${player.first_name} ${player.last_name}`}
      </Text>
    </View >
  );
};

PlayerPicker.propTypes = ({
  player: PropTypes.object,
  showModal: PropTypes.func.isRequired,
  cardKey: PropTypes.string.isRequired,
});

PlayerPicker.defaultProps = ({
  player: null,
});
export default PlayerPicker;
