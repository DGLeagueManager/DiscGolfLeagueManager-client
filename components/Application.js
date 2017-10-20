import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';
import { Text, View, Button, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import Scoring from './scoringTab/Scoring';
import League from './leagueTab/League';
import Results from './resultsTab/Results';
import AdminStack from './adminTab/AdminStack';

class Application extends Component {
  componentWillMount() {

  }
  render() {
    return <Stack />;
  }
}

const Tab = TabNavigator({
  AdminStack: {
    screen: AdminStack,
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
  Scoring: {
    screen: Scoring,
    navigationOptions: {
      tabBarLabel: 'Scoring',
      tabBarIcon: <Icon name="create" />
    }
  }, 
  Results: {
    screen: Results,
    navigationOptions: {
      tabBarLabel: 'Results',
      tabBarIcon: <Icon name="md-trophy" type="ionicon" />
    }  
  }
}, {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: 'turquoise',
    showIcon: true,
    showLabel: true
  }
});

const Stack = StackNavigator({
  Home: { screen: Tab },
  AdminStack: { screen: AdminStack }
}, {
  navigationOptions: {

  }
})

const mapDispatchToProps = dispatch => {
  return {
    getLeagueData: () => {
      displatch(getLeagueData());
    }
  }
}

export default connect(mapDispatchToProps)(Application);