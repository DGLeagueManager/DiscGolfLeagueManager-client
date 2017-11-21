import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { palette } from '../../colorPalette';

const CompletedRoundResults = ({ round }) => {
  return (
    <ScrollView style={{ backgroundColor: palette.background }}>
      <List containerStyle={{ flex: 1 }}>
        <View style={{
          flex: 1, flexDirection: 'row', backgroundColor: palette.accent2, padding: 10,
        }}
        >
          <Text style={styles.name}>
            PLAYER
          </Text>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={styles.col}>ROUND</Text>
          </View>
        </View>
        {round.scores
          ? Object.keys(round.scores).map(key => (
            <ListItem
              key={key}
              title={round.scores[key].player_name}
              label={<Text style={{ marginRight: 60 }}>{round.scores[key].scoreRelativeToPar}</Text>}
              hideChevron
            />
          ))
          : null}
      </List>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  name: {
    flex: 3,
    fontSize: 14,
    paddingLeft: 20,
  },
  col: {
    flex: 1,
    fontSize: 14,
  },
});

export default CompletedRoundResults;
