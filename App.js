import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import store from './store';
import Application from './components/Application'
import Secured from './components/Secured';
import AdminRoundConfigStart from './components/adminTab/AdminRoundConfigStart';
import NewRound from './components/adminTab/NewRound';
import LeagueRoundInProgress from './components/leagueTab/LeagueRoundInProgress';
import Standings from './components/leagueTab/Standings';
import Result from './components/resultsTab/result';
import ScoreKeeperSelection from'./components/scoringTab/ScoreKeeperSelection';
import HoleSelection from './components/adminTab/HoleSelection'

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
