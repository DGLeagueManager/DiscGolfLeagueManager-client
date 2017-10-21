export default function reducer(state = {}, action) {
  console.log('at the reducer', action)
  switch (action.type) {
    case "ADD_PLAYERS_TO_ROUND":
      return Object.assign({}, state, {
        amPlayers: action.payload.amPlayers,
        proPlayers: action.payload.proPlayers
      });
    default:
      return state;
  }
}
