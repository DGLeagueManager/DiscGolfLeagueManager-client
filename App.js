import React, { Component } from 'react';
import TestForm from './components/TestForm'
import BottomNav from './components/BottomNav';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }
  render() {
    return (
      <BottomNav />
    );
  }
}
