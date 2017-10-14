import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FormLabel, FormInput, Button, Icon } from 'react-native-elements'; // 0.17.0
import { Constants } from "expo";
import "@expo/vector-icons"; // 5.2.0

const TestForm = () => (
  <View style={styles.container}>
    <Icon size={42} name='disc' type="simple-line-icon" />
    <Text style={{fontWeight: 'bold', fontSize: 35, marginBottom: 50, }}>D.G. League Manager</Text>
    <View style={styles.formView}>
      <Text style={styles.paragraph}> Complete form to get started</Text>

      <FormLabel>First Name</FormLabel>
      <FormInput style={styles.input} />

      <FormLabel>Last Name</FormLabel>
      <FormInput style={styles.input}/>

      <FormLabel>Password</FormLabel>
      <FormInput style={styles.input}/>

      <FormLabel>Score</FormLabel>
      <FormInput style={styles.input}/>
      
      <Button raised title="Submit" icon={{name: 'check', type: ''}} style={{marginTop: 10, marginBottom: 20}}/>
    </View>
  </View>
);


const styles = StyleSheet.create({
  container: {
    width: '100%',
    margin: 'auto',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
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

export default TestForm;