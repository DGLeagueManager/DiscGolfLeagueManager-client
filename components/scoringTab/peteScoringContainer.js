import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import list from './dummyData';


class ScoringContainer extends Component {
  constructor(props) {
    super(props)

    /** I guess we won't use any local state when we move to redux completely? */
    this.state = {
      card: list, /** this.props.card */
      startingHole: 1,
      thruHole: 1
    }
  }

  componentDidMount() {
    // GET request: GET to /getPlayer (myself)
    // Check the return object for current_card property.
    // Use the current card id to GET to /getCard
    // Populate the card in state with the return of that call
  }

  render() {
    // if not currently in game
    return (
      <View style={{ flex: 1, alignItems: 'center' }} >
       <Text> You are not currently in a game </Text>
      </View>
    )
    // else 

  }
}

const generateTabs(cardInfo) {


}
// Card Info object should look like this:
//
// cardInfo: {
//   thruHole: 5,
//   players: [pid1, pid2, pid3, pid4],
//   player_rounds: {
//     player_id: {
//       totalStrokes: 12,
//       scoreRelativeToPar: 0,
//       thruHole: 5,
//       1: 3,
//       2: 4,
//       3: 3,
//       4: 2,
//       5: 3
//     }
//   }
// }


export default connect(mapStateToProps, mapDispatchToProps)(ScoringContainer);
