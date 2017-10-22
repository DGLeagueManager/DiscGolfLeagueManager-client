export default function reducer(state = {}, action) {
  switch (action.type) {
    case "ADD_PLAYER_TO_CARD":
      let i = action.payload.cardIndex;
      return Object.assign({}, state, {
        // TODO: debug the below error
        // cards[i].players: [...cards[i].players, action.payload.player]
      });
    default:
      return state;
  }
}
