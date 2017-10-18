import React, { Component } from 'react';
import { View, Text, Picker, Modal, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-elements'

export default class HoleSelection extends Component {
  constructor(props) {
    super(props);
    this.state={
      language: '1',
      enabled: false,
      modalVisible: false,
    }
  }
  setModalVisible(visible) {
  this.setState({modalVisible: visible});
}
  render() {
    return (
      <View>
        <Text style={{marginTop: 100, width: '40%', marginLeft: '30%', marginRight: '30%'}}>Hole Number Is {this.state.language}</Text>
        <View style={{marginTop: 22}}>
   <Modal
     animationType="slide"
     transparent={false}
     visible={this.state.modalVisible}
     onRequestClose={() => {alert("Modal has been closed.")}}
     >
    <View style={{marginTop: 22}}>
    <Picker
      selectedValue={this.state.language}
      onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
      <Picker.Item label='1' value='1' />
      <Picker.Item label='2' value='2' />
      <Picker.Item label='3' value='3' />
      <Picker.Item label='4' value='4' />
    </Picker>
     <View>
       <Button title={'Change Hole Number'} onPress={() => {this.setModalVisible(false)}} />
     </View>
    </View>
   </Modal>

   <Button title={'Change Hole Number'} onPress={() => {this.setModalVisible(true)}} />

 </View>
      </View>
    )
  }
}
