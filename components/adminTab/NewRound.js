import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { createNewRound } from '../../actions/NewRoundActions';
import { palette } from '../../colorPalette';

class NewRound extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          buttonStyle={{padding: 40, backgroundColor: palette.accent}}
          onPress={ () => {
              this.props.createRound(this.props.currentCourse);
              this.props.navigation.navigate('AdminRoundConfigStart')
            }
          }
          raised
          title="New Round"
          textStyle={{fontSize: 30}}
           />
      </View>
    )
  }
}

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