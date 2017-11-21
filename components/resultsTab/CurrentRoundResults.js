import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { palette } from '../../colorPalette';

const CurrentRoundResults = (props) => {
  return (
    <ScrollView style={{ backgroundColor: palette.background }}>
      <List containerStyle={{ flex: 1 }}>
        <View style={{
          flex: 1, flexDirection: 'row', backgroundColor: palette.accent2, padding: 10,
          }}
        >
          <Text style={styles.name}>PLAYER</Text>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={styles.col}>START</Text>
            <Text style={styles.col}>THRU</Text>
            <Text style={styles.col}>ROUND</Text>
          </View>
        </View>
        {props.scores
          ? Object.keys(props.scores).map(key => (
            <ListItem
              key={key}
              title={props.scores[key].player_name}
              label={
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <Text style={{ flex: 1, marginLeft: 10 }}>
                    {props.scores[key].startingHole}
                  </Text>
                  <Text style={styles.col}>
                    {props.scores[key].thru}
                  </Text>
                  <Text style={styles.col}>
                    {props.scores[key].scoreRelativeToPar}
                  </Text>
                </View>
              }
              hideChevron
            />
          ))
          : null}
      </List>
    </ScrollView>
  );
};

CurrentRoundResults.propTypes = {
  scores: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  name: {
    flex: 1,
    fontSize: 14,
    paddingLeft: 20,
  },
  col: {
    flex: 1,
    fontSize: 14,
  },
});

const mapStateToProps = (state) => {
  return {
    scores: state.getCurrentRoundDataReducer.currentRound.scores,
  };
};

export default connect(mapStateToProps)(CurrentRoundResults);
