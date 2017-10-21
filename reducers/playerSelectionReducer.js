export default function reducer(state = {}, action) {
  switch (action.type) {
    case "ADD_PLAYER_TO_CARD":
      let i = action.payload.cardIndex;
      return Object.assign({}, state, {
        cards[i]: action.payload.player
      });
    default:
      return state;
  }
}
