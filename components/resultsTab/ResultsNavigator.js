import React, { Component } from 'react';
import { TabNavigator, TabBarTop } from 'react-navigation';
import { seasonData } from './TempFileDeleteMe';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import Results from './Results';

class ResultsNavigator extends Component {
  constructor(props) {
    super(props)
  }

  generateScreen(round) {
      return <Results round={round} />
    }
    
  generateTabs( rounds ) {
    return rounds.reduce((result, round) => {
      result[round.round_number] = {
        screen: this.generateScreen.bind(this, round),
        navigationOptions: {
          lazy: true,
          tabBarLabel: "Round " + round.round_number
        }
      };
      return result;
    }, {});
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
     leaguePlayers: state.applicationReducer.leaguePlayers
  }
}

export default connect(mapStateToProps)(ResultsNavigator)