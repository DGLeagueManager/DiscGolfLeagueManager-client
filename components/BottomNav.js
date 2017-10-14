import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import TestForm from './TestForm';
import Scoring from './Scoring.js';
import "@expo/vector-icons"; // 5.2.0


class TestFormButton extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Test Form',
    tabBarIcon: ({}) => (
      <Icon name='pencil' type='entypo' />
    )
  };

  render() {
    return (
      <Button 
        onPress={ () => this.props.navigation.navigate('TestForm') }
        title="Go to Test Form"
      />
    )
  };
}

class ScoringButton extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Scoring',
    tabBarIcon: ({}) => (
      <Icon name='trophy' type='entypo' />
    )
  };

  render() {
    return (
      <Button 
        onPress={ () => this.props.navigation.navigate('Scoring') }
        title="Enter Scores"
      />
    )
  }
}

const BottomNav = TabNavigator({
  Scoring: {
    screen: Scoring,
  },
  TestForm: {
    screen: TestForm,
  },
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default BottomNav;
