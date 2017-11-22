import React, { Component } from "react";
import { TabNavigator, TabBarTop } from "react-navigation"; // 1.0.0-beta.15
import { Text, View } from "react-native";
import { holeDetails } from "./dummyData";
import FinalizeScore from './FinalizeScore';
import Scoring from './Scoring';
import { connect } from 'react-redux';
import { palette } from '../../colorPalette';

class HoleNavigator extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.currentRoundInProgress === false) {
      return true
    } else {
      return false
    }
  }
  
  generateScreen(hole, card, isScoreKeeper, onSubmit) {
    return (
      <Scoring
        hole={hole}
        card={card}
        isScoreKeeper={isScoreKeeper}
        onSubmit={onSubmit}
      />
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
          this.props.isScoreKeeper,
          this.props.onSubmit
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
      //TODO: map holeDetails to props from round.course instead of using this dummy data import
      Object.assign(this.generateTabs(holeDetails), FinalizeScoreTab), {
        tabBarComponent: TabBarTop,
        tabBarPosition: "top",
        swipeEnabled: true,
        tabBarOptions: {
          scrollEnabled: true,
          showLabel: true,
          style: {
            backgroundColor: palette.primary
          },
          indicatorStyle: {
            backgroundColor: palette.accent
          }
        }
      });
    return <TabNav />;
  }
}

const FinalizeScoreTab = {
  FinalizeScore: {
    screen: FinalizeScore,
    navigationOptions: {
      tabBarLabel: "Final"
    }
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    currentRoundInProgress: state.getCurrentRoundDataReducer.currentRoundInProgress
  };
};

export default connect(mapStateToProps)(HoleNavigator);