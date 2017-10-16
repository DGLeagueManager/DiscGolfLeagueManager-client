import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { Button, Icon, List, ListItem, CheckBox, Header } from 'react-native-elements'; // 0

export default class AdminSelectionBoxes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: false
    };
    this.getColor = () => {
      return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
  }
  render() {
    return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <CheckBox style={{backgroundColor:"#ecf0f1"}}
        title='AM'
        checkedColor= {this.getColor()}
        checked={this.props.amChecked}
        onPress={ ()=>{this.props.handleAmTap(this.props.i)} }
      />
      <CheckBox style={{backgroundColor:"#ecf0f1"}}
        title='PRO'
        checkedColor= {this.getColor()}
        checked={this.props.proChecked}
        onPress={ ()=>{this.props.handleProTap(this.props.i)} }
      />
    </View>
    )
  }
}
