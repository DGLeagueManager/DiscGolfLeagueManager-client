export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'GET_CURRENT_ROUND_STARTED':
      return state
    case 'GET_CURRENT_ROUND_SUCCEEDED':
      let playerId = action.payload.playerId;
      let cardArray = action.payload.response.data.cards;

      let myCard = cardArray.find((card) => {
        return card.players.find((player) => {
          return player._id === playerId
        });
      });

      let isScoreKeeper = myCard.score_keeper === playerId;
      
      return Object.assign({}, state, {
        currentRound: action.payload.response.data,
        currentCard: myCard,
        isScoreKeeper: isScoreKeeper,
        scores: action.payload.response.data.scores
      });
    case 'GET_CURRENT_ROUND_FAILED':
      return Object.assign({}, state, {
        error: action.error
      });    
    case 'INCREMENT_PLAYER_SCORE':
      
      let incrementScores = Object.assign({}, state.currentRound.scores)
      
      for (var key in incrementScores) {
        if (key === action.payload.playerId) {
          incrementScores[key][action.payload.holeNum]++
        }
      }

      return Object.assign({}, state, {
        currentRound: {
          ...state.currentRound,
          scores: incrementScores
        }
      });
    case 'DECREMENT_PLAYER_SCORE':
      
      let decrementScores = Object.assign({}, state.currentRound.scores)
      
      for (var key in decrementScores) {
        if (key === action.payload.playerId) {
          decrementScores[key][action.payload.holeNum]--
        }
      }

      return Object.assign({}, state, {
        currentRound: {
          ...state.currentRound,
          scores: decrementScores
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