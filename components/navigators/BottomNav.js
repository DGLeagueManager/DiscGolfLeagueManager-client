import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Icon } from 'react-native-elements';
import AdminRoundConfigStart from '../adminTab/AdminRoundConfigStart';
import League from '../leagueTab/League';
import Scoring from '../scoringTab/Scoring';
import Results from '../resultsTab/Results';

export const BottomNav = () => (
  <Tabs />
)

const Tabs = TabNavigator(
  {
    Admin: {
      screen: AdminRoundConfigStart,
      navigationOptions: {
        tabBarLabel: "Admin",
        tabBarIcon: <Icon name="person" />
      }
    },
    League: {
      screen: League,
      navigationOptions: {
        tabBarLabel: "League",
        tabBarIcon: <Icon name="stars" />,
        headerTitle: "Kenny Rules"
      }
    },
    Scoring: {
      screen: Scoring,
      navigationOptions: {
        tabBarLabel: "Scoring",
        tabBarIcon: <Icon name="create" />
      }
    },
    Results: {
      screen: Results,
      navigationOptions: {
        tabBarLabel: "Results",
        tabBarIcon: <Icon name="md-trophy" type="ionicon" />
      }
    }
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: "turquoise",
      showIcon: true,
      showLabel: true
    }
  }
);
