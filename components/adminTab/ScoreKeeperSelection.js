import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import { Card, Button, Divider } from 'react-native-elements';
import ScoreKeeperCard from './ScoreKeeperCard';
import { connect } from 'react-redux';
import { postNewRound } from '../../actions/scoreKeeperSelectionActions'

class ScoreKeeperSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 1,
      scoreKeepers: {},
      finalCards: []
    }
  }

  componentWillMount() {
    //console.log(this.props)
    //this.generatePopulatedCards()
  }

  fun() {
    this.setState({ selected: 0 })
  }

  changeScoreKeeper (player, index) {
    this.setState(prevState => ({
      scoreKeepers: {
        ...prevState.scoreKeepers,
        [index]: player
      }
    }))
  }

  generatePopulatedCards() {
    populatedCards = [
      { players: ['aj', 'pete', 'rob', 'tristyn'] },
      { players: ['aj', 'pete', 'rob', 'tristyn'] },
      { players: ['aj', 'pete', 'rob', 'tristyn'] }
    ]

    //populatedCards = this.props.cards;

    let cards = [];
    for (let i = 0; i <= populatedCards.length-1; i++) {
      cards.push(<ScoreKeeperCard players={populatedCards[i].players} index={i} fun={() => { this.props.fun() }} changeScoreKeeper={this.changeScoreKeeper.bind(this)} selected={this.state.selected} hole={i} />)
    }
    return cards;
  }

  handleSubmit() {
    //Get round ID for round obj to send on submit  
    
    let newRound = {
      round_id: this.props.round_id,
      season: this.props.season,
      playersPresent: this.props.playersPresent,
      cards: this.state.finalCards
    }
    this.props.onSubmitNewRound(newRound)
  }

  render() {
    return (
        <ScrollView>
          {this.generatePopulatedCards().map(card => card)}
          <Button 
            backgroundColor="red"
            buttonStyle={{
            marginTop: 20,
            marginBottom: 20
            }}  
            title='Start Round!' 
            onPress={this.handleSubmit} 
          />
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
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
  },
});

const mapStateToProps = (state, ownProps) => {
  return {
    round_id: state.auth.round_id,
    season: state.auth.season,
    cards: state.newRoundReducer.newRound.cards,
    playersPresent: state.newRoundReducer.newRound.playersPresent
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitNewRound: (newRound) => {
      dispatch(postNewRound(newRound));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreKeeperSelection);
