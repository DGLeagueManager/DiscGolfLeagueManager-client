import React, { Component } from 'react';
import { Provider } from 'react-redux';
import TestForm from './components/TestForm';
import store from './store.js'

 

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TestForm />
      </Provider>
    );
  }
}
