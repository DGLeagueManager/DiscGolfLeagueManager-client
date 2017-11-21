import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { palette } from '../../colorPalette';

const LeagueRoundInProgress = () => (
  <View style={styles.container}>
    <Card title="League Round In Progress">
      <View>
        <Icon
          name="account-alert"
          type="material-community"
          size={65}
          color={palette.accent}
        />
        <Text>You will be able to start a new round after the</Text>
        <Text style={styles.subText}>current round has ended</Text>
      </View>
    </Card>
  </View>
);

const styles = StyleSheet.create({
  subText: {
    marginLeft: '20%',
    marginRight: '20%',
    width: '60%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.background,
  },
});

export default LeagueRoundInProgress;
