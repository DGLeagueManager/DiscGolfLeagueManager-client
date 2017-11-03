import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { TabNavigator, TabBarTop } from 'react-navigation';
import Info from './Info';
import Standings from './Standings';
import { palette } from '../../colorPalette';

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
  lazy: true,
  swipeEnabled: true,
  tabBarOptions: {
    showLabel: true,
    style: {
      backgroundColor: palette.primary
    },
    labelStyle: {
      color: palette.primary,
      color: palette.text
    },
    indicatorStyle: {
      backgroundColor: palette.accent
    }
  }
})


