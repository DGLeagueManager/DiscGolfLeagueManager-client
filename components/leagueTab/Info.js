import React, { Component } from "react";
import { ScrollView, Text, Image, StyleSheet } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import { palette } from '../../colorPalette';
import { Icon } from 'react-native-elements';

export default class Info extends Component {
  render() {
    return (
      <ScrollView style={{backgroundColor: palette.background}}>
        <Card
          containerStyle={{backgroundColor: palette.secondary, borderColor: '#fff'}}
          title='AUSTIN DISC GOLF CLUB'
          image={{uri: 'http://eagleoutside.com/wp-content/uploads/2015/06/fairgrounds-disc-golf-course.jpg'}}>
          <Text style={{ marginBottom: 10 }}>
            Welcome to the Austin Disc Golf Club.  Any information or changes will be posted here.  We meet Tuesday nights starting 11/12 at 6 pm, don't be afraid to invite friends!
          </Text>
          <Button
            icon={{ name: 'code' }}
            backgroundColor='#03A9F4'
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title='Course Information Here' />
        </Card>

        <Card
          containerStyle={{ backgroundColor: palette.secondary, borderColor: '#fff' }}
          title='TIME CHANGE THIS COMING WEEK (11/19)'
          titleStyle={{color: 'red'}}
        >
        <Icon
          name='weather-lightning-rainy'
          type='MaterialCommunityIcons'
          color={palette.accent}
        />
        <Text>Due to inclimate weather, we will postpone this Tuesday's game to Wednesday 11/20</Text>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: palette.background
  }
});
