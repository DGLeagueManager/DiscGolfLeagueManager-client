import React, { Component } from 'react';
import { TabNavigator, TabBarTop } from 'react-navigation';
import { seasonData } from './TempFileDeleteMe';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import CurrentRoundResults from './CurrentRoundResults';
import CompletedRoundResults from './CompletedRoundResults';
import { palette } from '../../colorPalette';

class ResultsNavigator extends Component {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate(nextProps) {
    // We are expecting nextProps to have the new currentRound ID when a round ends
    // but it's coming in as the same as this.props.currentRound
    // console.log("^^^^^^^%%%%%%%%", nextProps.currentRound._id !== this.props.currentRound._id)
    // console.log("&*&*&*&*&*&*& nextProps round id: ", nextProps.currentRound._id, "this props round id :", this.props.currentRound._id)
    return (nextProps.currentRound._id !== this.props.currentRound._id) ||
      (nextProps.initialCurrentRound !== this.props.initialCurrentRound);
  }

  generateCurrentScreen() {
    return <CurrentRoundResults />
  }

  generateCompletedScreens(round) {
    return <CompletedRoundResults round={round} />
  }

  generateTabs( rounds ) {
    let completedRounds = rounds.filter((round) => round.completed === true);
    let completedRoundTabs = completedRounds.reduce((result, round) => {
      result[round.round_number] = {
        screen: this.generateCompletedScreens.bind(this, round),
        navigationOptions: {
          lazy: true,
          tabBarLabel: "Round " + round.round_number
        }
      };
      return result;
    }, {});
    let currentRound = rounds.find((round) => round.in_progress === true);
    let currentRoundTab = {};
    if (currentRound) {
      currentRoundTab = {
        [currentRound.round_number]: {
          screen: this.generateCurrentScreen.bind(this),
          navigationOptions: {
            lazy: true,
            tabBarLabel: "Round " + currentRound.round_number
          }
        }
      }
    }
    return Object.assign({}, completedRoundTabs, currentRoundTab);
  }

  render() {
    if(this.props.currentSeason.rounds.some( round => round.completed || round.in_progress)) {
      const TabNav = TabNavigator(
        this.generateTabs(this.props.currentSeason.rounds),
        {
          tabBarComponent: TabBarTop,
          tabBarPosition: "top",
          tabBarOptions: {
            scrollEnabled: true,
            swipeEnabled: true,
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
    } else {
      return (
        <View style= {{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>No Rounds have been recoreded this season</Text>
        </View>
      )
    }
  }

}

// const Results = ({ round }) => (
//   <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//     <Text> Round Number: {round.round_number} </Text>
//     <Text> Number of players: {round.players.length}</Text>
//   </View>
// );

const mapStateToProps = (state, ownProps) => {
  return {
     currentSeason: state.applicationReducer.currentSeason,
     leaguePlayers: state.applicationReducer.leaguePlayers,
     currentRound: state.getCurrentRoundDataReducer.currentRound,
     initialCurrentRound: state.applicationReducer.currentRound
  }
}

export default connect(mapStateToProps)(ResultsNavigator)
