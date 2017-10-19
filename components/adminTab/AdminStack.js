import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Text, View, Button, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import NewRound from './NewRound';
import Round from './Round';
import PlayerSelection from './PlayerSelection';
import ScoreKeeperSelection from './ScoreKeeperSelection'

console.log(Round)
const AdminStack = StackNavigator({
  NewRound: { screen: NewRound },
  Round: { screen: Round },
  PlayerSelection: { screen: PlayerSelection },
  ScoreKeeperSelection: { screen: ScoreKeeperSelection },
});

export default AdminStack;