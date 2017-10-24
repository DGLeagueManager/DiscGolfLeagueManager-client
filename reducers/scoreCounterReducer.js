export default function reducer(state = {}, action) {
  switch (action.type) {
    case "SCORES_GETTING_POSTED":
      return Object.assign({}, state, {});
    case "SCORES_POST_SUCCEEDED":
      return Object.assign({}, state, {
        scores: action.payload
      });
    case "SCORES_POST_FAILED":
      return Object.assign({}, state, {
        error: action.error
      });
    default:
      return state;
  }
}
