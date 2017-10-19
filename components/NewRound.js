import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Constants } from "expo";

export default class NewRound extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <View style={{marginTop: '60%'}}>
        <Button
          buttonStyle={{paddingTop: 75,
          paddingBottom: 75,
          width: '80%',
          marginLeft: '10%',
          marginRight: '10%'
        }}
          raised
          title="New Round"
          textStyle={{fontSize: 30}}
           />
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
