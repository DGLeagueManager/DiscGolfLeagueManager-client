import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import store from './store';
import Application from './components/Application'
import Secured from './components/Secured';
import AdminRoundConfigStart from './components/adminTab/AdminRoundConfigStart';
import NewRound from './components/NewRound';
import LeagueRoundInProgress from './components/LeagueRoundInProgress';
import Standings from './components/Standings';
import Result from './components/result';
import ScoreKeeperSelection from'./components/ScoreKeeperSelection';
import HoleSelection from './components/HoleSelection'

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
<<<<<<< HEAD
        <Application />
=======
        <HoleSelection />
>>>>>>> 4adb5e4e48ee8d7d32aca292068514a5d591b9c5
      </Provider>
    );
  }

}
