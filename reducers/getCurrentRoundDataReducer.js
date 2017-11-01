export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'GET_CURRENT_ROUND_STARTED':
      return state;

    case 'GET_CURRENT_ROUND_SUCCEEDED':
      let playerId = action.payload.playerId;
      let cardsObject = action.payload.response.cards;

    // let myCard = Object.keys(cardObject).find((key) => {
    //   return cardObject[key].players.find((player) => {
    //     return player._id === playerId
    //   });
    // });

      let myCard = null;

      let isScoreKeeper = (myCard.score_keeper === playerId);

      return Object.assign({}, state, {
        currentRoundInProgress: action.payload.response.in_progress,
        currentRound: action.payload.response,
        currentCard: myCard || null,
        isScoreKeeper: isScoreKeeper,
        scores: action.payload.response.scores
      });
    case 'GET_CURRENT_ROUND_FAILED':
      return Object.assign({}, state, {
        error: action.error
      });
    case 'INCREMENT_PLAYER_SCORE':
      const scoresObj = Object.assign({}, state.currentRound.scores)

      for (var key in scoresObj) {
        if (key === action.payload.playerId) {
          if (scoresObj[key][action.payload.holeNum].score === null) {
            scoresObj[key][action.payload.holeNum].score = scoresObj[key][action.payload.holeNum].par;
          }
          scoresObj[key][action.payload.holeNum].score++;
          scoresObj[key][action.payload.holeNum].scoreRelativeToPar = scoresObj[key][action.payload.holeNum].score - scoresObj[key][action.payload.holeNum].par;
        }
      }

      return Object.assign({}, state, {
        currentRound: {
          ...state.currentRound,
          scores: scoresObj
        }
      });
      case 'DECREMENT_PLAYER_SCORE':
      scoresObj = Object.assign({}, state.currentRound.scores)

      for (var key in scoresObj) {
        if (key === action.payload.playerId) {
          if (scoresObj[key][action.payload.holeNum].score === null) {
            scoresObj[key][action.payload.holeNum].score = scoresObj[key][action.payload.holeNum].par;
          }
          scoresObj[key][action.payload.holeNum].score--;
          scoresObj[key][action.payload.holeNum].scoreRelativeToPar = scoresObj[key][action.payload.holeNum].score - scoresObj[key][action.payload.holeNum].par;
        }
      }

      return Object.assign({}, state, {
        currentRound: {
          ...state.currentRound,
          scores: scoresObj
        }
      });
    case "SCORES_GETTING_POSTED":
      console.log('Scores Getting Posted: *******', action.payload)
      return Object.assign({}, state, {});
    case "SCORES_POST_SUCCEEDED":
      return Object.assign({}, state, {
        currentRound: action.payload
      });
    case "SCORES_POST_FAILED":
      return Object.assign({}, state, {
        error: action.error
      });
    default:
      return state;
  }
}
