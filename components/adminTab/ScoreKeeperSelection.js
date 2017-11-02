import React, { Component } from "react";
import { Text, ScrollView, View, StyleSheet } from "react-native";
import { Card, Button, Divider } from "react-native-elements";
import ScoreKeeperCard from "./ScoreKeeperCard";
import { connect } from "react-redux";
import {
  postNewRound,
  addScoreKeeper
} from "../../actions/scoreKeeperSelectionActions";
import io from 'socket.io-client';
import axios from 'axios';

class ScoreKeeperSelection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 1,
      readyToStart: false
    };

    this.socket = io('http://ec2-54-165-58-14.compute-1.amazonaws.com:3000')
  }

  componentWillReceiveProps() {
    console.log("Here are the new cards", this.props.cards);
    let readyToStart = true;
    for(var cardkey in this.props.cards) {
      if (!this.props.cards[cardkey].scoreKeeper){
        console.log('There is not scoreKeeper in ',cardkey);
        readyToStart = false;
      }
    }
    this.setState({
      readyToStart :readyToStart
    })
  }

  generatePopulatedCards() {
    populatedCards = this.props.cards;
    let cards = [];

    Object.keys(populatedCards).forEach((key, index) => {
      let players = populatedCards[key].players;
      let hole = populatedCards[key].startingHole;
      let card = populatedCards[key];

      cards.push(
        <ScoreKeeperCard
          players={players}
          index={index}
          selected={this.state.selected}
          hole={hole}
          handleSelectScoreKeeper={this.handleScoreKeeperSelection.bind(this)}
          card={card}
        />
      );
    });
    return cards;
  }

  handleScoreKeeperSelection(player, card) {
    this.props.onSelectScoreKeeper(player, card);
  }

  handleSubmit() {

    let newRound = this.props.newRound;
    newRound.id = this.props.currentRound._id;
    newRound.current_season = this.props.currentSeason._id;

    let payload = {
      body: newRound,
      id: newRound.id,
      type: 'START ROUND'
    }

    console.log('OBJECT GETTNG SENT IN ADMIN STACK: ', payload)
    this.socket.emit('test', payload)
    this.props.onSubmitNewRound(newRound)
  }

  allCardsHaveScorekeepers() {
    // TODO: this isn't working, i think becuase the component does not re-render when a scorekeeper is selected?
    var result = true;
    let cards = this.props.cards;

    Object.keys(cards).forEach( key => {
      if (cards[key].scoreKeeper) {
        result = false;
      }
    })
    return result;
  }

  render() {

    return (
      <ScrollView>
        {this.generatePopulatedCards().map(card => card)}
        <Button
          backgroundColor="red"
          disabled={!this.state.readyToStart}
          buttonStyle={{
            marginTop: 20,
            marginBottom: 20
          }}
          title="Start Round!"
          onPress={ () => {this.handleSubmit()} }
        />
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
    currentRound: state.applicationReducer.currentRound,
    currentSeason: state.applicationReducer.currentSeason,
    cards: state.newRoundReducer.newRound.cards,
    playersPresent: state.newRoundReducer.newRound.playersPresent,
    newRound: state.newRoundReducer.newRound,
    currentCourse: state.applicationReducer.currentCourse
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmitNewRound: (newRound) => {
      dispatch(postNewRound(newRound));
    },
    onSelectScoreKeeper: (player, card) => {
      dispatch(addScoreKeeper(player, card));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ScoreKeeperSelection
);
