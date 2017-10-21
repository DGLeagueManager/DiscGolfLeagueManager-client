export default function reducer(state = {}, action) {
  switch (action.type) {
    case "ADD_PLAYERS_TO_ROUND":
      return Object.assign({}, state, {
        amPlayers: action.payload.amPlayers,
        proPlayers: action.payload.proPlayers,
        cards: action.payload.cards
      });
    default:
      return state;
  }
}
