import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { createNewRound } from '../../actions/NewRoundActions';

class NewRound extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  
  render() {
    return (
      <View style={{marginTop: 50}}>
        <Button
          buttonStyle={styles.button}
          onPress={ () => {
              this.props.createRound(this.props.currentCourse);
              this.props.navigation.navigate('AdminRoundConfigStart')
            }
          }
          raised={false}
          title="New Round"
          textStyle={{fontSize: 30}}
           />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    paddingTop: 75,
    paddingBottom: 75,
    width: '80%',
    margin: '10%'
  },
});

const mapStateToProps = (state, ownProps) => {
  return {
    currentCourse: state.applicationReducer.currentCourse
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createRound: (course) => {
      dispatch(createNewRound(course))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewRound);