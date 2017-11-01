import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { Icon, List, ListItem, Divider } from "react-native-elements";

const Results = ({ round }) => {
  console.log(' round ****** ', round)
  return <ScrollView style={{ paddingTop: 20 }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={!round.completed ? styles.name : styles.completed}>PLAYER</Text>
        <View style={{ flex: 1, flexDirection: "row" }}>
          {!round.completed ? <Text style={styles.col}>START</Text> : null}
          {!round.completed ? <Text style={styles.col}>THRU</Text> : null}
          <Text style={styles.col}>ROUND</Text>
        </View>
      </View>
      <View>
        <List>
          {Object.keys(round.scores).map(key => (
            <ListItem
              key={key}
              title={round.scores[key].player_name}
              label={
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <Text style={{ flex: 1, marginLeft: 10 }}>
                    {!round.completed ? round.scores[key].startingHole : null}
                  </Text>
                  <Text style={styles.col}>
                    {!round.completed ? round.scores[key].thru : null}
                  </Text>
                  <Text style={styles.col}>
                    {round.scores[key].scoreRelativeToPar}
                  </Text>
                </View>
              }
              hideChevron
            />
          ))}
        </List>
      </View>
    </ScrollView>;
};

const styles = StyleSheet.create({
  name: {
    flex: 1,
    fontSize: 14,
    paddingLeft: 10
  },
  completed: {
    flex: 3,
    fontSize: 14,
    paddingLeft: 10
  },
  col: {
    flex: 1,
    fontSize: 14
  }
});

export default Results;
