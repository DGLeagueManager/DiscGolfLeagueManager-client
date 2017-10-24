import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet, Picker, FlatList, TouchableHighlight, } from 'react-native';
import { Card, Button, Divider } from 'react-native-elements';
import { connect } from 'react-redux';
import AdminStack from './AdminStack';
import { addPlayerToCard, changeStartingHole } from '../../actions/playerSelectionActions';
import PlayerPicker from './PlayerPicker';
import Modal from 'react-native-modal'

class PlayerSelectionCard extends Component {

  generateHolePickerItems() {
    const items = [];
    for (let i = 1; i <= 18; i++) {
      items.push(<Picker.Item label={i.toString()} value={i} />)
    }
    return items;
  }

  render() {
    return <Card>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ flex: 3, fontSize: 20, marginTop: 10 }}>
            {" "}
            Starting Hole:{" "}
          </Text>
          <Picker style={{ flex: 1 }} 
            selectedValue={this.props.startingHole} 
            onValueChange={(value) => {
              this.props.onHoleSelect(i, value)
            }}
          >
            {this.generateHolePickerItems().map(item => item)}
          </Picker>
        </View>

        <PlayerPicker player={this.props.card.players[0]} toggleModal={this.props.toggleModal} />
        <PlayerPicker player={this.props.card.players[1]} toggleModal={this.props.toggleModal} />
        <PlayerPicker player={this.props.card.players[2]} toggleModal={this.props.toggleModal} />
        <PlayerPicker player={this.props.card.players[3]} toggleModal={this.props.toggleModal} />

          <Modal
            isVisible={this.props.modalVisible}
            onRequestClose={() => {
              console.log("");
            }}
          >
            <View style={styles.modalContent}>
              <FlatList
                data={this.props.unassignedPlayers}
                renderItem={({ item, index }) => (
                  <TouchableHighlight
                    onPress={(value) => {
                      console.log(value)
                      this.props.handleSelectPlayer(this.props.unassignedPlayers.indexOf(item), this.props.card);
                    }}
                    key={index}
                  >
                    <View style={styles.listItem}>
                      <Text>
                        {item.first_name + " " + item.last_name}
                      </Text>
                    </View>
                  </TouchableHighlight>
                )}
              />
              <Button
                onPress={this.props.toggleModal}
                title='Close'
              />
            </View>
          </Modal>

        {/* <Button buttonStyle={{ marginTop: 20 }} backgroundColor={this.state.open === 0 ? "black" : "grey"} onPress={() => {
            this.setState({ open: 0 });
          }} title="Select Player..." />

        <Button raised backgroundColor={this.state.open === 1 ? "black" : "grey"} onPress={() => {
            this.setState({ open: 1 });
          }} style={styles.button} title="Select Player..." />

        <Button raised backgroundColor={this.state.open === 2 ? "black" : "grey"} onPress={() => {
            this.setState({ open: 2 });
          }} style={styles.button} title="Select Player..." />

        <Button raised backgroundColor={this.state.open === 3 ? "black" : "grey"} onPress={() => {
            this.setState({ open: 3 });
          }} style={styles.button} title="Select Player..." /> */}
      </Card>;
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
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});

const mapDispatchToProps = dispatch => {
  return { 
    onPlayerSelect: (player, cardIndex) => {
      dispatch(addPlayerToCard(player, cardIndex));
    },
    onHoleSelect: (cardIndex, hole) => {
      dispatch(changeStartingHole(cardIndex, hole));
    }
  }
}

export default connect(null, mapDispatchToProps)(PlayerSelectionCard)
