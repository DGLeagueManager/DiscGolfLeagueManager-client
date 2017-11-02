import React, { Component } from 'react';
import { TabNavigator, TabBarTop } from 'react-navigation';
import { seasonData } from './TempFileDeleteMe';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import CurrentRoundResults from './CurrentRoundResults';
import CompletedRoundResults from './CompletedRoundResults';

class ResultsNavigator extends Component {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.currentRound._id !== this.props.currentRound._id;
  }

  generateCurrentScreen() {
    return <CurrentRoundResults />
  }
  
  generateCompletedScreens(round) {
    return <CompletedRoundResults round={round} />
  }
    
  generateTabs( rounds ) {
    let completedRounds = rounds.filter((round) => round.completed === true);
    console.log('completed rounds ??????? ', completedRounds)
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
    console.log(completedRoundTabs)
    let currentRound = rounds.find((round) => round.in_progress === true);
    console.log('current round hee hee', currentRound)
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

  render( ) {
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
            backgroundColor: "red"
          }
        }
      });
    return <TabNav />;
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
     currentRound: state.getCurrentRoundDataReducer.currentRound
  }
}

export default connect(mapStateToProps)(ResultsNavigator)