import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Text, View, Button, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import NewRound from './NewRound';
import AdminRoundConfigStart from './AdminRoundConfigStart';
import PlayerSelection from './PlayerSelection';
import ScoreKeeperSelection from './ScoreKeeperSelection'

const AdminStack = StackNavigator({
  NewRound: { screen: NewRound },
  AdminRoundConfigStart: { screen: AdminRoundConfigStart },
  PlayerSelection: { screen: PlayerSelection },
  ScoreKeeperSelection: { screen: ScoreKeeperSelection },
});

export default AdminStack;
