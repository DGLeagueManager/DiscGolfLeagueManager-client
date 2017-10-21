import React, { Component } from 'react';
import { Constants } from 'expo';
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
        marginTop: Constants.statusBarHeight,
        backgroundColor: 'red'
      }
    }  
  },
  AdminRoundConfigStart: { 
    screen: AdminRoundConfigStart,
    navigationOptions: {
      headerTitle: 'Choose Participants',
      headerStyle: {
        marginTop: Constants.statusBarHeight
      },
      headerTitleStyle: {
        padding: 24
      }
    }
   },
  PlayerSelection: { 
    screen: PlayerSelection,
    navigationOptions: {
      headerTitle: 'Assign Cards',
      headerStyle: {
        marginTop: Constants.statusBarHeight
      }
    } 
  },
  ScoreKeeperSelection: { 
    screen: ScoreKeeperSelection,
    navigationOptions: {
      headerTitle: 'Select a Scorekeeper',
      headerStyle: {
        marginTop: Constants.statusBarHeight
      }
    }
  }
});

export default AdminStack;
