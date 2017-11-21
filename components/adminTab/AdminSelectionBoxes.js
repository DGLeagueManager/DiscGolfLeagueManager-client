import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { Button, Icon, List, ListItem, CheckBox, Header } from 'react-native-elements';
import { palette } from '../../colorPalette';

export default class AdminSelectionBoxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amChecked: false,
      proChecked: false
    }

  }
  render() {
    return <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <CheckBox containerStyle={{ backgroundColor: "transparent" }} title="AM" checkedColor={palette.accent} checked={this.state.amChecked} onPress={() => {
            this.setState({ proChecked: false });
            this.state.amChecked ? (this.props.handleRemovePlayer(this.props.value), this.setState(
                  { amChecked: !this.state.amChecked }
                )) : (this.props.handleAmDivisionSelect(this.props.value), this.setState(
                  { amChecked: !this.state.amChecked }
                ));
          }} />
        <CheckBox containerStyle={{ backgroundColor: "transparent" }} title="PRO" checkedColor={palette.accent} checked={this.state.proChecked} onPress={() => {
            this.setState({ amChecked: false });
            this.state.proChecked ? (this.props.handleRemovePlayer(this.props.value), this.setState(
                  { proChecked: !this.state.proChecked }
                )) : (this.props.handleProDivisionSelect(this.props.value), this.setState(
                  { proChecked: !this.state.proChecked }
                ));
          }} />
      </View>;
  }
}

