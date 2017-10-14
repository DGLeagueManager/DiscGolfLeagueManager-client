import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { Text, View, Button, Image } from 'react-native';
import Scoring from './Scoring';
import TestForm from './TestForm';
import { Icon } from 'react-native-elements';

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
  }
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: 'white',
    showIcon: true,
    showLabel: false
  }
});

export default MainNav;