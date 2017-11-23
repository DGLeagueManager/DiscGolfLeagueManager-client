import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import FinalScoreCard from './FinalScoreCard';
import { submitFinalizedCard } from '../../actions/finalizeScoreActions';
import { palette } from '../../colorPalette';

class FinalizeScore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: false,
    };

    this.sockets = io('http://ec2-54-165-58-14.compute-1.amazonaws.com:3000');
  }

  handleSubmit() {
    // Post finalized score card
    this.props.currentCard.is_completed = true;

    const payload = {
      type: 'FINISH CARD',
      body: this.props.currentRound,
      id: this.props.currentRound._id,
    };

    this.sockets.emit('test', payload);
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {this.props.currentCard.players.map((player, i) =>
          <FinalScoreCard 
            key={i} 
            player={player} 
            scores={this.props.currentRound.scores[player._id]} 
          />
        )}
        {this.props.isScoreKeeper ? 
          <Button
            buttonStyle={{
              marginTop: 20,
              marginBottom: 20,
              backgroundColor: palette.accent,
            }}
            disabled={this.state.disabled}
            title={this.state.disabled ? 'Scores have been submitted' : 'Submit Final Scores'}
            onPress={() => {
              this.handleSubmit();
              this.setState({ disabled: !this.state.disabled });
            }}
          /> : null
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.background,
    height: '100%',
  },
});

FinalizeScore.propTypes = {
  currentRound: PropTypes.object,
  currentCard: PropTypes.object,
  isScoreKeeper: PropTypes.bool,
};

FinalizeScore.defaultProps = {
  currentRound: {},
  currentCard: {},
};

const mapStateToProps = state => ({
  currentRound: state.getCurrentRoundDataReducer.currentRound,
  playerId: state.auth.id,
  currentCard: state.getCurrentRoundDataReducer.currentCard,
  isScoreKeeper: state.getCurrentRoundDataReducer.isScoreKeeper,
});

const mapDispatchToProps = dispatch => ({
  onSubmitFinalizedCard: finalizedCard => (
    dispatch(submitFinalizedCard(finalizedCard))
  ),
});


export default connect(mapStateToProps, mapDispatchToProps)(FinalizeScore);

