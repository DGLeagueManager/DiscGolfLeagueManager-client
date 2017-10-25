import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

export default class LeagueRoundInProgress extends Component {

  render() {
    return (
      <View style={{marginTop: '50%'}}>
        <Card title="League Round In Progress">

          <View>
            <Icon
            name='account-alert'
            type='material-community'
            size={65}/>
            <Text>You will be able to start a new round after the</Text>
            <Text style={styles.subText}>current round has ended</Text>
          </View>
        </Card>
      </View>
    ) 
  }
}

const styles = StyleSheet.create({
  subText: {marginLeft: '20%',
   marginRight: '20%',
   width: '60%'
 },
});



