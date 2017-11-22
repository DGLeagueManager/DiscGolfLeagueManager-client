import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { palette } from '../../colorPalette';

export default class ScoreKeeperCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: null,
    };
  }

  render() {
    return (
      <Card containerStyle={{ borderColor: '#555', backgroundColor: palette.primary }}>
        <Text style={{ flex: 3, color: palette.text, textAlign: 'center' }}>
          Starting Hole:
          <Text style={{ color: palette.accent }}>
            {this.props.hole}
          </Text>
        </Text>

        {this.props.players[0] ?
          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor={this.state.open === 0 ? palette.accent : 'grey'}
            onPress={() => {
              this.setState({ open: 0 });
              this.props.handleSelectScoreKeeper(this.props.players[0], this.props.card);
            }}
            title={`${this.props.players[2].first_name} ${this.props.players[2].last_name}`}
          /> : null}

        {this.props.players[1] ?
          <Button
            raised
            backgroundColor={this.state.open === 1 ? palette.accent : 'grey'}
            onPress={() => {
              this.setState({ open: 1 });
              this.props.handleSelectScoreKeeper(this.props.players[1], this.props.card);
            }}
            title={`${this.props.players[2].first_name} ${this.props.players[2].last_name}`}
          /> : null}

        {this.props.players[2] ?
          <Button
            raised
            backgroundColor={this.state.open === 2 ? palette.accent : 'grey'}
            onPress={() => {
              this.setState({ open: 2 });
              this.props.handleSelectScoreKeeper(this.props.players[2], this.props.card);
            }}
            title={`${this.props.players[2].first_name} ${this.props.players[2].last_name}`}
          /> : null}

        {this.props.players[3] ?
          <Button
            raised
            backgroundColor={this.state.open === 3 ? palette.accent : 'grey'}
            onPress={() => {
              this.setState({ open: 3 });
              this.props.handleSelectScoreKeeper(this.props.players[3], this.props.card);
            }}
            title={`${this.props.players[2].first_name} ${this.props.players[2].last_name}`}
          /> : null}
      </Card>
    );
  }
}

ScoreKeeperCard.propTypes = ({
  hole: PropTypes.number.isRequired,
  players: PropTypes.array.isRequired,
  handleSelectScoreKeeper: PropTypes.func.isRequired,
  card: PropTypes.object.isRequired,
});
