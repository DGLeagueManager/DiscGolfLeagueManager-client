import React, { Component } from 'react';
import { Header } from 'react-native-elements';

export default class AppHeader extends Component {
  render() {
    return (
      <Header 
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{ text: 'DG League Manager' }}
      />
    )
  }
}