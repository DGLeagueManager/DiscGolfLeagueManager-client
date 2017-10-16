import React, { Component } from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Text, View, Button, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import AdminRoundConfigStart from './adminTab/AdminRoundConfigStart';
import Scoring from './scoringTab/Scoring';
import League from './leagueTab/League';
import Results from './resultsTab/Results';

const Secured = TabNavigator({
  Admin: {
    screen: AdminRoundConfigStart,
    navigationOptions: {
      tabBarLabel: 'Admin',
      tabBarIcon: <Icon name="person" />
    }
  },
  League: {
    screen: League,
    navigationOptions: {
      tabBarLabel: 'League',
      tabBarIcon: <Icon name="stars" />
    }
  },
  Results : {
    screen: Results,
    navigationOptions: {
      tabBarLabel: 'Results',
      tabBarIcon: <Icon name="md-trophy" type="ionicon" />
    }
  }
}, {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: 'turquoise',
    showIcon: true,
    showLabel: true
  }
});

export default Secured;