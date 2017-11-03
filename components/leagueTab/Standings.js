import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, View, InteractionManager } from 'react-native';
import { Button, Icon, List, ListItem, CheckBox, Header, Divider, Card } from 'react-native-elements'; // 0.17.0
import { Constants } from 'expo';
import { palette } from '../../colorPalette';
import { connect } from 'react-redux';

import "@expo/vector-icons"; // 5.2.0

class Standings extends Component {
  constructor(props) {
    super(props);

    this.state={
      ready: false,
      isOpen: true,
      checked: false,
      holeData: {
        holeNumber: 1,
        par: 3,
        feet: 382,
      },
      list: [
        {
          name: 'Tristyn Leos',
          avatar_url: 'https://photos.zillowstatic.com/h_g/ISli46xcfvya590000000000.jpg',
          weeksPlayed: 4,
          points: 117
        },
        {
          name: 'Pete Givens',
          avatar_url: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/4/005/021/138/35df1b0.jpg",
          weeksPlayed: 5,
          points: 165
        },
        {
          name: 'Robert Hunter',
          avatar_url: "http://jscraftcamp.org/img/nophoto.png",
          weeksPlayed: 5,
          points: 214
        },
        {
          name: 'A.J. Caporicci',
          avatar_url: "http://www.connallyband.com/uploads/8/5/3/4/85347626/img-8114_1.jpg",
          weeksPlayed: 5,
          points: 641
        },
      ]
    }

  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({ ready: true});
    });
  }

  render() {
    if(!this.state.ready) {
      return (<View><Text>Loading......</Text></View>);
    } 
    
    return (
      <ScrollView style={{flex: 1, backgroundColor: palette.background}}>
        <Card>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.header}>Name</Text>
            <Text style={styles.col} style={{flex: 2}}>Weeks Played</Text>
            <Text style={styles.col} style={{flex: 1}}>Points</Text>
          </View>
          <View>
            <List containerStyle={{ flex: 1 }}>
              {this.props.leaguePlayers.map((player, i) => (
                <ListItem
                  key={i}
                  title={player.first_name}
                  label={
                    <Text style={styles.col}>
                      2
                    </Text>
                  }
                  hideChevron
                />
              ))
              }
            </List>
          </View>
          </Card>
        </ScrollView>
      );
    }
  }

  const styles = StyleSheet.create({
    name: {
      flex: 3,
      fontSize: 14,
      paddingLeft: 20
    },
    col: {
      flex: 1,
      fontSize: 14,
      justifyContent: 'space-between'
    }
  });

  const mapStateToProps = (state, ownProps) => {
    return {
      leaguePlayers: state.applicationReducer.leaguePlayers,
    }
  }

  export default connect(mapStateToProps)(Standings);
