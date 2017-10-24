import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { FormLabel, FormInput, Button, Icon, List, ListItem, CheckBox, Header, Divider } from 'react-native-elements'; // 0.17.0
import { Constants } from 'expo';
import ScoreCounter from './ScoreCounter';
import { postScores } from '../../actions/scoreCounterActions';
import list from './dummyData';

import "@expo/vector-icons"; // 5.2.0

class Scoring extends Component {
  constructor(props) {
    super(props);

    this.state={
      card: {isScorekeeper: false},
      isOpen: true,
      checked: false,
      holeData: {
        holeNumber: 1,
        par: 3,
        feet: 382
      },
      players: list
    };

  }

  increment(id) {
    let player = Object.assign({}, this.state.players[id])
    player.score++;
    this.setState({ players: { ...this.state.players, [id]: player } })
  }

  decrement(id) {
    let player = Object.assign({}, this.state.players[id])
    player.score--;
    this.setState({ players: { ...this.state.players, [id]: player } })
  }

  addScores(e) {
    console.log(this.props)
    this.setState({ isOpen: !this.state.isOpen })

    let scores = {
      hole: 2,
      player_score: [
      {[this.state.players[1].player_id]: this.state.players[1].score},
      {[this.state.players[2].player_id]: this.state.players[2].score},
      {[this.state.players[3].player_id]: this.state.players[3].score}
      ]
    }

    this.props.onPostScores(scores);
    e.preventDefault();
  }

  render() {
    return (
      <ScrollView>
        <List>
          {
            Object.keys(this.state.players).map((id, i) => {
              var ele = this.state.players[id]
              return (
                <ListItem
                  roundAvatar
                  avatar={{ uri: ele.avatar_url || null }}
                  key={i}
                  subtitle={ele.subHeader || null}
                  title={ele.name || null}
                  containerStyle={{ height: 80 }}
                  hideChevron
                  label={
                    <ScoreCounter
                      style={{ flex: 1 }}
                      id={i}
                      increment={() => this.increment(id)}
                      decrement={() => this.decrement(id)}
                      player={this.state.players[id]}
                      isOpen={this.state.isOpen}
                      isScorekeeper = {this.state.card.isScorekeeper}
                      score={ele.score}
                    />
                  }
                />
              )
            })
          }
        </List>
        {
          this.state.card.isScorekeeper ? (
                  this.state.isOpen ?
                    <Button
                      onPress={ (e)=>{ this.addScores(e) } }
                      color='black'
                      backgroundColor="red"
                      title="Submit"
                      buttonStyle={{ marginVertical: 20 }}
                    />
                  :
                    <Button
                      onPress={ ()=>{ this.setState({ isOpen: !this.state.isOpen }) } }
                      color='white'
                      backgroundColor="orange"
                      title="Update"
                      buttonStyle={{ marginVertical: 20 }}
                    />
                  ) : null
        }
      </ScrollView>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    scores: state.scoreCounterReducer.scores
  };
}


const mapDispatchToProps = (dispatch) => {
  return {
    onPostScores: (scores) => { dispatch(postScores(scores)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scoring);
