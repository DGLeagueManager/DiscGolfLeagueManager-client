const defaultState = {
  // isLoggedIn: false
};

export default function auth(state = defaultState, action) {
  switch (action.type) {
    case 'SIGNUP_STARTED':
      return Object.assign({}, state, {
        isLoggedIn: false,
      });
    case 'SIGNUP_SUCCEEDED':
      return Object.assign({}, state, {
        isLoggedIn: true,
        user: action.payload.data.player,
        id: action.payload.data.player._id,
        token: action.payload.data.token
      });
    case 'SIGNUP_FAILED':
      return Object.assign({}, state, {
        isLoggedIn: false,
        error: action.error
      });

    case 'LOGIN_STARTED':
      return Object.assign({}, state, {
        // isLoggedIn: false,
      });
    case 'LOGIN_SUCCEEDED':
      return Object.assign({}, state, {
        isLoggedIn: true,
        user: action.payload.data.player,
        id: action.payload.data.player._id,
        token: action.payload.data.token
      });
      break;
    case 'LOGIN_FAILED':
      return Object.assign({}, state, {
        isLoggedIn: false,
        error: action.error
      });
    default:
      return state;
  }
}
