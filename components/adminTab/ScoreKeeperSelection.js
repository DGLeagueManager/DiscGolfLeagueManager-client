import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import { Card, Button, Divider } from 'react-native-elements';
import ScoreKeeperCard from './ScoreKeeperCard'

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
        },
        {
          name: 'Pete Givens',
          avatar_url: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/4/005/021/138/35df1b0.jpg",
          amChecked: false,
          proChecked: false,
          subHeader: ''
        },
        {
          name: 'Robert Hunter',
          avatar_url: "http://jscraftcamp.org/img/nophoto.png",
          amChecked: false,
          proChecked: false,
          subHeader: ''
        },
        {
          name: 'A.J. Caporicci',
          avatar_url: "http://www.connallyband.com/uploads/8/5/3/4/85347626/img-8114_1.jpg",
          amChecked: false,
          proChecked: false,
          subHeader: ''
        },
      ],
      selected: 1
    }
  }
  fun() {
    this.setState({ selected: 0 })
  }
  render() {
    return (
      <View style={styles.view}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Select A Score Keeper</Text>
        <ScoreKeeperCard fun={ ()=>{this.props.fun()} } selected={this.state.selected} holes='1' />
        <ScoreKeeperCard fun={ ()=>{this.props.fun()} } selected={this.state.selected} holes='2' />
        <ScoreKeeperCard fun={ ()=>{this.props.fun()} } selected={this.state.selected} holes='3' />
        <ScoreKeeperCard fun={ ()=>{this.props.fun()} } selected={this.state.selected} holes='4' />
        <Button color='black' backgroundColor="#dbdbdb" title='Next' />
      </ScrollView>
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
  },
  view: {
    paddingTop: 20
  },
});
