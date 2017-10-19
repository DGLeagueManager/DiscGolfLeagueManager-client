import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { Button, Icon, List, ListItem, CheckBox, Header } from 'react-native-elements'; // 0.17.0
import { Constants } from 'expo';
import AdminStack from './AdminStack'
import HoleSelection from './HoleSelection'
import AdminSelectionBoxes from './AdminSelectionBoxes';

import "@expo/vector-icons"; // 5.2.0

export default class AdminRoundConfigStart extends Component {
  constructor(props) {
    super(props);

    this.state={
      checked: false,
      list: [
        {
          name: 'Tristyn Leos',
          avatar_url: 'https://photos.zillowstatic.com/h_g/ISli46xcfvya590000000000.jpg',
          amChecked: false,
          proChecked: false,
          subHeader: ''
        },
        {
          name: 'Pete Givens',
          avatar_url: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/4/005/021/138/35df1b0.jpg",
          amChecked: false,
          proChecked: false,
          subHeader: ''
        },
        {
          name: 'Robert Hunter',
          avatar_url: "http://jscraftcamp.org/img/nophoto.png",
          amChecked: false,
          proChecked: false,
          subHeader: ''
        },
        {
          name: 'A.J. Caporicci',
          avatar_url: "http://www.connallyband.com/uploads/8/5/3/4/85347626/img-8114_1.jpg",
          amChecked: false,
          proChecked: false,
          subHeader: ''
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
    const navigationOptions = {
      title: 'HoleSelection'
    }
    return (
      <View>

      <ScrollView style={{marginTop: 20, paddingTop: 0}}>

        <View style={styles.container}>
        <Text style={styles.header}>Select Participants</Text>
        <View style={{width: '100%'}}>
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
                  label={
                    <AdminSelectionBoxes
                      handleProTap={this.handleProTap}
                      handleAmTap={this.handleAmTap}
                      i={i}
                      amChecked={ele.amChecked}
                      proChecked={ele.proChecked}
                    />
                  }
                  hideChevron

                />

              </View>
              ))
            }
         </List>
         <Button onPress={this.props.navigation.navigate('HoleSelection')}color='black' backgroundColor="#dbdbdb" title='Next'/>
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
    paddingBottom: '20%'
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



