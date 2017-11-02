import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { Icon, List, ListItem, Divider } from "react-native-elements";
import { connect } from 'react-redux';

class CurrentRoundResults extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ScrollView style={{ paddingTop: 20 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={styles.name}>
            PLAYER
          </Text>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={styles.col}>START</Text>
            <Text style={styles.col}>THRU</Text>
            <Text style={styles.col}>ROUND</Text>
          </View>
        </View>
        <View>
          <List>
            {Object.keys(this.props.scores).map(key => (
                  <ListItem
                    key={key}
                    title={this.props.scores[key].player_name}
                    label={
                      <View style={{ flex: 1, flexDirection: "row" }}>
                        <Text style={{ flex: 1, marginLeft: 10 }}>
                          {this.props.scores[key].startingHole}
                        </Text>
                        <Text style={styles.col}>
                          {this.props.scores[key].thru}
                        </Text>
                        <Text style={styles.col}>
                          {this.props.scores[key].scoreRelativeToPar}
                        </Text>
                      </View>
                    }
                    hideChevron
                  />
                ))}
          </List>
        </View>
      </ScrollView>
    );
  };
};

const styles = StyleSheet.create({
  name: {
    flex: 1,
    fontSize: 14,
    paddingLeft: 10
  },
  completed: {
    flex: 3,
    fontSize: 14,
    paddingLeft: 10
  },
  col: {
    flex: 1,
    fontSize: 14
  }
});

const mapStateToProps = (state, ownProps) => {
  return {
    scores: state.getCurrentRoundDataReducer.currentRound.scores
  }
}

export default connect(mapStateToProps)(CurrentRoundResults);
