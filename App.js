import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TestForm from './components/TestForm'
import MainNav from './components/MainNav';

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
        <MainNav />
      </Provider>
    );
  }
}
