import React, { Component } from 'react';
import { Text, View, InteractionManager } from 'react-native';
import { TabNavigator, TabBarTop } from 'react-navigation';
import Info from './Info';
import Standings from './Standings';
import { palette } from '../../colorPalette';

export default class League extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
    };
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({ ready: true });
    });
  }

  render() {
    if (!this.state.ready) {
      return (<View><Text>Loading......</Text></View>);
    }
    return (
      <Tabs />
    );
  }
}

const Tabs = TabNavigator({
  Info: {
    screen: Info,
    navigationOptions: {
      tabBarLabel: 'Info',
    },
  },
  Standings: {
    screen: Standings,
    navigationOptions: {
      tabBarLabel: 'Standings',
    },
  },
}, {
  tabBarComponent: TabBarTop,
  tabBarPosition: 'top',
  lazy: false,
  animationEnabled: false,
  swipeEnabled: false,
  tabBarOptions: {
    showLabel: true,
    style: {
      backgroundColor: palette.primary,
    },
    labelStyle: {
      color: palette.text,
    },
    indicatorStyle: {
      backgroundColor: palette.accent,
    },
  },
});
