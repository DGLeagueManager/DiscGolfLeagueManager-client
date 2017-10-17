import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { Button, Icon, List, ListItem, CheckBox, Header, Grid, Col, Divider } from 'react-native-elements'; // 0.17.0
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
        feet: 382
      },
      list: [
        {
          name: 'Tristyn Leos',
          avatar_url: 'https://photos.zillowstatic.com/h_g/ISli46xcfvya590000000000.jpg',
          total: 23,
          par: -2,
          holesPlayed: 18
        },
        {
          name: 'Pete Givens',
          avatar_url: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/4/005/021/138/35df1b0.jpg",
          total: 27,
          par: -3,
          holesPlayed: 18
        },
        {
          name: 'Robert Hunter',
          avatar_url: "http://jscraftcamp.org/img/nophoto.png",
          total: 31,
          par: -1,
          holesPlayed: 18
        },
        {
          name: 'A.J. Caporicci',
          avatar_url: "http://www.connallyband.com/uploads/8/5/3/4/85347626/img-8114_1.jpg",
          total: 87,
          par: -4,
          holesPlayed: 18
        },
      ]
    };

  }

  render() {
    return (
      <ScrollView style={{marginTop: 20, paddingTop: 0}}>

        <View style={styles.container}>
        <Grid>
          <Col size={45} ><Text style={{marginLeft: 15, fontWeight: 'bold', fontSize: 20}}>Name</Text></Col>
          <Col size={15} ><Text style={{fontSize: 12}}>Par</Text></Col>
          <Col size={20} ><Text style={{fontSize: 12}}>Total</Text></Col>
          <Col size={20} ><Text style={{fontSize: 12}}>Holes Played</Text></Col>
        </Grid>
        <View style={{width: '100%'}}>
        <Divider style={{ backgroundColor: 'silver' }} />

          <List style={{marginBottom: 20}}>
            {
              this.state.list.map((ele, i) => (
              <View key={'view' + i}>

                <Grid containerStyle={{height: 40}}>
                  <Col size={45} ><Text style={{marginLeft: 20,fontSize: 15}}>{ele.name}</Text></Col>
                  <Col size={20} ><Text style={{fontSize: 15}}>{ele.par}</Text></Col>
                  <Col size={20} ><Text style={{fontSize: 15}}>{ele.total}</Text></Col>
                  <Col size={15} ><Text style={{fontSize: 15}}>{ele.holesPlayed}</Text></Col>
                </Grid>
              </View>
              ))
            }
         </List>
         {this.state.isOpen ?  <Button onPress={ ()=>{ this.setState({ isOpen: !this.state.isOpen }) } } color='black' backgroundColor="#dbdbdb"  title="Submit"/> : <Button onPress={ ()=>{ this.setState({ isOpen: !this.state.isOpen }) } } color='white' backgroundColor="black"  title="Update"/>}
        </View>
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
  paragraph: {
    margin: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  input: {
    width: 250
  },
  formView: {
    backgroundColor: '#fefefe'
  },
  listItem: {
    color: 'black'
  },
  header: {
    fontSize: 20,
    backgroundColor: '#dbdbdb',
    width: '100%',
    textAlign: 'center',
    padding: 10,

  }
});
