import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, Col, Grid, Text, Badge } from 'react-native-elements'; // 0.17.0
import { Constants } from "expo";

import "@expo/vector-icons"; // 5.2.0

export default class ScoreCounter extends Component {
  constructor(props) {
    super(props);

    this.state={
      score: this.props.score
    };

    this.increment = () =>  {
      var temp = this.state.score+1;
      this.setState({ score: temp })
    }
    this.decrement = () =>  {
      var temp = this.state.score-1;
      if (temp < 1) {
        temp = 1;
      }
      this.setState({ score: temp })
    }

  }

  render() {
    return (
      <View>
        <Grid>
        {this.props.isOpen ?         <Icon
                  containerStyle={{height: 40, width: 40}}
                  onPress={ ()=>{this.decrement()} }
                  raised
                  type='evilicon'
                  name='minus' /> : null}
            <Badge
              containerStyle={{marginTop: 6, height: 40, width: 40}}
              value={this.state.score}
              textStyle={{ color: 'orange' }}
            />
          {this.props.isOpen ?           <Icon
                    containerStyle={{height: 40, width: 40}}
                    onPress={ ()=>{this.increment()} }
                    raised
                    type='evilicon'
                    name='plus' /> : null}
        </Grid>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    margin: 'auto',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    paddingBottom: '20%'
  },
  paragraph: {
    margin: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  input: {
    width: 250
  },
  formView: {
    backgroundColor: '#fefefe'
  },
  listItem: {
    color: 'black'
  },
  header: {
    fontSize: 20,
    backgroundColor: '#dbdbdb',
    width: '100%',
    textAlign: 'center',
    padding: 10,

  }
});
