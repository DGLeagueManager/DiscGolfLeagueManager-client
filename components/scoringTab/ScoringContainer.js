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
  
    if(this.props.currentRoundId) {
      onGetCurrentRound(this.props.currentRoundId, this.props.playerId)
    } else {
      setInterval(() => {        
        this.props.onGetCurrentRound(this.props.currentRoundId, this.props.playerId)}, 10000)
    }
    
  }

  render() {
    console.log('CURRENT ROUND PROPS: ', this.props)
    if (!this.props.currentRound) {
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
    currentRoundId: state.applicationReducer.currentRoundId
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
