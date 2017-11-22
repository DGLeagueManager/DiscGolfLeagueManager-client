import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { createNewRound } from '../../actions/NewRoundActions';
import { palette } from '../../colorPalette';

const NewRound = props => (
  <View
    style={{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.background,
  }}
  >
    <Button
      buttonStyle={{
      padding: 40,
      backgroundColor: palette.accent,
    }}
      onPress={() => {
        props.createRound(props.currentCourse);
        props.navigation.navigate('AdminRoundConfigStart');
    }}
      raised
      title="New Round"
      textStyle={{
      fontSize: 30,
    }}
    />
  </View>
);

const mapStateToProps = state => ({ currentCourse: state.applicationReducer.currentCourse });

const mapDispatchToProps = dispatch => (
  {
    createRound: (course) => {
      dispatch(createNewRound(course));
    },
  }
);

NewRound.propTypes = ({
  createRound: PropTypes.func.isRequired,
  currentCourse: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
});

export default connect(mapStateToProps, mapDispatchToProps)(NewRound);
