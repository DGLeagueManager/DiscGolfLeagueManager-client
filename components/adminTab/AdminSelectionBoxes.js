import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { palette } from '../../colorPalette';

export default class AdminSelectionBoxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amChecked: false,
      proChecked: false,
    };
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <CheckBox
          containerStyle={{ backgroundColor: 'transparent' }}
          title="AM"
          checkedColor={palette.accent}
          checked={this.state.amChecked}
          onPress={() => {
            this.setState({ proChecked: false });
            if (this.state.amChecked) {
              this.props.handleRemovePlayer(this.props.playerId);
              this.setState({ amChecked: !this.state.amChecked });
            } else {
              this.props.handleAmDivisionSelect(this.props.playerId);
              this.setState({ amChecked: !this.state.amChecked });
            }
          }}
        />
        <CheckBox
          containerStyle={{ backgroundColor: 'transparent' }}
          title="PRO"
          checkedColor={palette.accent}
          checked={this.state.proChecked}
          onPress={() => {
            this.setState({ amChecked: false });
            if (this.state.popChecked) {
              this.props.handleRemovePlayer(this.props.playerId);
              this.setState({ proChecked: !this.state.proChecked });
            } else {
              this.props.handleProDivisionSelect(this.props.playerId);
              this.setState({ proChecked: !this.state.proChecked });
            }
          }}
        />
      </View>
    );
  }
}

AdminSelectionBoxes.propTypes = ({
  handleRemovePlayer: PropTypes.func.isRequired,
  playerId: PropTypes.string.isRequired,
  handleAmDivisionSelect: PropTypes.func.isRequired,
  handleProDivisionSelect: PropTypes.func.isRequired,
});
