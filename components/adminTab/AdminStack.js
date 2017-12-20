import React from 'react';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NewRound from './NewRound';
import AdminRoundConfigStart from './AdminRoundConfigStart';
import PlayerSelection from './PlayerSelection';
import ScoreKeeperSelection from './ScoreKeeperSelection';
import LeagueRoundInProgress from './LeagueRoundInProgress';
import { palette } from '../../colorPalette';

const NewRoundAdminStack = StackNavigator({
  NewRound: {
    screen: NewRound,
    navigationOptions: {
      header: null,
    },
  },
  AdminRoundConfigStart: {
    screen: AdminRoundConfigStart,
    navigationOptions: {
      headerTitle: 'Choose Participants',
      headerStyle: {
        backgroundColor: palette.primary,
      },
      headerTintColor: palette.accent,
      headerTitleStyle: {
        color: palette.text,
        alignSelf: 'center',
        marginRight: 70,
      },
    },
  },
  PlayerSelection: {
    screen: PlayerSelection,
    navigationOptions: {
      headerTitle: 'Assign Cards',
      headerStyle: {
        backgroundColor: palette.primary,
      },
      headerTintColor: palette.accent,
      headerTitleStyle: {
        color: palette.text,
        alignSelf: 'center',
        marginRight: 70,
      },
    },
  },
  ScoreKeeperSelection: {
    screen: ScoreKeeperSelection,
    navigationOptions: {
      headerTitle: 'Select a Scorekeeper',
      headerStyle: {
        backgroundColor: palette.primary,
      },
      headerTintColor: palette.accent,
      headerTitleStyle: {
        color: palette.text,
        alignSelf: 'center',
        marginRight: 70,
      },
    },
  },
});

const AdminStack = (props) => {
  if (props.currentRoundInProgress) {
    return <LeagueRoundInProgress />;
  }
  return <NewRoundAdminStack />;
};

const mapStateToProps = state => (
  {
    currentRoundInProgress: state.getCurrentRoundDataReducer.currentRoundInProgress,
  }
);

AdminStack.propTypes = ({
  currentRoundInProgress: PropTypes.bool.isRequired,
});

export default connect(mapStateToProps)(AdminStack);

