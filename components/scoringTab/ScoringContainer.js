import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import list from './dummyData';
import Scoring from './Scoring';
import { getCurrentRoundData } from '../../actions/getCurrentRoundDataActions';
import FinalizeScore from './FinalizeScore';
import HoleNavigator from './HoleNavigator';

class ScoringContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('THIS DOT PROPS AND NEXT PROPS IN SCORING CONTAINER: ', this.props, nextProps)
    if (nextProps.currentRoundInProgress === false || nextProps.currenRoundInProgress === undefined) {
      return true
    } else {
      return false
    }
  }

  render() {
    console.log('SCORING CONTAINER PROPS: ', this.props)
    if (!this.props.currentRoundInProgress) {
      return (
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text> You are not currently in a game </Text>
        </View>
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
