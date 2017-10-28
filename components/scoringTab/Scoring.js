import React, { Component } from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { Button, Icon, List, ListItem } from "react-native-elements"; // 0.17.0
import { Constants } from "expo";
import ScoreCounter from "./ScoreCounter";
import { postScores, incrementPlayerScore } from "../../actions/scoreCounterActions";
import "@expo/vector-icons"; // 5.2.0

class Scoring extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scoresLocked: false
    };
  }

  increment(id) {
    console.log('incrementing score for player: ', id)
  }

  decrement(id) {
    console.log('decrementing score for player: ', id)
  }

  render() {
    console.log(this.props);
    return(
      <ScrollView>
        <List>
          {this.props.card.players.map((player, i) => {
            return (
              <ListItem
                roundAvatar
                // avatar={{ uri: player.avatar_url || null }}
                key={i}
                subtitle={'overall round score goes here'}
                title={player.first_name + " " + player.last_name || null}
                containerStyle={{ height: 80 }}
                hideChevron
                label={
                  <ScoreCounter
                    style={{ flex: 1 }}
                    id={i}
                    increment={() => this.increment(player._id)}
                    decrement={() => this.decrement(player._id)}
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
    onPostScores: scores => {
      dispatch(postScores(scores));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Scoring);
