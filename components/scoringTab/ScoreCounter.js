import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon, Col, Grid, Badge } from 'react-native-elements'; // 0.17.0
import { Constants } from "expo";

import "@expo/vector-icons"; // 5.2.0

const ScoreCounter = (props) => (
  <View style={{ flex: 1, flexDirection: 'row' }}>
    {!props.scoresLocked && props.isScoreKeeper ?
      <Icon
        containerStyle={{ height: 40, width: 40 }}
        onPress={props.decrement}
        raised
        type='evilicon'
        name='minus' /> : null}
    <Badge
      containerStyle={{ marginTop: 6, height: 40, width: 40 }}
      value={props.score}
      textStyle={{ color: 'orange' }}
    />
    {!props.scoresLocked && props.isScoreKeeper ?
      <Icon
        containerStyle={{ height: 40, width: 40 }}
        onPress={props.increment}
        raised
        type='evilicon'
        name='plus' /> : null}
  </View>
);

export default ScoreCounter;