import React, { Component } from 'react';
import { Constants } from 'expo';
import { StackNavigator } from 'react-navigation';
import { Text, View, Button, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import NewRound from './NewRound';
import AdminRoundConfigStart from './AdminRoundConfigStart';
import PlayerSelection from './PlayerSelection';
import ScoreKeeperSelection from './ScoreKeeperSelection';
import LeagueRoundInProgress from './LeagueRoundInProgress';
import { connect } from 'react-redux'

const NewRoundAdminStack = StackNavigator({
  NewRound: { 
    screen: NewRound,
    navigationOptions: {
      headerTitle: 'New Round',
      headerStyle: {
        // backgroundColor: 'red'
      }
    }  
  },
  AdminRoundConfigStart: { 
    screen: AdminRoundConfigStart,
    navigationOptions: {
      headerTitle: 'Choose Participants',
    }
   },
  PlayerSelection: { 
    screen: PlayerSelection,
    navigationOptions: {
      headerTitle: 'Assign Cards',
    } 
  },
  ScoreKeeperSelection: { 
    screen: ScoreKeeperSelection,
    navigationOptions: {
      headerTitle: 'Select a Scorekeeper',
    }
  }
});

class AdminStack extends Component {

  render() {
    if (this.props.currentRoundInProgress) {
      return (<LeagueRoundInProgress />);
    } else {
      return (<NewRoundAdminStack />);
    }
  }
}



const mapStateToProps = (state, ownProps) => {
  //TODO: Round in progress should be dependant on response from server after post new round or timed interval from get currentRound
  return {
    currentRoundInProgress: state.getCurrentRoundDataReducer.currentRoundInProgress
  };
};

export default connect(mapStateToProps)(AdminStack);

