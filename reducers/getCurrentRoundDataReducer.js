export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'GET_CURRENT_ROUND_STARTED':
      return Object.assign({}, state, {
        currentRound: null
      });
    case 'GET_CURRENT_ROUND_SUCCEEDED':
      console.log('current round info in reducer: ', action.payload)
      return Object.assign({}, state, {
        currentRound: action.payload.data
      });
    case 'GET_CURRENT_ROUND_FAILED':
      return Object.assign({}, state, {
        error: action.error
      });
    default:
      return state;
  }
}
