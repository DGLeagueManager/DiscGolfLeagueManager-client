import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { TabNavigator, TabBarTop } from 'react-navigation';
import Info from './Info';
import Standings from './Standings';

export default class League extends Component {
  /** We can declare nagivationOptions here on the object instead of on the MainNav component like this:
    static navigationOptions = {
      tabBarIcon: <Icon name="pencil" type="entypo" />
    }
  */
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
    scrollEnabled: true,
    showLabel: true,
    style: {
      paddingTop: 24
    }
  }
})


