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


    componentWillMount() {
      fetch('http://ec2-54-165-58-14.compute-1.amazonaws.com:3000/getPlayerCard', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          player_id: this.props.current_player._id,
          round_id: "59ea986dfb55674bbf2af12f"
        })
      })
      .then((res)=>{
        return res.json(res)
      })
      .then((card)=>{
        this.setState({ card: card })
        console.log(this.state.card.score_keeper ===this.props.current_player._id)
      })
      .then(()=>{
        this.getCard();
      })
      .then(()=>{
        this.getPlayerList();
      })
    }

    getPlayerList() {
      this.setState({ players: this.state.card.players })
    }

    getCard() {
      this.setState({ isScorekeeper: this.props.current_player._id === this.state.card.score_keeper })
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
                  // avatar={{ uri: ele.avatar_url || null }}
                  key={i}
                  subtitle={ele.subHeader || null}
                  title={ele.first_name+' '+ele.last_name || null}
                  containerStyle={{ height: 80 }}
                  hideChevron
                  label={
                  <ScoreCounter
                    style={{ flex: 1 }}
                    id={i}
                    increment={() => this.increment(id)}
                    decrement={() => this.decrement(id)}
                    player={this.state.players[id]}
                    isScorekeeper={this.state.isScorekeeper}
                    isOpen={this.state.isOpen}
                    score={this.state.score}
                  />
                  }
                />
              )
            })
          }
        </List>
        {
          this.state.isScorekeeper ? (
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
    scores: state.scoreCounterReducer.scores,
    current_player: state.auth.user,
  };
}


const mapDispatchToProps = (dispatch) => {
  return {
    onPostScores: (scores) => { dispatch(postScores(scores)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scoring);
