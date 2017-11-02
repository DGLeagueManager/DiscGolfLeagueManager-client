import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon, Col, Grid, Badge } from 'react-native-elements'; // 0.17.0
import { Constants } from "expo";
import { palette } from '../../colorPalette';
// import "@expo/vector-icons"; // 5.2.0

const ScoreCounter = (props) => (
  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
    {!props.scoresLocked && props.isScoreKeeper ?
      <Icon
        size={40}
        color='green'
        onPress={props.decrement}
        type='entypo'
        name='circle-with-minus' /> : null}
    <Badge
      containerStyle={{ margin: 15, height: 60, width: 60, borderRadius: 50}}
      value={props.score}
      textStyle={{ color: 'orange', fontSize: 35 }}
    />
    {!props.scoresLocked && props.isScoreKeeper ?
      <Icon
        /* containerStyle={{ height: 80, width: 40 }} */
        size={40}
        color='red'
        onPress={props.increment}
        type='entypo'
        name='circle-with-plus' /> : null}
  </View>
);

export default ScoreCounter;