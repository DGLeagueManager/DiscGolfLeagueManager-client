import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { Button } from 'react-native-elements';


const PlayerPickerModal = (props) => ( 
  <Modal
    isVisible={props.isVisible}
    onRequestClose={() => {
      console.log("");
    }}
  >
    <View >
      {props.unassignedPlayers.map(player => {
        return (
          <TouchableHighlight
            onPress={value => {
              props.handleSelectPlayer(props.unassignedPlayers.indexOf(player), props.activeCard);
            }}
            key={player._id}
          >
            <View style={styles.modalContent}>
              <Text>{player.first_name + " " + player.last_name}</Text>
            </View>
          </TouchableHighlight>
        );
      })}
      <Button onPress={() => props.toggleModal(null)} title="Close" />
    </View>
  </Modal>
)

const styles = StyleSheet.create({

  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
    listItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    padding: 5,
  }
});

export default PlayerPickerModal;