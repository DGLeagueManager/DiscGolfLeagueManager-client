import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import { Card, Button, Divider } from 'react-native-elements'

export default class ScoreKeeperSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          name: 'Tristyn Leos',
          avatar_url: 'https://photos.zillowstatic.com/h_g/ISli46xcfvya590000000000.jpg',
          amChecked: false,
          proChecked: false,
          subHeader: ''
        }
      ],
      open: null,
    }
  }
  render() {
    return (
    <View style={{paddingTop: 20}}>
    <Card containerStyle={{width: '100%'}} title={"Starting Hole: 1"}>
      <View>
        <Button
        raised
        backgroundColor={this.state.open === 0 ? 'black' : 'grey'}
        onPress={ ()=>{ this.setState({open: 0}) } }
        title="test"
        />

        <Button
        raised
        backgroundColor={this.state.open === 1 ? 'black' : 'grey'}
        onPress={ ()=>{ this.setState({open: 1}) } }
        style={styles.button}
        title="test"
        />

        <Button
        raised
        backgroundColor={this.state.open === 2 ? 'black' : 'grey'}
        onPress={ ()=>{ this.setState({open: 2}) } }
        style={styles.button}
        title="test"
        />

        <Button
        raised
        backgroundColor={this.state.open === 3 ? 'black' : 'grey'}
        onPress={ ()=>{ this.setState({open: 3}) } }
        style={styles.button}
        title="test"
        />

      </View>
    </Card>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 20
  },
  header: {
    fontSize: 30
  },
  button: {
    marginTop: 5
  }
});
