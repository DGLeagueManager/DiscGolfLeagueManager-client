import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { palette } from '../../colorPalette';

export default class LeagueRoundInProgress extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Card title="Not Currently In A Round">

          <View>
            <Icon
              name='account-alert'
              type='material-community'
              size={65} 
              color={palette.accent}
            />
            <Text style={styles.subText}>You will automatically be entered in when your administrator starts a round</Text>
          </View>
        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.background
  }, 
  subText: {
    fontStyle: 'italic',
    textAlign: 'center'
  },
});
