import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, StyleSheet, View, InteractionManager } from 'react-native';
import { connect } from 'react-redux';
import { List, ListItem, Card } from 'react-native-elements'; // 0.17.0
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
      return (<View><Text>Loading......</Text></View>);
    }

    return (
      <ScrollView style={{ flex: 1, backgroundColor: palette.background }}>
        <Card>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.col}>Weeks Played</Text>
            <Text style={styles.col}>Points</Text>
          </View>
          <View>
            <List containerStyle={{ flex: 1 }}>
              {this.props.leaguePlayers.map(player => (
                <ListItem
                  key={player._id}
                  title={`${player.first_name} ${player.last_name}`}
                  label={
                    <Text style={styles.col}>
                      2
                    </Text>
                  }
                  hideChevron
                />
              ))
              }
            </List>
          </View>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  name: {
    flex: 2,
    fontSize: 14,
    paddingLeft: 20,
  },
  col: {
    flex: 1,
    fontSize: 14,
    justifyContent: 'space-between',
  },
});

const mapStateToProps = state => (
  {
    leaguePlayers: state.applicationReducer.leaguePlayers,
  }
);

Standings.propTypes = ({
  leaguePlayers: PropTypes.array,
});

Standings.defaultProps = ({
  leaguePlayers: [],
});

export default connect(mapStateToProps)(Standings);
