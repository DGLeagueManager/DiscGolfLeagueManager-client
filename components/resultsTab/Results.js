import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { Icon, List, ListItem, Divider } from 'react-native-elements';

const Results = ({ round }) => (
  <ScrollView style={{marginTop: 20, paddingTop: 0}}>
    <View style={{flex: 1, flexDirection: 'row'}}>
      <Text>Name</Text>
      <Text>Starting Hole</Text>
      <Text>Thru</Text>
      <Text>Round Score</Text>
    </View>
    <View>
    <Divider key={1}/>
      <List>
        {
          Object.keys(round.scores).map((key) => (
            <View>
              <Text>{key}</Text>
              <Text>1</Text>
              <Text>9</Text>
              <Text>-4</Text>
            </View>
          ))
        }
      </List>
    </View>
  </ScrollView>
)

export default Results;
