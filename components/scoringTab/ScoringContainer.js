import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import list from './dummyData';
import Scoring from './Scoring';
import { getCurrentRoundData } from '../../actions/getCurrentRoundDataActions'


class ScoringContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }

  }

  componentWillMount() {
    //map state to props needs to include:
      //playerId
      //roundId
      //currentCard
    currentRoundId = this.props.currentRound


    this.props.onGetCurrentRound(this.props.playerId, currentRoundId)
    
  }

  render() {
    console.log('CURRENT ROUND PROPS: ', this.props)
    if (!this.props.currentCard) {
      return (
        <View style={{ flex: 1, alignItems: 'center' }} >
          <Text> You are not currently in a game </Text>
        </View>
      )
    } else {
      return <Scoring />
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentRound: state.getCurrentRoundDataReducer.currentRound,
    playerId: state.auth.id,
    currentRound: state.applicationReducer.currentRound
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetCurrentRound: (playerId, roundId) => {
      dispatch(getCurrentRoundData(playerId, roundId));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoringContainer);
