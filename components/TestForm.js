import React, {Component} from 'react';
import { Text, View, StyleSheet, ScrollView, Alert } from 'react-native';
import { FormLabel, FormInput, Button, Icon } from 'react-native-elements'; // 0.17.0
import { Constants } from "expo";
import { connect } from 'react-redux';

export default class TestForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: 'test',
      lastName: 'test',
      password: '',
      score: ''
    };

// convert to a post request that sends State Data to the server
  this._handleButtonPress = () => {
    Alert.alert(
      'name is: ' + this.state.firstName+ ' '+this.state.lastName,
      'password is: ' + this.state.password,
    );
  };

  this.getAjax = () => {
    axios.get('/endPoint')
    .then((res)=>{
      Alert.alert(
        'Server Response',
        ''+res
      )
    })
    .catch((err)=>{
      Alert.alert(
        'Error',
        ''+err
      )
    })
  }

  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Icon size={42} name='disc' type="simple-line-icon" />
          <Text style={{fontWeight: 'bold', fontSize: 35, marginBottom: 50, }}>D.G. League Manager</Text>
          <View style={styles.formView}>
            <Text style={styles.paragraph}> Complete form to get started</Text>

            <FormLabel>First Name</FormLabel>
            <FormInput onChangeText={ (text)=>{this.setState({firstName: text})} } style={styles.input} />

            <FormLabel>Last Name</FormLabel>
            <FormInput onChangeText={ (text)=>{this.setState({lastName: text})} } style={styles.input}/>

            <FormLabel>Password</FormLabel>
            <FormInput onChangeText={ (text)=>{this.setState({password: text})} } style={styles.input}/>

            <FormLabel>Score</FormLabel>
            <FormInput onChangeText={ (text)=>{this.setState({score: text})} } style={styles.input}/>

            <Button onPress={ ()=>{this._handleButtonPress()} } raised title="Submit" icon={{name: 'check', type: ''}} style={{marginTop: 10, marginBottom: 20}}/>
            <Button onPress={ ()=>{this.getAjax()} } title='GET Request' />
          </View>
        </View>
      </ScrollView>
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
  }
});
