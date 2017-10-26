export default function reducer(state = {}, action) {
  switch (action.type) {
    case "CREATE_NEW_ROUND":
      return Object.assign({}, state, {
        newRound: {
          course: action.payload,
          playersPresent: {}
        }
      });
    case "ADD_PLAYER_TO_ROUND":
      let player = action.payload
      return Object.assign({}, state, {
        newRound: {
          ...state.newRound,
          playersPresent: {
            ...state.newRound.playersPresent,
            [player._id]: player
          }
        }
      });
    case "ADD_EMPTY_CARDS_TO_NEW_ROUND":
      return Object.assign({}, state, {
        newRound: {
          ...state.newRound,
          cards: action.payload
        }
      });
    case "ADD_PLAYER_TO_CARD":
      const card = action.payload.card;
      card.players.push(action.payload.player);
      return Object.assign({}, state, {
          newRound: {
            ...state.newRound,
            cards: {
              ...state.newRound.cards,
              [card.startingHole]: card
            }
          }
        })
      case "ADD_SCOREKEEPER_TO_CARD":
        card = action.payload.card
        const playerId = action.payload.player._id

        // add playerId to card object as scorekeeper
        card.scoreKeeper = playerId;

        return Object.assign({}, state, {
          newRound: {
            ...state.newRound,
            cards: {
              ...state.newRound.cards,
              [card.startingHole]: card
            }
          }
        })
    default:
      return state;
  }
}
