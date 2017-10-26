export default function reducer(state = {}, action) {
  switch (action.type) {
    case "POST_NEW_ROUND_STARTED":
      return Object.assign({}, state, {});
    case "POST_NEW_ROUND_SUCCEEDED":
      console.log('POST NEW ROUND SUCCESS RESPONSE: ', action.payload)
      return Object.assign({}, state, {
        currentRoundData: action.payload,
        roundInProgress: action.payload.data.in_progress
      });
    case "POST_NEW_ROUND_FAILED":
      return Object.assign({}, state, {
        error: action.error
      });
    default:
      return state;
  }
}
