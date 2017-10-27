import React, { Component } from "react";
import { Text, ScrollView, View, StyleSheet } from "react-native";
import { Card, Button, Divider } from "react-native-elements";
import ScoreKeeperCard from "./ScoreKeeperCard";
import { connect } from "react-redux";
import {
  postNewRound,
  addScoreKeeper
} from "../../actions/scoreKeeperSelectionActions";
import axios from 'axios';

class ScoreKeeperSelection extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selected: 1
    };
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
  
    newRound.current_season = this.props.currentSeason._id;
    newRound.id = this.props.currentRound._id;
    this.props.onSubmitNewRound(this.props.newRound)
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
          disabled={this.allCardsHaveScorekeepers()}
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
