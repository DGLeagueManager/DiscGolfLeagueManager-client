import React, { Component } from "react";
import { View, Text, Modal } from "react-native";
import { Button, List, ListItem } from "react-native-elements";

const PlayerPicker = (props) => {
  const player = props.player;
  if (!player) {
  return (
    <Button
      onPress={() => props.showModal(props.cardKey)}
      buttonStyle={{ marginTop: 20 }}
      backgroundColor="grey"
      title="Select Player..."
    />
  );
  } else {
    return (
      <List>
        <ListItem title={player.first_name + " " + player.last_name} />
      </List>
    )
  }
}


export default PlayerPicker;
