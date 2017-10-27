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

      console.log('current round: ', action.payload.response.data, 'current card: ', myCard, 'am I scorekeeper? ', isScoreKeeper)

      return Object.assign({}, state, {
        currentRound: action.payload.response.data,
        currentCard: myCard,
        isScoreKeeper: isScoreKeeper
      });
    case 'GET_CURRENT_ROUND_FAILED':
      return Object.assign({}, state, {
        error: action.error
      });
    default:
      return state;
  }
}