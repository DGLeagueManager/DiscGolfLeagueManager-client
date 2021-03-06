import React, { Component } from 'react';
import { ScrollView, Text, View, InteractionManager } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { palette } from '../../colorPalette';

export default class Info extends Component {
  constructor(props) {
    super(props);
    this.state = { ready: false };
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({ ready: true });
    });
  }

  render() {
    if (!this.state.ready) {
      return (<View><Text>Loading......</Text></View>);
    }
    return (
      <ScrollView style={{ backgroundColor: palette.background }}>
        <Card
          containerStyle={{ backgroundColor: palette.secondary }}
          title="AUSTIN DISC GOLF CLUB"
          titleStyle={{ color: palette.accent }}
          image={{ uri: 'http://eagleoutside.com/wp-content/uploads/2015/06/fairgrounds-disc-golf-course.jpg' }}
        >
          <Text style={{ marginBottom: 10 }}>
            {'Welcome to the Austin Disc Golf Club. Any information or changes'}
            {'will be posted here. We meet Tuesday nights starting 11/12 at 6'}
            {'pm, don\'t be afraid to invite friends!'}
          </Text>
          <Button
            icon={{ name: 'code' }}
            backgroundColor={palette.accent2}
            title="Course Information Here"
          />
        </Card>

        <Card
          containerStyle={{ backgroundColor: palette.secondary }}
          title="TIME CHANGE THIS COMING WEEK (11/19)"
          titleStyle={{ color: palette.accent }}
        >
          <Icon name="md-rainy" type="ionicon" size={30} color={palette.accent2} />
          <Text>
            {'Due to inclimate weather, we will postpone this Tuesday\'s game to Wednesday 11/20'}
          </Text>
        </Card>
      </ScrollView>);
  }
}
