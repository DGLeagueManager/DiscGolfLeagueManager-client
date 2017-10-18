import React, { Component } from 'react';
import { StackNavigator, TabBarBottom } from 'react-navigation';
import { Text, View, Button, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import AdminRoundConfigStart from './AdminRoundConfigStart';
import AdminSelectionBoxes from './AdminSelectionBoxes';
import HoleSelection from './HoleSelection';
import NewRound from './NewRound';
import RandomShuffle from './RandomShuffle';

const AdminStack = StackNavigator({
  AdminRoundConfigStart: {
    screen: AdminRoundConfigStart,
    navigationOptions: {
      tabBarLabel: 'Admin',
    }
  },
  AdminSelectionBoxes: {
    screen: AdminSelectionBoxes,
    navigationOptions: {
      tabBarLabel: 'League',
    }
  },
  HoleSelection: {
    screen: HoleSelection,
    navigationOptions: {
      tabBarLabel: 'Scoring',
    }
  },
  NewRound: {
    screen: NewRound,
    navigationOptions: {
      tabBarLabel: 'Results'
    }
  },
  RandomShuffle: {
    screen: RandomShuffle,
    navigationOptions: {
      tabBarLabel: 'Results'
    }
  }
}, {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: 'turquoise',
      showIcon: true,
      showLabel: true
    }
  });

export default AdminStack;