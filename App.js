import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import store from './store';
import Root from './components/Root'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }

}
