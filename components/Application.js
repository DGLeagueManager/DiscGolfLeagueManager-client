import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';
import { Text, View, Button, Image } from 'react-native';
import { Constants } from 'expo';
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
    // return (<Text>OOOOOOOOOOO</Text>);
  }
}
const TestScreen = () => {
  return (<Text>OOOOOOOOOOO</Text>);
}

const Tab = TabNavigator({
  AdminStack: {
    screen: AdminStack,
    navigationOptions: {
      tabBarLabel: 'Admin',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="person" color={tintColor} />
      ),
    }
  },
  League: {
    screen: League,
    navigationOptions: {
      tabBarLabel: 'League',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="stars" color={tintColor} />
      ),
    }
  },
  Scoring: {
    screen: Scoring,
    navigationOptions: {
      tabBarLabel: 'Scoring',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="create" color={tintColor} />
      ),
    }
  },
  Results: {
    screen: Results,
    navigationOptions: {
      tabBarLabel: 'Results',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-trophy" type="ionicon" color={tintColor} />
      ),
    }
  }
}, {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: "red",
    showIcon: true,
    showLabel: true,
    style: {
      height: 50
    }
  },
  navigationOptions: {
    lazy: true,
    headerLeft: (<Icon name="menu" color='#fff' />),
    headerTitle: 'DISC GOLF LEAGUE MANAGER',
    headerTitleStyle: {
      color: '#fff',
      //TODO: make these work
      // fontFamily: 'Roboto'
      // justifyContent: 'center',
      // alignItems: 'center'
    },
    headerStyle: {
      backgroundColor: "#2196f3",
      height: 50,
      paddingLeft: 15
    }
  }
});

const Stack = StackNavigator({
  Home: { screen: Tab },
  AdminStack: {
    screen: AdminStack
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
