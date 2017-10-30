import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet } from "react-native";
import { Card, Button, Divider } from "react-native-elements";
import { connect } from 'react-redux';
import FinalScoreCard from './FinalScoreCard';

class FinalizeScore extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }

  generateFinalScoreCards() {
    //Follow pattern below:
      //Generate 1 "final score card" for every player on the current card
      //pass down all score information associated with that individual player
      //map and render individual scores


    // populatedCards = this.props.cards;
    // let cards = [];

    // Object.keys(populatedCards).forEach((key, index) => {
    //   let players = populatedCards[key].players;
    //   let hole = populatedCards[key].startingHole;
    //   let card = populatedCards[key];

    //   cards.push(
    //     <FinalScoreCard
    //       players={players}
    //       index={index}
    //       selected={this.state.selected}
    //       hole={hole}
    //       handleSelectScoreKeeper={this.handleScoreKeeperSelection.bind(this)}
    //       card={card}
    //     />
    //   );
    // });
    // return cards;

  }
  
  handleSubmit() {
    //Post finalized score card
  }
  
  render() {
    return (
      <ScrollView >
        <FinalScoreCard />
        <Button
          backgroundColor="red"
          buttonStyle={{
            marginTop: 20,
            marginBottom: 20
          }}
          title="Submit Final Scores"
          onPress={() => { this.handleSubmit() }}
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
    currentRound: state.getCurrentRoundDataReducer.currentRound,
    playerId: state.auth.id,
    currentCard: state.getCurrentRoundDataReducer.currentCard
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

// {this.generateFinalScoreCards().map(card => card)}