import React, { Component } from 'react';
import { Button, Icon, List, ListItem, CheckBox, Header } from 'react-native-elements';
import { connect } from 'react-redux';
import Scoring from './Scoring';
import ScoringNotAvailable from './ScoringNotAvailable';
import { connect } from 'react-redux';

class AdminStack extends Component {
  constructor(props) {
    super(props) 


  }
  
  componentWillMount() {

  }

  render() {
    console.log('ADMIN STACK PROPS AFTER POST: ', this.props)
    if (this.props.roundInProgress) {
      return (<Scoring />);
    } else {
      return (<ScoringNotAvailable />);
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    roundInProgress: state.scoreKeeperSelectionReducer.roundInProgress
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitPlayers: (amPlayers, proPlayers, emptyCards) => {
      dispatch(addPlayersToRound(emptyCards));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminStack);
