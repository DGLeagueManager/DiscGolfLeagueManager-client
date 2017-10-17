import React, {Component} from 'react';
import { Text, View, StyleSheet, ScrollView, Alert } from 'react-native';
import { FormLabel, FormInput, Button, Icon } from 'react-native-elements'; // 0.17.0
import { Constants } from "expo";
import { connect } from 'react-redux';
import { signUp } from '../actions/auth';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    };    
  }
      
  userSignUp(e) {
    this.props.onSignUp(this.state.first_name, this.state.last_name, this.state.email, this.state.password);
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
              value={this.state.first_name}
              style={styles.input}
              onChangeText={(text) => this.setState({ first_name: text })} />

            <FormLabel>Last Name: </FormLabel>
            <FormInput 
              autoCapitalize='none'
              autoCorrect={false}
              autoFocus={true}
              value={this.state.last_name}
              style={styles.input}
              onChangeText={(text) => this.setState({ last_name: text })}/>

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

            <Button onPress={(e) => this.userSignUp(e)} raised title="Submit" icon={{name: 'check', type: ''}} style={{marginTop: 10, marginBottom: 20}}/>
            { this.props.error ?  <Text>Email or Password not valid</Text> : null }
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
    isLoggedIn: state.auth.isLoggedIn,
    error: state.auth.error
  };
}



const mapDispatchToProps = (dispatch) => {
  return {
    onSignUp: (first_name, last_name, email, password) => { dispatch(signUp(first_name, last_name, email, password)); }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
