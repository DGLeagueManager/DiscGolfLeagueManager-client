import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import list from './dummyData';


class ScoringContainer extends Component {
  constructor(props) {
    super(props)

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
