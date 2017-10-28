import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { WeekOne, WeekTwo, WeekThree } from './TempFileDeleteMe';
import { TabNavigator, TabBarTop } from 'react-navigation';
import SwipeALot from 'react-native-swipe-a-lot'

export default class Results extends Component {

  render() {
    return (
      // <Text>Hmmmmmmmm....results</Text>
      <Tabs />
    )
  }
}

const Tabs = TabNavigator({
  WeekOne: {
    screen: <SwipeALot>WeekOne</SwipeALot>,
    navigationOptions: {
      tabBarLabel: 'Week 1'
    }
  },
  WeekTwo: {
    screen: <SwipeALot>WeekTwo</SwipeALot>,
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
  tabBarOptions: {
    swipeEnabled: true,
    scrollEnabled: true,
    showLabel: true,
    style: {
      backgroundColor: 'red'
    }
  }
})
