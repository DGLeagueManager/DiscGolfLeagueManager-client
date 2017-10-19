import React, { Component } from 'react';
import { View, ScrollView, Text, Picker, Modal, TouchableHighlight } from 'react-native';
import { Button, Divider } from 'react-native-elements';
import ScoreKeeperCard from './ScoreKeeperCard';

export default class PlayerSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: '1',
      enabled: false,
      modalVisible: false,
    }
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    return (
      <View style={{ backgroundColor: 'white', height: '100%' }}>
        <Button raised style={{ marginTop: 20 }} backgroundColor="#bc1600" title='Randomize All' />
        <ScrollView style={{ width: '80%', marginRight: '14%', marginLeft: '6%' }}>
          <Divider style={{ backgroundColor: 'blue' }} />
          <View style={{ marginTop: 22 }}>
          </View>
          <ScoreKeeperCard fun={this.setModalVisible.bind(this)} hole={this.state.language} />
          <ScoreKeeperCard fun={this.setModalVisible.bind(this)} hole={this.state.language} />
          <ScoreKeeperCard fun={this.setModalVisible.bind(this)} hole={this.state.language} />
          <ScoreKeeperCard fun={this.setModalVisible.bind(this)} hole={this.state.language} />
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => { alert("Modal has been closed.") }}
          >
            <View style={{ marginTop: 22 }}>
              <Picker
                selectedValue={this.state.language}
                onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                <Picker.Item label='1' value='1' />
                <Picker.Item label='2' value='2' />
                <Picker.Item label='3' value='3' />
                <Picker.Item label='4' value='4' />
              </Picker>
              <View>
                <Button title={'Change Hole Number'} onPress={() => { this.setModalVisible(false) }} />
              </View>
            </View>
          </Modal>
          <Button raised onPress={() => this.props.navigation.navigate('ScoreKeeperSelection')} style={{ marginTop: 20 }} title='Next' />
        </ScrollView>
      </View>
    )
  }
}