import React, { Component } from 'react';
import { View, ScrollView, Text, Picker, Modal, TouchableHighlight } from 'react-native';
import { Button, Divider } from 'react-native-elements';
import PlayerSelectionCard from './PlayerSelectionCard';
import { connect } from 'react-redux'

class PlayerSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: '1',
      enabled: false,
      modalVisible: false,
    }
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  generateEmptyCards() {
    playersTotal = this.props.amPlayers.length + this.props.proPlayers.length
    numberOfCards = Math.ceil(playersTotal / 4);
    let cards = [];
    for (let i = 1; i <= numberOfCards; i++) {
      cards.push(<PlayerSelectionCard hole={i} numberOfCards={numberOfCards} /> )
    }
    return cards;
  }

  componentWillMount() {
    this.generateEmptyCards()
  }
  render() {
    return (

      <ScrollView >
        <Button 
          onPress={this.handleRandom} 
          buttonStyle={{ marginTop: 20 }}
          backgroundColor="red" 
          title='Randomize All' 
        />

        {this.generateEmptyCards().map( card => card)}
        
        <Button raised onPress={() => this.props.navigation.navigate('ScoreKeeperSelection')} title='Next' />
      </ScrollView>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  //console.log('THIS IS THE PROPS COMING FROM STATE: ', state.adminRoundConfigStartReducer)
  return {
    amPlayers: state.adminRoundConfigStartReducer.amPlayers,
    proPlayers: state.adminRoundConfigStartReducer.proPlayers
  };
};

export default connect(mapStateToProps)(PlayerSelection)
/*
Create SelectPlayerFunction:
  should show a scroll view of all available players
  user should be able to select player for card, followed by removal from list
  each card should only have four slots and choose from the playerArray

Create RandomFunction to map Array:
  map should auto populate cards with same division
  no card should have only one player

  Map state to props:
  -players array:
    -playerFirstName
    -playerLastName
    -playerDivision
    -playerID

Map Dispatch to props:
  -onSubmit Function:
    -dispatch new list of cards:
      -players present 
      -players division 
      -players contact info
      -what card players belong too
    -point to next screen in stack
*/
