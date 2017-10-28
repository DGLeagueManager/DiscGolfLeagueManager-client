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
import { getLeagueData } from '../actions/applicationActions'
import HoleNavigator from './scoringTab/HoleNavigator';

class Application extends Component {
  constructor(props){
    super(props);
    this.state={
      isAdmin: (this.props.id === this.props.id)
    }
  }
  componentWillMount() {
    this.props.onGetLeagueData(this.props.id)
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
    error: state.applicationReducer.error,
    id: state.auth.id,
    leagueData: state.applicationReducer.leagueData,
	}
}

const mapDispatchToProps = dispatch => {
  return {
    onGetLeagueData: (id) => {
      dispatch(getLeagueData(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Application);
