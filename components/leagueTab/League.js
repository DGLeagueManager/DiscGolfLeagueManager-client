import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';

export default class League extends Component {
  /** We can declare nagivationOptions here on the object instead of on the MainNav component like this:
   
    static navigationOptions = {
      tabBarIcon: <Icon name="pencil" type="entypo" />
    }

  */
  render() {
    console.log(this.props.navigation);
    return (
      <View style={styles.view}>
        <Text>League Page</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

