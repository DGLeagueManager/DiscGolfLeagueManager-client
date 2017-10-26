import React from 'react';
import { TabNavigator, TabBarTop } from "react-navigation";
import Scoring from './Scoring';


const generateScreen = (hole) => {
    return (
      <Scoring hole={hole} /> 
    )
  }

const generateTabs = (holeDetails) => {
  return Object.keys(holeDetails).reduce( (result, key) => {
    let hole = holeDetails[key];
    result[key] = {
      screen: generateScreen(hole),
      navigationOptions: {
        tabBarLabel: 'Hole ' + key
      }
    }
    return result;
  }, {})
}

const Tabs = TabNavigator(
  generateTabs(),
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

// Dummy data to be replaced by incoming hole Details object
const holeDetails = {
  1: {
    par: 3,
    length: 380
  },
  2: {
    par: 4,
    length: 450
  },
  3: {
    par: 3,
    length: 280,
  },
  4: {
    par: 3,
    length: 279,
  },
  5: {
    par: 4,
    length: 602,
  },
  6: {
    par: 3, 
    length: 338
  },
  7: {
    par: 3,
    length: 380
  },
  8: {
    par: 4,
    length: 450
  },
  9: {
    par: 3,
    length: 280,
  },
  10: {
    par: 3,
    length: 279,
  },
  11: {
    par: 4,
    length: 602,
  },
  12: {
    par: 3, 
    length: 338
  },
  13: {
    par: 3,
    length: 380
  },
  14: {
    par: 4,
    length: 450
  },
  15: {
    par: 3,
    length: 280,
  },
  16: {
    par: 3,
    length: 279,
  },
  17: {
    par: 4,
    length: 602,
  },
  18: {
    par: 3, 
    length: 338
  }
}