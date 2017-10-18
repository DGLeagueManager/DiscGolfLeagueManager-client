import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import { Card, Button, Divider } from 'react-native-elements'

export default class ScoreKeeperCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['A.J.', 'Tristyn', 'Robert', 'Pete'],
      open: null,
    }
  }
  render() {
    return (
    <View style={styles.viewStyle}>
    <Card containerStyle={{width: '100%'}} title={"Starting Hole: " + this.props.holes}>
      <View>
        {this.state.list.map((ele, i)=>(
          <Button
          raised
          style={{marginBottom: 5}}
          backgroundColor={this.state.open === i ? 'black' : 'grey'}
          onPress={ ()=>{ this.setState({open: i}) } }
          title={ele}
          />
        ))}

      </View>
    </Card>
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
  viewStyle: {paddingTop: 20,
    width: '90%',
    marginRight: '9%',
    marginLeft: '1%',
  },
});
