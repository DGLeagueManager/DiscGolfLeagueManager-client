import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { Constants } from "expo";

export default class NewRound extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (

      <View style={{marginTop: '50%'}}>
        <Card title="League Round In Progress">

          <View>
            <Icon
            name='account-alert'
            type='material-community'
            size={65}/>
            <Text>You will be able to start a new round after the</Text>
            <Text style={{marginLeft: '20%', marginRight: '20%', width: '60%'}}>current round has ended</Text>
          </View>
        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: '60%',
    marginLeft: '40%',
  },
  paragraph: {
    margin: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  input: {
    width: 250
  },
  formView: {
    backgroundColor: '#fefefe'
  },
  listItem: {
    color: 'black'
  },
  header: {
    fontSize: 20,
    backgroundColor: '#dbdbdb',
    width: '100%',
    textAlign: 'center',
    padding: 10,

  }
});
