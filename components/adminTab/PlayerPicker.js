import React, { Component } from "react";
import { View, Text, Modal } from "react-native";
import { Button } from "react-native-elements";

const PlayerPicker = (props) => {
  const player = props.player;
  if (!player) {
  return (
    <Button
      onPress={props.toggleModal}
      buttonStyle={{ marginTop: 20 }}
      backgroundColor="grey"
      title="Select Player..."
    />
  );
  } else {
    return (
      <View>
        <Text>{player.first_name}</Text>
        <Text>{player.last_name}</Text>
      </View>
    )
  }
}


export default PlayerPicker;
