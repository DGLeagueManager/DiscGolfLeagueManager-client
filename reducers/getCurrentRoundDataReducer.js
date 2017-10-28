export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'GET_CURRENT_ROUND_STARTED':
      return Object.assign({}, state, {
        currentRound: null
      });
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
        isScoreKeeper: isScoreKeeper
      });
    case 'GET_CURRENT_ROUND_FAILED':
      return Object.assign({}, state, {
        error: action.error
      });    
    case 'INCREMENT_PLAYER_SCORE':
      
      let scores = Object.assign({}, state.currentRound.scores)
      
      for (var key in scores) {
        if (key === action.payload.playerId) {
          scores[key][action.payload.holeNum]++
        }
      }

      return Object.assign({}, state, {
        currentRound: {
          ...state.currentRound,
          scores: scores
        }
      });
    case 'DECREMENT_PLAYER_SCORE':
      
      
      for (var key in scores) {
        if (key === action.payload.playerId) {
          scores[key][action.payload.holeNum]--
        }
      }

      return Object.assign({}, state, {
        currentRound: {
          ...state.currentRound,
          scores: scores
        }
      });
    default:
      return state;
  }
}