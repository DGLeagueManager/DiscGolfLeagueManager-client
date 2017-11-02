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
import { palette } from '../../colorPalette';

const NewRoundAdminStack = StackNavigator({
  NewRound: { 
    screen: NewRound,
    navigationOptions: {
      header: null
    }
  },
  AdminRoundConfigStart: { 
    screen: AdminRoundConfigStart,
    navigationOptions: {
      headerTitle: 'Choose Participants',
      headerStyle: {
        backgroundColor: palette.secondary
      },
      headerTitleStyle: {
        color: palette.text,
        alignSelf: 'center',
        marginRight: 70
      }
    }
  },
  PlayerSelection: { 
    screen: PlayerSelection,
    navigationOptions: {
      headerTitle: 'Assign Cards',
      headerStyle: {
        backgroundColor: palette.secondary
      },
      headerTitleStyle: {
        color: palette.text,
        alignSelf: 'center',
        marginRight: 70
      }
    } 
  },
  ScoreKeeperSelection: { 
    screen: ScoreKeeperSelection,
    navigationOptions: {
      headerTitle: 'Select a Scorekeeper',
      headerStyle: {
        backgroundColor: palette.secondary
      },
      headerTitleStyle: {
        color: palette.text,
        alignSelf: 'center',
        marginRight: 70
      }
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
  return {
    currentRoundInProgress: state.getCurrentRoundDataReducer.currentRoundInProgress
  };
};

export default connect(mapStateToProps)(AdminStack);

