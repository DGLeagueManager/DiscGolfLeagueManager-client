import React, { Component } from "react";
import { TabNavigator, TabBarTop } from "react-navigation"; // 1.0.0-beta.15
import { Text, View } from "react-native";
import { holeDetails } from "./dummyData";
import FinalizeScore from './FinalizeScore';

class HoleNavigator extends Component {
  constructor(props) {
    super(props);
  }

  generateScreen(hole, card, isScoreKeeper) {
    return (
      <SampleComponent hole={hole} card={card} isScoreKeeper={isScoreKeeper} />
    );
  }

  generateTabs(holeDetails) {
    return Object.keys(holeDetails).reduce((result, key) => {
      let hole = holeDetails[key];
      result[key] = {
        screen: this.generateScreen.bind(
          null,
          hole,
          this.props.card,
          this.props.isScoreKeeper
        ),
        navigationOptions: {
          tabBarLabel: "Hole " + key
        }
      };
      return result;
    }, {});
  }

  render() {
    const TabNav = TabNavigator(
      Object.assign(this.generateTabs(holeDetails), FinalizeScoreTab), {
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
    });
    return <TabNav />;
  }
}

const SampleComponent = ({ hole, card, isScoreKeeper }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text> Par: {hole.par} </Text>
    <Text> Length: {hole.length} </Text>
    <Text> Player1: {card.players[0].first_name} </Text>
    {isScoreKeeper ? (
      <Text> I am scorekeeper </Text>
    ) : (
      <Text> I am NOT scorekeeper </Text>
    )}
  </View>
);

const FinalizeScoreTab = {
  FinalizeScore: {
    screen: FinalizeScore,
    navigationOptions: {
      tabBarLabel: "FinalizeScore"
    }
  }
};

export default HoleNavigator;
