import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import ScoreKeeperCard from './ScoreKeeperCard';
import { postNewRound, addScoreKeeper } from '../../actions/scoreKeeperSelectionActions';
import { palette } from '../../colorPalette';

class ScoreKeeperSelection extends Component {
  constructor(props) {
    super(props);
    this.socket = io('http://ec2-54-165-58-14.compute-1.amazonaws.com:3000');
    this.handleScoreKeeperSelection = this.handleScoreKeeperSelection.bind(this);
  }

  generatePopulatedCards() {
    const populatedCards = this.props.cards;
    const cards = [];

    Object.keys(populatedCards).forEach((key, index) => {
      const { players } = populatedCards[key];
      const hole = populatedCards[key].startingHole;
      const card = populatedCards[key];
      const scoreKeeperCard = (
        <ScoreKeeperCard
          key={card.startingHole}
          players={players}
          index={index}
          hole={hole}
          handleSelectScoreKeeper={this.handleScoreKeeperSelection}
          card={card}
        />);
      cards.push(scoreKeeperCard);
    });
    return cards;
  }

  handleScoreKeeperSelection(player, card) {
    this.props.onSelectScoreKeeper(player, card);
  }

  handleSubmit() {
    const { newRound } = this.props;
    newRound.id = this.props.currentRound._id;
    newRound.current_season = this.props.currentSeason._id;

    const payload = {
      body: newRound,
      id: newRound.id,
      type: 'START ROUND',
    };

    this.socket.emit('test', payload);
    this.props.onSubmitNewRound(newRound);
  }

  allCardsHaveScorekeepers() {
    let result = true;
    const { cards } = this.props;

    Object.keys(cards).forEach((key) => {
      if (!cards[key].scoreKeeper) {
        result = false;
      }
    });
    return result;
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: palette.background }}>
        {this.generatePopulatedCards().map(card => card)}
        <Button
          backgroundColor={palette.accent2}
          disabled={!this.allCardsHaveScorekeepers()}
          buttonStyle={{
            marginTop: 20,
            marginBottom: 20,
          }}
          title="Start Round!"
          onPress={() => { this.handleSubmit(); }}
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => (
  {
    currentRound: state.applicationReducer.currentRound,
    currentSeason: state.applicationReducer.currentSeason,
    cards: state.newRoundReducer.newRound.cards,
    playersPresent: state.newRoundReducer.newRound.playersPresent,
    newRound: state.newRoundReducer.newRound,
    currentCourse: state.applicationReducer.currentCourse,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onSubmitNewRound: (newRound) => {
      dispatch(postNewRound(newRound));
    },
    onSelectScoreKeeper: (player, card) => {
      dispatch(addScoreKeeper(player, card));
    },
  }
);

ScoreKeeperSelection.propTypes = ({
  cards: PropTypes.object.isRequired,
  onSelectScoreKeeper: PropTypes.func.isRequired,
  newRound: PropTypes.object.isRequired,
  currentRound: PropTypes.object.isRequired,
  currentSeason: PropTypes.object.isRequired,
  onSubmitNewRound: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, mapDispatchToProps)(ScoreKeeperSelection);
