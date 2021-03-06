import React, { Component } from "react";
import { connect } from "react-redux";
import { TabNavigator, StackNavigator, TabBarBottom } from "react-navigation";
import { Text, View, Button, Image, ActivityIndicator } from "react-native";
import { Constants } from "expo";
import { Icon } from "react-native-elements";
import io from "socket.io-client";
import ScoringContainer from "./scoringTab/ScoringContainer";
import League from "./leagueTab/League";
import AdminStack from "./adminTab/AdminStack";
import { getLeagueData } from "../actions/applicationActions";
import { getCurrentRoundData } from "../actions/getCurrentRoundDataActions";
import HoleNavigator from "./scoringTab/HoleNavigator";
import ResultsNavigator from "./resultsTab/ResultsNavigator";
import { palette } from '../colorPalette';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: true
    };

    this.socket = io("http://ec2-54-165-58-14.compute-1.amazonaws.com:3000");
    this.socket.on("connect", () => {
      console.log("connection established Application");
      //this.props.onGetCurrentRoundData(playerId, roundId)
    });
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.currentRound) {
      this.props.onGetCurrentRound(nextProps.currentRound, this.props.id)
      return true
    } else {
      return false
    }
  }

  componentWillMount() {
    this.props.onGetLeagueData(this.props.id)
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.currentRoundId) {
    //   let payload = {
    //     id: nextProps.currentRoundId
    //   };
    //   this.socket.emit("test", payload);
    // }

    this.socket.on("test", payload => {
      if (
        payload.id === nextProps.currentRoundId &&
        payload.type === "FINISH ROUND CLIENT"
      ) {
        this.props.onGetLeagueData(this.props.id)
      }

      if (
        payload.id === nextProps.currentRoundId &&
        payload.type === "UPDATE SCORE CLIENT"
      ) {
        this.props.onGetCurrentRound(payload.body, this.props.id);
      }

      if (
        payload.id === nextProps.currentRoundId &&
        payload.type === "START ROUND CLIENT"
      ) {
        this.props.onGetCurrentRound(payload.body, this.props.id);
        this.props.onGetLeagueData(this.props.id);
      }
    });
  }

  render() {
    if (this.props.renderApplication && this.state.isAdmin) {
      return <AdminView />;
    } else if (this.props.renderApplication) {
      return <NotAdminView />;
    } else {
      return (
        <View
          style={{backgroundColor: "#292929", flex: 1, alignItems: "center", justifyContent: "center" }}
        >
        <Image source={require("./1299-200.png")} style={{width: 100, height: 100, marginBottom: 50}} />
          <ActivityIndicator size="large" color='#00D6A1' animating />
          <Text style={{color: 'white'}}> Fetching League Data... </Text>
        </View>
      );
    }
  }
}

const Tab = TabNavigator(
  {
    AdminStack: {
      screen: AdminStack,
      navigationOptions: {
        tabBarLabel: "Admin",
        tabBarIcon: ({ tintColor }) => <Icon name="person" color={tintColor} />
      }
    },
    League: {
      screen: League,
      navigationOptions: {
        tabBarLabel: "League",
        tabBarIcon: ({ tintColor }) => <Icon name="stars" color={tintColor} />
      }
    },
    ScoringContainer: {
      screen: ScoringContainer,
      navigationOptions: {
        tabBarLabel: "Scoring",
        tabBarIcon: ({ tintColor }) => <Icon name="create" color={tintColor} />
      }
    },
    Results: {
      screen: ResultsNavigator,
      navigationOptions: {
        tabBarLabel: "Results",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-trophy" type="ionicon" color={tintColor} />
        )
      }
    }
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: palette.accent,
      showIcon: true,
      showLabel: true,
      style: {
        height: 50,
        backgroundColor: palette.primary
      },
      labelStyle: {
        marginBottom: 5
      }
    },
    navigationOptions: {
      lazy: true,
      headerTitle: "DGLM",
      headerTitleStyle: {
        color: "#fff",
        alignSelf: 'center'
      },
      headerStyle: {
        backgroundColor: palette.primary,
        paddingTop: Constants.statusBarHeight
      }
    }
  }
);

const adminTab = TabNavigator(
  {
    League: {
      screen: League,
      navigationOptions: {
        tabBarLabel: "League",
        tabBarIcon: ({ tintColor }) => <Icon name="stars" color={tintColor} />
      }
    },
    ScoringContainer: {
      screen: ScoringContainer,
      navigationOptions: {
        tabBarLabel: "Scoring",
        tabBarIcon: ({ tintColor }) => <Icon name="create" color={tintColor} />
      }
    },
    Results: {
      screen: ResultsNavigator,
      navigationOptions: {
        tabBarLabel: "Results",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-trophy" type="ionicon" color={tintColor} />
        )
      }
    }
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: palette.accent,
      showIcon: true,
      showLabel: true,
      style: {
        height: 50,
        paddingBottom: 10
      },
    },
    navigationOptions: {
      lazy: true,
      headerLeft: <Icon name="menu" color="#fff" />,
      headerTitle: "DISC GOLF LEAGUE MANAGER",
      headerTitleStyle: {
        color: "#fff"
      },
      headerStyle: {
        backgroundColor: palette.primary,
        paddingTop: Constants.statusBarHeight
      }
    }
  }
);

const NotAdminView = StackNavigator({
  Home: { screen: adminTab },
  AdminStack: {
    screen: AdminStack
  }
});

const AdminView = StackNavigator({
  Home: { screen: Tab },
  AdminStack: {
    screen: AdminStack
  }
});

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.auth.token,
    //error: state.applicationReducer.error,
    id: state.auth.id,
    currentRoundId: state.applicationReducer.currentRoundId,
    renderApplication: state.applicationReducer.renderApplication,
    currentRound: state.getCurrentRoundDataReducer.currentRound
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetLeagueData: id => {
      dispatch(getLeagueData(id));
    },
    onGetCurrentRound: (currentRoundObject, playedId) => {
      dispatch(getCurrentRoundData(currentRoundObject, playedId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Application);
