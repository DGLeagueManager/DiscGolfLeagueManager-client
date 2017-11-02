import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { Icon, List, ListItem, Divider } from "react-native-elements";

const CompletedRoundResults = ({ round }) => {
  return (
    <ScrollView style={{ paddingTop: 20 }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={styles.name}>
          PLAYER
        </Text>
        <View style={{ flex: 1, flexDirection: "row" }}>
          {!round.completed ? <Text style={styles.col}>START</Text> : null}
          {!round.completed ? <Text style={styles.col}>THRU</Text> : null}
          <Text style={styles.col}>ROUND</Text>
        </View>
      </View>
      <View>
        <List containerStyle={{flex: 1}}>
          {round.scores
            ? Object.keys(round.scores).map(key => (
                <ListItem
                  key={key}
                  title={round.scores[key].player_name}
                  label={
                    <Text style={styles.col}>
                      {round.scores[key].scoreRelativeToPar}
                    </Text>
                  }
                  hideChevron
                />
              ))
            : null}
        </List>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  name: {
    flex: 3,
    fontSize: 14,
    paddingLeft: 20
  },
  col: {
    flex: 1,
    fontSize: 14,
    justifyContent: 'space-between'
  }
});

export default CompletedRoundResults;
