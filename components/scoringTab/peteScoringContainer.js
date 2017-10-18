import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
<<<<<<< HEAD
=======
import PropTypes from 'prop-types'
>>>>>>> 60a69ca292db858e920990c39b2ce161a4f9303e
import list from './dummyData';


class ScoringContainer extends Component {
  constructor(props) {
    super(props)

<<<<<<< HEAD
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
// helper function to dynamically create a TabNavigator with the
// appropriate holes

const generateTabs = function(cardInfo) {
  let { startingHole, thruHole, totalHoles } = cardInfo;
  let numberOfTabs = calculateHolesCompleted(
    startingHole,
    thruHole,
    totalHoles
  );
  let tabs = {};
  for (let i = 1; i <= numberOfTabs; i++) {
    tabs[i] = {
      screen: "Hole" + i,
      navigationOptions: {
        tabBarLabel: "Hole " + i
      }
    };
  }
  return tabs;
};

// helper function for calculating the total number of holes that have been 
// played so far for a given round
const calculateHolesCompleted = function(startingHole, thruHole, totalHoles) {
  if (startingHole < thruHole) {
    return thruHole - startingHole + 1;
  } else {
    return totalHoles - startingHole + 1 + thruHole;
  }
};
// Card Info object should look like this:
//
// cardInfo: {
//   startingHole: 1,
//   holesCompleted: 5,
//   numberOfHoles: 18,
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
//     },
//    player2_id: {
//      totalStrokes: 13,
//      ..etc.
//    },
//   }
// }


export default connect(mapStateToProps, mapDispatchToProps)(ScoringContainer);
=======
  }

  render() {
    if (this.props.currentCard === null) {
      return (
        <View style={{ flex: 1, alignItems: 'center' }} >
        <Text> You are not currently in a game </Text>
        </View>
      )
    } else {
      return <ScoreCard card={this.props.currentCard} />
    }
  }
}

ScoringContainer.PropTypes = {
  currentCard: PropTypes.object
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentCard: state.currentUser.currentCard
  }
}

export default connect(mapStateToProps)(ScoringContainer);
>>>>>>> 60a69ca292db858e920990c39b2ce161a4f9303e
