import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon, Col, Grid, Badge } from 'react-native-elements'; // 0.17.0
import { Constants } from "expo";
import { palette } from '../../colorPalette';

const ScoreCounter = (props) => (
  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
    {!props.scoresLocked && props.isScoreKeeper ?
      <Icon
        size={20}
        color={palette.accent}
        onPress={props.decrement}
        type='entypo'
        name='circle-with-minus' /> : null}
    <Badge
      containerStyle={{ margin: 10, height: 60, width: 60, borderRadius: 50, backgroundColor: palette.text}}
      value={props.score}
      textStyle={{color: 'black', fontSize: 35 }}
    />
    {!props.scoresLocked && props.isScoreKeeper ?
      <Icon
        /* containerStyle={{ height: 80, width: 40 }} */
        size={20}
        color={palette.accent2}
        onPress={props.increment}
        type='entypo'
        name='circle-with-plus' /> : null}
  </View>
);

export default ScoreCounter;