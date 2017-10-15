import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { Text, View, Button, Image } from 'react-native';
import { Icon } from 'react-native-elements';

import TestForm from './TestForm';

import Scoring from './scoringTab/Scoring';
import League from './leagueTab/League';
import Results from './resultsTab/Results';

const MainNav = TabNavigator({
  Scoring: {
    screen: Scoring,
    navigationOptions: {
      tabBarLabel: 'Scoring',
      tabBarIcon: ({ tintColor }) => <Icon name="pencil" type="entypo" color="white" />
    }
  },
  TestForm: {
    screen: TestForm,
    navigationOptions: {
      tabBarLabel: 'TestForm',
      tabBarIcon: ({ tintColor }) => <Icon name="pencil" type="entypo" color="white" />
    }
  },
  League: {
    screen: League,
    navigationOptions: {
      tabBarLabel: 'League'
    }
  },
  Results : {
    screen: Results,
    navigationOptions: {
      tabBarLabel: 'Results'
    }
  }
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: 'white',
    showIcon: true,
    showLabel: true
  }
});

export default MainNav;