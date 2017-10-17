const defaultState = {
  isLoggedIn: false
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'REQUEST_STARTED':
      console.log('request started')
      return Object.assign({}, state, {
        isLoggedIn: false,
      });
    case 'REQUEST_SUCCEEDED':
      return Object.assign({}, state, {
        isLoggedIn: true,
        user: action.payload.player,
        token: action.payload.token
      });
    case 'REQUEST_FAILED':
      console.log('request failed')
      return Object.assign({}, state, {
        isLoggedIn: false,
        error: action.error
      });
    default:
      return state;
  }
}
