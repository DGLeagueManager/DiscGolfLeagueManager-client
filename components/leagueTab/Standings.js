import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  InteractionManager,
} from 'react-native';
import { connect } from 'react-redux';
import { List, ListItem } from 'react-native-elements'; // 0.17.0
import { palette } from '../../colorPalette';

class Standings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ready: false,
    };
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({ ready: true });
    });
  }

  render() {
    if (!this.state.ready) {
      return (
        <View>
          <Text>Loading......</Text>
        </View>
      );
    }

    return (
      <View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: palette.accent2,
            padding: 10,
            position: 'relative',
            top: 0,
            maxHeight: 60,
            marginBottom: -20,
          }}
        >
          <Text style={styles.name}>PLAYER</Text>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={styles.col}>ROUNDS</Text>
            <Text style={styles.col}>POINTS</Text>
          </View>
        </View>
        <ScrollView style={
          {
            backgroundColor: palette.background,
          }
        }
        >
          <List containerStyle={{ flex: 1 }}>
            {/* TODO: This should be pulling from a standings table */}
            {this.props.leaguePlayers.map(player => (
              <ListItem
                key={player._id}
                title={`${player.first_name} ${player.last_name}`}
                label={
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={styles.col}>2</Text>
                    <Text style={styles.col}>500</Text>
                  </View>
                }
                hideChevron
              />
            ))}
          </List>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  name: {
    flex: 1,
    fontSize: 14,
    paddingLeft: 20,
  },
  col: {
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
  },
});

const mapStateToProps = state => (
  {
    leaguePlayers: state.applicationReducer.leaguePlayers,
  }
);

Standings.propTypes = {
  leaguePlayers: PropTypes.array,
};

Standings.defaultProps = {
  leaguePlayers: [],
};

export default connect(mapStateToProps)(Standings);
