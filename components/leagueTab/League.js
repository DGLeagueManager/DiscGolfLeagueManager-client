import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { TabNavigator, TabBarTop } from 'react-navigation';
import Info from './Info';
import Standings from './Standings';

export default class League extends Component {

  render() {
    return (
      <Tabs />
    )
  }
}

const Tabs = TabNavigator({
  Info: {
    screen: Info,
    navigationOptions: {
      tabBarLabel: 'Info'
    }
  },
  Standings: {
    screen: Standings,
    navigationOptions: {
      tabBarLabel: 'Standings'
    }
  }
}, {
  tabBarComponent: TabBarTop,
  tabBarPosition: 'top',
  tabBarOptions: {
    swipeEnabled: true,
    showLabel: true,
    style: {
      backgroundColor: 'red'
    }
  }
})


