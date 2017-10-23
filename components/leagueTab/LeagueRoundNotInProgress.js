import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Icon } from 'react-native-elements';

export default class LeagueRoundNotInProgress extends Component {

  render() {
    return (

      <View style={{marginTop: '50%'}}>
        <Card title="No Round Is In Progress">

          <View>
            <Icon
            name='account-alert'
            type='material-community'
            size={65}/>
            <Text style={{textAlign: 'center'}}>Aint nun been started. Please start a new round</Text>
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
