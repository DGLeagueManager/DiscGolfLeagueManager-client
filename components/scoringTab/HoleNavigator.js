import React from 'react';
import { TabNavigator, TabBarTop } from "react-navigation";
import Scoring from './Scoring';
import { Text, View } from 'react-native';
import { holeDetails } from './dummyData';

const SampleComponent = ({ hole }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text> Par: {hole.par} </Text>
    <Text> Length: {hole.length} </Text>
  </View>
);

const generateScreen = hole => <SampleComponent hole={hole} />;

const generateTabs = holeDetails => {
  return Object.keys(holeDetails).reduce((result, key) => {
    let hole = holeDetails[key];
    result[key] = {
      screen: generateScreen.bind(null, hole),
      navigationOptions: {
        tabBarLabel: "Hole" + key
      }
    };
    return result;
  }, {});
};

const HoleNavigator = TabNavigator(
  generateTabs(holeDetails),
  {
    tabBarComponent: TabBarTop,
    tabBarPosition: "top",
    tabBarOptions: {
      scrollEnabled: true,
      swipeEnabled: true,
      showLabel: true,
      style: {
        backgroundColor: "red"
      }
    }
  }
);

export default HoleNavigator;




