import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';
import { Text, View, Button, Image } from 'react-native';
import { Constants } from 'expo';
import { Icon } from 'react-native-elements';
import ScoringContainer from './scoringTab/ScoringContainer';
import League from './leagueTab/League';
import Results from './resultsTab/Results';
import AdminStack from './adminTab/AdminStack';
import { getLeagueData } from '../actions/applicationActions';
import { getCurrentRoundData } from '../actions/getCurrentRoundDataActions';
import HoleNavigator from './scoringTab/HoleNavigator';
import io from 'socket.io-client';

class Application extends Component {
<<<<<<< HEAD
  constructor(props){
    super(props);
    this.state={
      isAdmin: (this.props.id === this.props.id)
    }
  }
=======
  constructor(props) {
    super(props)
    this.state = {

    }
    

    this.socket = io('http://ec2-54-165-58-14.compute-1.amazonaws.com:3000');
    this.socket.on('connect', () => {
      console.log('connection established');
      //this.props.onGetCurrentRoundData(playerId, roundId)
    })
  }
  
>>>>>>> socket updating round object, increment/decrement score re-rendering page, buttons arent changing value
  componentWillMount() {
    this.props.onGetLeagueData(this.props.id)
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentRoundId) {
      let payload = {
        id: nextProps.currentRoundId
      }
      this.socket.emit('test', payload)
    }

    this.socket.on('test', (payload) => {
      if (payload.id === nextProps.currentRoundId) {
        alert('GAME STARTED')
        console.log('PAYLOAD DOT BODY: ', payload.body)
        this.props.onGetCurrentRound(payload.body, this.props.id)
      }
    })
  }

  render() {
    console.log('###########', this.props.leagueData)
    if (this.state.isAdmin){
      return (<AdminView />);
    } else {
      return (<NotAdminView />)
    }
  }
}

const Tab = TabNavigator({
  AdminStack: {
    screen: AdminStack,
    navigationOptions: {
      tabBarLabel: 'Admin',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="person" color={tintColor} />
      ),
    }
  },
  League: {
    screen: League,
    navigationOptions: {
      tabBarLabel: 'League',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="stars" color={tintColor} />
      ),
    }
  },
  ScoringContainer: {
    screen: ScoringContainer,
    navigationOptions: {
      tabBarLabel: 'Scoring',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="create" color={tintColor} />
      ),
    }
  },
  Results: {
    screen: Results,
    navigationOptions: {
      tabBarLabel: 'Results',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-trophy" type="ionicon" color={tintColor} />
      ),
    }
  }
}, {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: "red",
    showIcon: true,
    showLabel: true,
    style: {
      height: 50
    }
  },
  navigationOptions: {
    lazy: true,
    headerLeft: (<Icon name="menu" color='#fff' />),
    headerTitle: 'DISC GOLF LEAGUE MANAGER',
    headerTitleStyle: {
      color: '#fff',
    },
    headerStyle: {
      backgroundColor: "#2196f3",
      height: 50,
      paddingLeft: 15
    }
  }
});

const adminTab = TabNavigator({
  League: {
    screen: League,
    navigationOptions: {
      tabBarLabel: 'League',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="stars" color={tintColor} />
      ),
    }
  },
  ScoringContainer: {
    screen: ScoringContainer,
    navigationOptions: {
      tabBarLabel: 'Scoring',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="create" color={tintColor} />
      ),
    }
  },
  Results: {
    screen: Results,
    navigationOptions: {
      tabBarLabel: 'Results',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-trophy" type="ionicon" color={tintColor} />
      ),
    }
  }
}, {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: "red",
    showIcon: true,
    showLabel: true,
    style: {
      height: 50
    }
  },
  navigationOptions: {
    lazy: true,
    headerLeft: (<Icon name="menu" color='#fff' />),
    headerTitle: 'DISC GOLF LEAGUE MANAGER',
    headerTitleStyle: {
      color: '#fff',
    },
    headerStyle: {
      backgroundColor: "#2196f3",
      height: 50,
      paddingLeft: 15
    }
  }
});

const NotAdminView = StackNavigator({
  Home: { screen: adminTab },
  AdminStack: {
    screen: AdminStack
  }
})


const AdminView = StackNavigator({
  Home: { screen: Tab },
  AdminStack: {
    screen: AdminStack
  }
})


const mapStateToProps = (state, ownProps) => {
	return {
    token: state.auth.token,
<<<<<<< HEAD
    error: state.applicationReducer.error,
    id: state.auth.id,
    leagueData: state.applicationReducer.leagueData,
=======
    //error: state.applicationReducer.error,
    id: state.auth.id,
    currentRoundId: state.applicationReducer.currentRoundId,
>>>>>>> socket updating round object, increment/decrement score re-rendering page, buttons arent changing value
	}
}

const mapDispatchToProps = dispatch => {
  return {
    onGetLeagueData: (id) => {
      dispatch(getLeagueData(id));
    },
    onGetCurrentRound: (currentRoundObject, playedId) => {
      dispatch(getCurrentRoundData(currentRoundObject, playedId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Application);
