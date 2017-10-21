import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { Button, Icon, List, ListItem, CheckBox, Header } from 'react-native-elements';
import { Constants } from 'expo';
import AdminSelectionBoxes from './AdminSelectionBoxes';
import { connect } from 'react-redux';
import { addPlayersToRound }from '../../actions/adminRoundConfigStartActions'

import "@expo/vector-icons"; // 5.2.0


class AdminRoundConfigStart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amateurPlayers: [],
      proPlayers: []
    };
  }

  handleAmDivisionSelect = (index) => {

   this.setState({ amateurPlayers : [...this.state.amateurPlayers, this.props.leaguePlayers[index]] })
  }

  handleProDivisionSelect = (index) => {

    this.setState({ proPlayers: [...this.state.proPlayers, this.props.leaguePlayers[index]] })
  }

  handleSubmit = () => {
    let emptyCards = this.generateEmptyCards();

    this.props.onSubmitPlayers(this.state.amateurPlayers, this.state.proPlayers, emptyCards)
    this.props.navigation.navigate('PlayerSelection')
  }

  generateEmptyCards() {
    playersTotal = this.state.amateurPlayers.length + this.state.proPlayers.length
    numberOfCards = Math.ceil(playersTotal / 4);
    let cards = [];

    for (let i = 1; i <= numberOfCards; i++) {
      cards.push({startingHole: i, players: []})
    }
    console.log(cards)
    return cards;
  }

  render() {
    return (
      <ScrollView style={{ marginTop: 20, paddingTop: 0 }}>
        <List style={{ marginBottom: 20 }}>
          {
            this.props.leaguePlayers.map((ele, i) => (
              <View>
                <ListItem
                  roundAvatar
                  /* avatar={{ uri: ele.avatar_url }} */  
                  key={i}
                  subtitle={-2}
                  title={ele.first_name + ' ' + ele.last_name}
                  rightTitleStyle={null}
                  label={
                    <AdminSelectionBoxes
                      key={i}
                      handleAmDivisionSelect={this.handleAmDivisionSelect.bind(this)}
                      handleProDivisionSelect={this.handleProDivisionSelect.bind(this)}
                      i={i}
                    />
                  }
                  hideChevron
                />
              </View>
            ))
          }
        </List>
        <Button 
          onPress={this.handleSubmit} 
          color='black'
          backgroundColor="#dbdbdb" 
          title='Next' 
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    margin: 'auto',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    paddingBottom: '20%'
  },
  listItem: {
    color: 'black'
  },
  header: {
    fontSize: 20,
    backgroundColor: '#dbdbdb',
    width: '100%',
    textAlign: 'center',
    padding: 10,
  }
});

const mapStateToProps = (state, ownProps) => {
  return {
    leaguePlayers: state.applicationReducer.leaguePlayers
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitPlayers: (amPlayers, proPlayers, emptyCards) => {
      dispatch(addPlayersToRound(amPlayers, proPlayers, emptyCards));
    }
  };
};

export default connect( mapStateToProps, mapDispatchToProps )(AdminRoundConfigStart);

/*
On component will mount? 

Map state to props:
  -players array:
    -playerFirstName
    -playerLastName
    -playerPreviousDevision?
    -playerEmail
    -playerID

Map Dispatch to props:
  -onSubmit Function:
    -dispatch new list comprised of:
      -players present 
      -players division 
      -players contact info
    -point to next screen in stack
*/
