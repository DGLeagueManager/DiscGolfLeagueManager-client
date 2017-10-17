import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { Button, Icon, List, ListItem, CheckBox, Header, Grid, Col, Divider } from 'react-native-elements'; // 0.17.0
import { Constants } from 'expo';
import ScoreCounter from './ScoreCounter';
import { postScores } from '../../actions/scoreCounterActions';
import list from './dummyData';

import "@expo/vector-icons"; // 5.2.0

class Scoring extends Component {
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
      card: list
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

  addScores(e) {
    console.log(this.props)
    this.setState({ isOpen: !this.state.isOpen })
    let scores = {
      hole: 4,
      player_score: [{1:2}, {2:3}, {3:3}, {4:8}]
    } 
    this.props.onPostScores(scores);
    e.preventDefault();
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
              this.state.card.map((ele, i) => (
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
                   <ScoreCounter  isOpen={this.state.isOpen} score={ele.score}/>
                  }
                  hideChevron

                />

              </View>
              ))
            }
         </List>
        {this.state.isOpen ?  
          <Button onPress={ (e)=>{ this.addScores(e) } } color='black' backgroundColor="#dbdbdb"  title="Submit"/> 
        : 
          <Button onPress={ ()=>{ this.setState({ isOpen: !this.state.isOpen }) } } color='white' backgroundColor="black"  title="Update"/>
        }
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

const mapStateToProps = (state, ownProps) => {
  return {
    scores: state.scoreCounterReducer.scores
  };
}


const mapDispatchToProps = (dispatch) => {
  return {
    onPostScores: (scores) => { dispatch(postScores(scores))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scoring);
