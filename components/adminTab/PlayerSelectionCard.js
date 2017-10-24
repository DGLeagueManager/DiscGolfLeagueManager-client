import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet, Picker } from 'react-native';
import { Card, Button, Divider } from 'react-native-elements';
import { connect } from 'react-redux';
import AdminStack from './AdminStack';
import { addPlayerToCard, changeStartingHole } from '../../actions/playerSelectionActions';
import PlayerPicker from './PlayerPicker';

class PlayerSelectionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      card: {},
      startingHole: 1,
    }
  }

  componentWillMount() {
    this.setState({
      i: this.props.key, 
      card: this.props.card, 
      startingHole: this.props.startingHole 
    });
  }

  generateHolePickerItems() {
    const items = [];
    for (let i = 1; i <= 18; i++) {
      items.push(<Picker.Item label={i.toString()} value={i} />)
    }
    return items;
  }
  
  selectPlayer(player) {
    
  }

  render() {
    const { card, i } = this.state;
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

        <PlayerPicker toggleModal={this.props.toggleModal} />

        <Button buttonStyle={{ marginTop: 20 }} backgroundColor={this.state.open === 0 ? "black" : "grey"} onPress={() => {
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
          }} style={styles.button} title="Select Player..." />
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
  }
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
