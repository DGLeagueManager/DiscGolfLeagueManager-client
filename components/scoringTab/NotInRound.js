import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

export default class LeagueRoundInProgress extends Component {

  render() {
    return (
      <View style={{ marginTop: '50%' }}>
        <Card title="Not Currently In A Round">

          <View>
            <Icon
              name='account-alert'
              type='material-community'
              size={65} />
            <Text style={styles.subText}>You will automatically be entered in when your administrator starts a round</Text>
          </View>
        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  subText: {
    fontStyle: 'italic',
    textAlign: 'center'
  },
});
