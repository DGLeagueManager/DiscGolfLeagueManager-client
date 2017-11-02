import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import list from './dummyData';
import Scoring from './Scoring';
import { getCurrentRoundData } from '../../actions/getCurrentRoundDataActions';
import FinalizeScore from './FinalizeScore';
import HoleNavigator from './HoleNavigator';
import NotInRound from './NotInRound';

class ScoringContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.currentRoundInProgress !== this.props.currentRoundInProgress) {
      return true
    } else {
      return false
    }
  }

  render() {
    if (!this.props.currentRoundInProgress || !this.props.currentRound.players.includes(this.props.playerId)) {
      return (
        <NotInRound />
      );
    } else {
      return <HoleNavigator card={this.props.currentCard} isScoreKeeper={this.props.isScoreKeeper}/>
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentRoundInProgress: state.getCurrentRoundDataReducer.currentRoundInProgress,
    playerId: state.auth.id,
    isScoreKeeper: state.getCurrentRoundDataReducer.isScoreKeeper,
    currentRoundId: state.applicationReducer.currentRoundId,
    currentCard: state.getCurrentRoundDataReducer.currentCard
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetCurrentRound: (playerId, roundId) => {
      dispatch(getCurrentRoundData(playerId, roundId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoringContainer);
