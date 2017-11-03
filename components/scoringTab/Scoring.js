import React, { Component } from "react";
import {Text, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { Button, Icon, List, ListItem } from "react-native-elements"; // 0.17.0
import { Constants } from "expo";
import ScoreCounter from "./ScoreCounter";
import { postScores, incrementPlayerScore, decrementPlayerScore } from "../../actions/scoreCounterActions";
import "@expo/vector-icons"; // 5.2.0
import io from 'socket.io-client';
import { palette } from '../../colorPalette';

class Scoring extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scoresLocked: false
    };

    this.socket = io('http://ec2-54-165-58-14.compute-1.amazonaws.com:3000');
    this.socket.on('connect', () => {
      console.log('connection established from sc0ring');
    })
  }

  onSubmit(currentRoundObj) {

    payload = {
      type: 'UPDATE SCORE',
      id: this.props.currentRound._id,
      body: currentRoundObj
    }
    this.socket.emit('test', payload)
  }

  render() {
    return (
      <View style={{height: '100%', backgroundColor: palette.background}}>
        <List>
          {this.props.card.players.sort((a, b) =>
            (this.props.scores[a._id].scoreRelativeToPar > this.props.scores[b._id].scoresRelativeToPar))
            .map((player, i) => {
            return (
              <ListItem
                roundAvatar
                key={i}
                subtitle={this.props.scores[player._id].scoreRelativeToPar}
                title={player.first_name + " " + player.last_name || null}
                hideChevron
                subtitleStyle={{color: palette.secondary, fontSize: 18}}
                style={{backgroundColor: palette.primary}}
                titleStyle={{fontSize: 20, fontWeight: 'bold', color: palette.text}}
                label={
                  <ScoreCounter
                    style={{ flex: 1 }}
                    id={i}
                    increment={() => {
                      this.props.incrementPlayerScore(player._id, this.props.hole.hole_number)
                    }
                    }
                    decrement={() => {
                      this.props.decrementPlayerScore(player._id, this.props.hole.hole_number)
                    }
                    }
                    player={player}
                    isScoreKeeper={this.props.isScoreKeeper}
                    scoresLocked={this.state.scoresLocked}
                    score={this.props.scores[player._id].scores[this.props.hole.hole_number].score || this.props.hole.par}
                  />
                }
              />
            );
          })}
        </List>
        {this.props.isScoreKeeper ? (
          !this.state.scoresLocked ? (
            <Button
              onPress={ () => {
                this.setState({ scoresLocked: !this.state.scoresLocked });
                this.onSubmit(this.props.currentRound)
              }}
              color="black"
              backgroundColor={palette.accent2}
              title="Submit"
              buttonStyle={{ marginVertical: 20 }}
            />
          ) : (
              <Button
                onPress={() => {
                  this.setState({ scoresLocked: !this.state.scoresLocked });
                }}
                color="white"
                backgroundColor={palette.accent2}
                title="Update"
                buttonStyle={{ marginVertical: 20 }}
              />
            )
        ) : null}

      </View>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    id: state.auth.id,
    scores: state.getCurrentRoundDataReducer.scores,
    currentRound: state.getCurrentRoundDataReducer.currentRound
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incrementPlayerScore: (playerId, holeNum) => {
      dispatch(incrementPlayerScore(playerId, holeNum))
    },
    decrementPlayerScore: (playerId, holeNum) => {
      dispatch(decrementPlayerScore(playerId, holeNum))
    },
    onPostScores: currentRound => {
      dispatch(postScores(currentRound));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Scoring);
