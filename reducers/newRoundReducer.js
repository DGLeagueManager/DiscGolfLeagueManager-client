export default function reducer(state = {}, action) {
  switch (action.type) {
    case "CREATE_NEW_ROUND":
      console.log("creating new round object in redux store");
      return Object.assign({}, state, {
        newRound: {
          playersPresent: {}
        }
      });
    case "ADD_PLAYER_TO_ROUND":
      let player = action.payload
      return Object.assign({}, state, {
        newRound: {
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
    //TODO: make sure this works lol
      const card = action.payload.card;
      card.players.push(action.payload.player);
      console.log(' in teh reducer, here is card starting hole: ', card.startingHole)
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
