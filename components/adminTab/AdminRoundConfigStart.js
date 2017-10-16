import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { Button, Icon, List, ListItem, CheckBox, Header } from 'react-native-elements'; // 0.17.0
import { Constants } from "expo";

import "@expo/vector-icons"; // 5.2.0

export default class AdminRoundConfigStart extends Component {
  constructor(props) {
    super(props);

    this.state={
      checked: false
    };

    this.handleAmTap = (i) => {
      list[i].proChecked=false;
      list[i].amChecked = !list[i].amChecked;
      if (list[i].subHeader === 'Amateur') {
        list[i].subHeader = ''
      } else {
        list[i].subHeader = 'Amateur'
      }
      this.setState({checked: !this.state.checked})
    }

    this.handleProTap = (i) => {
      list[i].amChecked=false;
      list[i].proChecked = !list[i].proChecked;
      if (list[i].subHeader === 'Pro') {
        list[i].subHeader = ''
      } else {
        list[i].subHeader = 'Pro'
      }
      this.setState({checked: !this.state.checked})
    }

  }
  render() {
    return (
      <View>

      <ScrollView>

        <View style={styles.container}>
        <Text style={styles.header}>Select Participants</Text>
        <View style={{width: '100%'}}>
          <List style={{marginBottom: 20}}>
            {
              list.map((ele, i) => (
              <View>
                <ListItem
                  roundAvatar
                  avatar={{uri:ele.avatar_url}}
                  key={i}
                  subtitle={ele.subHeader}
                  title={ele.name}
                  rightTitleStyle={styles.listItem}

                  hideChevron

                />
                <CheckBox
                  title='AM'
                  checked={ele.amChecked}
                  onPress={ ()=>{ this.handleAmTap(i) } }
                />
                <CheckBox
                  title='PRO'
                  checked={ele.proChecked}
                  onPress={ ()=>{ this.handleProTap(i) } }
                />
              </View>
              ))
            }
         </List>
         <Button color='black' backgroundColor="#dbdbdb" title='Next'/>
        </View>
        </View>
      </ScrollView>
      </View>
    );
  }
}

const list = [
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

]

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
