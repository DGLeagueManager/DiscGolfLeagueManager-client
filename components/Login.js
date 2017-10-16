import React, {Component} from 'react';
import { Text, View, StyleSheet, ScrollView, Alert } from 'react-native';
import { FormLabel, FormInput, Button, Icon } from 'react-native-elements'; // 0.17.0
import { Constants } from "expo";
import { connect } from 'react-redux';
import { login } from '../actions/auth';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      route: 'Login',
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };    
  }
      
  userLogin(e) {
    this.props.onLogin(this.state.firstName, this.state.lastName, this.state.email, this.state.password);
    e.preventDefault();
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Icon size={42} name='disc' type="simple-line-icon" />
          <Text style={{fontWeight: 'bold', fontSize: 35, marginBottom: 50, }}>D.G. League Manager</Text>
          <View style={styles.formView}>
            <Text style={styles.paragraph}> Complete form to get started</Text>

            <FormLabel>First Name: </FormLabel>
            <FormInput 
              autoCapitalize='none'
              autoCorrect={false}
              autoFocus={true}
              value={this.state.firstName}
              style={styles.input}
              onChangeText={(text) => this.setState({ firstName: text })} />

            <FormLabel>Last Name: </FormLabel>
            <FormInput 
              autoCapitalize='none'
              autoCorrect={false}
              autoFocus={true}
              value={this.state.lastName}
              style={styles.input}
              onChangeText={(text) => this.setState({ lastName: text })}/>

            <FormLabel>Email: </FormLabel>
            <FormInput 
              autoCapitalize='none'
              autoCorrect={false}
              autoFocus={true}
              value={this.state.email}
              style={styles.input}
              onChangeText={(text) => this.setState({ email: text })}/>

            <FormLabel>Password: </FormLabel>
            <FormInput 
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry={true}
              value={this.state.password}
              style={styles.input}
              onChangeText={(text) => this.setState({ password: text })} />

            <Button onPress={(e) => this.userLogin(e)} raised title="Submit" icon={{name: 'check', type: ''}} style={{marginTop: 10, marginBottom: 20}}/>
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

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
}



const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (firstName, lastName, email, password) => { dispatch(login(firstName, lastName, email, password)); }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
