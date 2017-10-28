import React, { Component } from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { Button, Icon, List, ListItem } from "react-native-elements"; // 0.17.0
import { Constants } from "expo";
import ScoreCounter from "./ScoreCounter";
import { postScores, incrementPlayerScore, decrementPlayerScore } from "../../actions/scoreCounterActions";
import "@expo/vector-icons"; // 5.2.0

class Scoring extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scoresLocked: false
    };
  }

  render() {
    return (
      <ScrollView>
        <List>
          {this.props.card.players.map((player, i) => {
            return (
              <ListItem
                roundAvatar
                key={i}
                subtitle={'overall round score goes here'}
                title={player.first_name + " " + player.last_name || null}
                containerStyle={{ height: 80 }}
                hideChevron
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
                    score={this.props.scores[player._id][this.props.hole.hole_number]}
                  />
                }
              />
            );
          })}
        </List>
        {this.props.isScoreKeeper ? (
          !this.state.scoresLocked ? (
            <Button
              onPress={e => {
                this.setState({ scoresLocked: !this.state.scoresLocked });
                this.props.onPostScores(this.props.currentRound)
              }}
              color="black"
              backgroundColor="red"
              title="Submit"
              buttonStyle={{ marginVertical: 20 }}
            />
          ) : (
              <Button
                onPress={() => {
                  this.setState({ scoresLocked: !this.state.scoresLocked });
                }}
                color="white"
                backgroundColor="orange"
                title="Update"
                buttonStyle={{ marginVertical: 20 }}
              />
            )
        ) : null}

      </ScrollView>
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
