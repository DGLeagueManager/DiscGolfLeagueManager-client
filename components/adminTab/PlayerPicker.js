import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { palette } from '../../colorPalette';

const PlayerPicker = (props) => {
  const player = props.player;
  if (!player) {
  return (
    <Button
      onPress={() => props.showModal(props.cardKey)}
      buttonStyle={{ marginTop: 20 }}
      backgroundColor={palette.accent}
      title="Select Player..."
    />
  );
  } else {
    return (
      <View style={{padding: 5}}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: palette.text }}>{player.first_name + " " + player.last_name}</Text>
      </View >
    )
  }
}


export default PlayerPicker;
