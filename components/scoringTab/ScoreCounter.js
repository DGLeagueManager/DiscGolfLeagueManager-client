import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, Col, Grid, Text, Badge } from 'react-native-elements'; // 0.17.0
import { Constants } from "expo";

import "@expo/vector-icons"; // 5.2.0

export default class ScoreCounter extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log(this)
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        {this.props.isOpen ?
            <Icon
              containerStyle={{height: 40, width: 40}}
              onPress={ this.props.decrement }
              raised
              type='evilicon'
              name='minus' /> : null}
            <Badge
              containerStyle={{marginTop: 6, height: 40, width: 40}}
              value={this.props.player.score}
              textStyle={{ color: 'orange' }}
            />
          {this.props.isOpen ?
            <Icon
              containerStyle={{height: 40, width: 40}}
              onPress={ this.props.increment }
              raised
              type='evilicon'
              name='plus' /> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    margin: 'auto',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    paddingBottom: '20%'
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
