import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Text, View, Button, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import NewRound from './NewRound';
import AdminRoundConfigStart from './AdminRoundConfigStart';
import PlayerSelection from './PlayerSelection';
import ScoreKeeperSelection from './ScoreKeeperSelection'

const AdminStack = StackNavigator({
  NewRound: { 
    screen: NewRound,
    navigationOptions: {
      headerTitle: 'New Round',
      headerStyle: {
        marginTop: 24,
        backgroundColor: 'red'
      }
    }  
  },
  AdminRoundConfigStart: { 
    screen: AdminRoundConfigStart,
    navigationOptions: {
      headerTitle: 'Choose Participants',
      headerStyle: {
        paddingTop: 24,
      },
      headerTitleStyle: {
        padding: 24
      }
    }
   },
  PlayerSelection: { screen: PlayerSelection },
  ScoreKeeperSelection: { screen: ScoreKeeperSelection }
});

export default AdminStack;
