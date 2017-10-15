import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import store from './store';
import MainNav from './components/MainNav';
import AppHeader from './components/AppHeader';

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
        <View>
          <View >
            <AppHeader />
          </View>
          <View>
            <MainNav />
          </View>
        </View>
      </Provider>

    );
  }
}
