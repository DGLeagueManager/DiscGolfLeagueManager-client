import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { Icon, List, ListItem, Divider } from "react-native-elements";

const Results = ({ round }) => (
  <ScrollView style={{ paddingTop: 20 }}>
    <View style={{ flex: 1, flexDirection: "row" }}>
      <Text style={styles.name}>PLAYER</Text>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={styles.col}>START</Text>
        <Text style={styles.col}>THRU</Text>
        <Text style={styles.col}>ROUND</Text>
      </View>
    </View>
    <View>
      <List>
        {Object.keys(round.scores).map(key => (
          <ListItem
            key={key}
            title={key}
            label={
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Text style={{ flex: 1, marginLeft: 10 }}>1</Text>
                <Text style={styles.col}>1</Text>
                <Text style={styles.col}>1</Text>
              </View>
            }
            hideChevron
          />
        ))}
      </List>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  name: {
    flex: 1,
    fontSize: 14,
    paddingLeft: 10
  },
  col: {
    flex: 1,
    fontSize: 14
  }
});

export default Results;
