import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { Button, Icon, List, ListItem, CheckBox, Header, Divider } from 'react-native-elements'; // 0.17.0
import { Constants } from 'expo';

import "@expo/vector-icons"; // 5.2.0

export default class Result extends Component {
  constructor(props) {
    super(props);

    this.state={
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

  render() {
    return (
      <ScrollView style={{marginTop: 20, paddingTop: 0}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.header}>Name</Text>
          <Text style={styles.col} style={{flex: 2}}>Weeks Played</Text>
          <Text style={styles.col} style={{flex: 1}}>Points</Text>
        </View>
        <View style={{width: '100%'}}>
        <Divider style={styles.divider} />
          <List style={styles.listStyle}>
            {
              this.state.list.map((ele, i) => (
                <View key={'view'+i} style={{height: 40, flex: 1, flexDirection: 'row'}}>
                  <Text key={'text1' + i} style={{marginLeft: 15}}>{(i+1)}</Text>
                  <Text key={'text2' + i} style={{marginLeft: 20,fontSize: 15, flex: 3}}>{ele.name}</Text>
                  <Text key={'text3' + i} style={{flex: 2}}>{ele.weeksPlayed}</Text>
                  <Text key={'text4' + i} style={{flex: 1}}>{ele.points}</Text>
                </View>
              ))
            }
         </List>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    margin: 'auto',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    paddingBottom: '20%',
  },
  divider: {
    backgroundColor: 'silver'
  },
  col: {
    fontSize: 20
  },
  header: {
    marginLeft: 43,
    fontWeight: 'bold',
    fontSize: 20,
    flex: 2
  },
  listStyle: {
    marginBottom: 20
  },
  colText: {
    fontSize: 15
  },
});
