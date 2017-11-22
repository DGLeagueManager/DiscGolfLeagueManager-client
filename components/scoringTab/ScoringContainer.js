import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import { getCurrentRoundData } from '../../actions/getCurrentRoundDataActions';
import HoleNavigator from './HoleNavigator';
import NotInRound from './NotInRound';

class ScoringContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.socket = io("http://ec2-54-165-58-14.compute-1.amazonaws.com:3000");
    this.socket.on("connect", () => {
      console.log("connection established from sc0ring contain3r");
    });

    this.onSubmit = this.onSubmit.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.currentRoundInProgress !== this.props.currentRoundInProgress
    );
  }

  onSubmit(currentRoundObj) {
    const payload = {
      type: "UPDATE SCORE",
      id: this.props.currentRound._id,
      body: currentRoundObj,
    };
    this.socket.emit("test", payload);
  }

  render() {
    if (
      !this.props.currentRoundInProgress ||
      !this.props.currentRound.players.includes(this.props.playerId)
    ) {
      return <NotInRound />;
    }
    return (
      <HoleNavigator
        card={this.props.currentCard}
        isScoreKeeper={this.props.isScoreKeeper}
        onSubmit={this.onSubmit}
      />
    );
  }
}

const mapStateToProps = state => (
  {
    currentRoundInProgress: state.getCurrentRoundDataReducer.currentRoundInProgress,
    playerId: state.auth.id,
    isScoreKeeper: state.getCurrentRoundDataReducer.isScoreKeeper,
    currentRoundId: state.applicationReducer.currentRoundId,
    currentCard: state.getCurrentRoundDataReducer.currentCard,
    currentRound: state.getCurrentRoundDataReducer.currentRound,
  }
);

ScoringContainer.propTypes = ({
  currentRoundInProgress: PropTypes.bool,
  currentRound: PropTypes.object.isRequired,
  currentCard: PropTypes.object.isRequired,
  playerId: PropTypes.string.isRequired,
  isScoreKeeper: PropTypes.bool.isRequired,
});

ScoringContainer.defaultProps = ({
  currentRoundInProgress: false,
});

export default connect(mapStateToProps)(ScoringContainer);
