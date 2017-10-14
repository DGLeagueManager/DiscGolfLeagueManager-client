import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { Button, Icon, List, ListItem, CheckBox, Header } from 'react-native-elements'; // 0

export default class AdminSelectionBoxes extends React.Component {
  render() {
    return (
    <View>
      <CheckBox
        title='AM'
        checked={ele.amChecked}
        onPress={ ()=>{ this.handleAmTap(i) } }
      />
      <CheckBox
        title='PRO'
        checked={ele.proChecked}
        onPress={ ()=>{ this.handleProTap(i) } }
      />
    </View>
    )
  }
}
