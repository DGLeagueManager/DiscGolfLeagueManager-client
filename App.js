import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import store from './store';
import Application from './components/Application'
import Secured from './components/Secured';
import Scoring from './components/scoringTab/Scoring'

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
        <Application />
      </Provider>
    );
  }
}
