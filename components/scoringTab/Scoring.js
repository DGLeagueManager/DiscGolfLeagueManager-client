import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { Button, Icon, List, ListItem, CheckBox, Header, Grid, Col, Divider } from 'react-native-elements'; // 0.17.0
import { Constants } from 'expo';
import ScoreCounter from './ScoreCounter';

import "@expo/vector-icons"; // 5.2.0

export default class Scoring extends Component {
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
          subHeader: '-2',
          score: 1
        },
        {
          name: 'Pete Givens',
          avatar_url: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/4/005/021/138/35df1b0.jpg",
          subHeader: '-2',
          score: 1
        },
        {
          name: 'Robert Hunter',
          avatar_url: "http://jscraftcamp.org/img/nophoto.png",
          subHeader: '-2',
          score: 1
        },
        {
          name: 'A.J. Caporicci',
          avatar_url: "http://www.connallyband.com/uploads/8/5/3/4/85347626/img-8114_1.jpg",
          subHeader: '-2',
          score: 1
        },
      ]
    };

    this.handleAmTap = (index) => {
      this.state.list[index].proChecked=false;
      this.state.list[index].amChecked = !this.state.list[index].amChecked;
      if (this.state.list[index].subHeader === 'Amateur') {
        this.state.list[index].subHeader = ''
      } else {
        this.state.list[index].subHeader = 'Amateur'
      }
      this.setState({checked: !this.state.checked})
    }

    this.handleProTap = (i) => {
      this.state.list[i].amChecked=false;
      this.state.list[i].proChecked = !this.state.list[i].proChecked;
      if (this.state.list[i].subHeader === 'Pro') {
        this.state.list[i].subHeader = ''
      } else {
        this.state.list[i].subHeader = 'Pro'
      }
      this.setState({checked: !this.state.checked})
    }

  }
  render() {
    return (
      <View>

      <ScrollView style={{marginTop: 20, paddingTop: 0}}>

        <View style={styles.container}>
          <Grid>
            <Col size={20} ><Text style={{fontWeight: 'bold', fontSize: 20}}>Hole {this.state.holeData.holeNumber}</Text></Col>
            <Col size={65} ><Text style={{fontSize: 20}}>{this.state.holeData.feet} ft.</Text></Col>
            <Col size={15} ><Text style={{fontSize: 20}}>Par: {this.state.holeData.par}</Text></Col>

          </Grid>
        <View style={{width: '100%'}}>
        <Divider style={{ backgroundColor: 'silver' }} />

          <List style={{marginBottom: 20}}>
            {
              this.state.list.map((ele, i) => (
              <View>
                <ListItem
                  roundAvatar
                  avatar={{uri:ele.avatar_url}}
                  key={i}
                  subtitle={ele.subHeader}
                  title={ele.name}
                  rightTitleStyle={styles.listItem}
                  containerStyle={{height: 70}}
                  label={
                   <ScoreCounter  isOpen={this.state.isOpen} score = {ele.score}/>
                  }
                  hideChevron

                />

              </View>
              ))
            }
         </List>
         {this.state.isOpen ?  <Button onPress={ ()=>{ this.setState({ isOpen: !this.state.isOpen }) } } color='black' backgroundColor="#dbdbdb"  title="Submit"/> : <Button onPress={ ()=>{ this.setState({ isOpen: !this.state.isOpen }) } } color='white' backgroundColor="black"  title="Update"/>}
        </View>
        </View>
      </ScrollView>
      </View>
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
