import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';

const PlayerPickerModal = props => (
  <Modal
    isVisible={props.isVisible}
  >
    <View >
      {props.unassignedPlayers.map(player => (
        <TouchableHighlight
          onPress={() => {
            props.handleSelectPlayer(props.unassignedPlayers.indexOf(player), props.activeCard);
          }}
          key={player._id}
        >
          <View style={styles.modalContent}>
            <Text>{`${player.first_name} ${player.last_name}`}</Text>
          </View>
        </TouchableHighlight>
        ))
      }
      <Button onPress={() => props.hideModal()} title="Close" />
    </View>
  </Modal>
);

const styles = StyleSheet.create({

  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});

PlayerPickerModal.propTypes = ({
  isVisible: PropTypes.bool,
  unassignedPlayers: PropTypes.array.isRequired,
  hideModal: PropTypes.func.isRequired,
});

PlayerPickerModal.defaultProps = ({
  isVisible: false,
});

export default PlayerPickerModal;
