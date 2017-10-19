import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Text, View, Button, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import AdminRoundConfigStart from './AdminRoundConfigStart';
import AdminSelectionBoxes from './AdminSelectionBoxes';
import HoleSelection from './HoleSelection';
import NewRound from './NewRound';
import RandomShuffle from './RandomShuffle';


const AdminStack = StackNavigator({
  AdminRoundConfigStart: { screen: AdminRoundConfigStart },
  HoleSelection: { screen: HoleSelection },
  NewRound: { screen: NewRound },
  RandomShuffle: { screen: RandomShuffle }
});

class Admin extends Component {
  render() {
    return <AdminStack screenProps={this.props.screenProps} />
  }
}


export default Admin;