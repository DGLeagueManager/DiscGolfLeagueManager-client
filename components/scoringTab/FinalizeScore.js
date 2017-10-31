import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet } from "react-native";
import { Card, Button, Divider } from "react-native-elements";
import { connect } from 'react-redux';
import FinalScoreCard from './FinalScoreCard';
import { submitFinalizedCard } from '../../actions/finalizeScoreActions';
import io from 'socket.io-client';

class FinalizeScore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: false
    };

    this.sockets = io('http://ec2-54-165-58-14.compute-1.amazonaws.com:3000');
  }

  handleSubmit() {
    //Post finalized score card
    this.props.currentCard.is_completed = true;

    let payload = {
      type: 'FINISH CARD',
      body: this.props.currentRound,
      id: this.props.currentRound._id
    }

    this.sockets.emit('test', payload)
  }

  render() {
    return (
      <ScrollView >
        {this.props.currentCard.players.map((player, i) =>
          <FinalScoreCard 
            key={i} 
            player={player} 
            scores={this.props.currentRound.scores[player._id]} 
          />
        )}
        {this.props.isScoreKeeper ? 
          <Button
            backgroundColor="red"
            buttonStyle={{
              marginTop: 20,
              marginBottom: 20
            }}
            disabled={this.state.disabled}
            title={this.state.disabled ? "Scores have been submitted" : "Submit Final Scores"}
            onPress={() => {
              this.handleSubmit()
              this.setState({ disabled: !this.state.disabled })
            }}
          />
        :
        null
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 20
  },
  header: {
    fontSize: 30
  },
  button: {
    marginTop: 5
  },
  view: {
    paddingTop: 20
  }
});

const mapStateToProps = (state, ownProps) => {
  return {
    currentRound: state.getCurrentRoundDataReducer.currentRound,
    playerId: state.auth.id,
    currentCard: state.getCurrentRoundDataReducer.currentCard,
    isScoreKeeper: state.getCurrentRoundDataReducer.isScoreKeeper,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmitFinalizedCard: finalizedCard => {
      dispatch(submitFinalizedCard(finalizedCard));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FinalizeScore);

