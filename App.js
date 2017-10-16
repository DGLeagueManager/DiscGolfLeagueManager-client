import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import store from './store';
import Secured from './components/Secured';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }
  render() {
    return (
<<<<<<< HEAD
      <Provider store={store}>
        <Secured />
      </Provider>
=======
      < />
>>>>>>> attempting rebase
    );
  }
}
