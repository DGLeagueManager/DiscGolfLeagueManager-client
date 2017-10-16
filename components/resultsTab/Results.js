import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { WeekOne, WeekTwo, WeekThree } from './TempFileDeleteMe';
import { TabNavigator, TabBarTop } from 'react-navigation';

export default class Results extends Component {

  render() {
    return (
      <Tabs />
    )
  }
}

const Tabs = TabNavigator({
  WeekOne: {
    screen: WeekOne,
    navigationOptions: {
      tabBarLabel: 'Week 1'
    }
  },
  WeekTwo: {
    screen: WeekTwo,
    navigationOptions: {
      tabBarLabel: 'Week 2'
    }
  },
  WeekThree: {
    screen: WeekThree,
    navigationOptions: {
      tabBarLabel: 'Week 3'
    }
  }
}, {
  tabBarComponent: TabBarTop,
  tabBarPosition: 'top',
  swipeEnabled: true,
  tabBarOptions: {
    showLabel: true,
    style: {
      paddingTop: 24
    }
  }
})

