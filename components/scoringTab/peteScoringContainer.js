import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import HoleNavigator from './HoleNavigator';

class ScoringContainer extends Component {

  render() {
    if (this.props.currentCard === null) {
      return (
        <View style={{ flex: 1, alignItems: 'center' }} >
          <Text> You are not currently in a game </Text>
        </View>
      )
    } else {
      return <HoleNavigator card={this.props.currentCard}/>
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentCard: state.currentUser.currentCard
  }
}

export default connect(mapStateToProps)(ScoringContainer);
