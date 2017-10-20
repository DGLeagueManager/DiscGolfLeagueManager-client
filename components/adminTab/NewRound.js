import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class NewRound extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  componentWillMount() {
    // fetch all league data and add to redux store
  }

  render() {
    return (
      <View style={{marginTop: '60%'}}>
        <Button
          buttonStyle={styles.button}
          onPress={() => this.props.navigation.navigate('AdminRoundConfigStart')}
          raised
          title="New Round"
          textStyle={{fontSize: 30}}
           />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    paddingTop: 75,
    paddingBottom: 75,
    width: '80%',
    marginLeft: '10%',
    marginRight: '10%'
  },
});
