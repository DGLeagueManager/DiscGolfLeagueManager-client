const defaultState = {
  isLoggedIn: false
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'SIGNUP_STARTED':
      console.log('signup started')
      return Object.assign({}, state, {
        isLoggedIn: false,
      });
    case 'SIGNUP_SUCCEEDED':
      return Object.assign({}, state, {
        isLoggedIn: true,
        user: action.payload.player,
        token: action.payload.token
      });
    case 'SIGNUP_FAILED':
      console.log('signup failed')
      return Object.assign({}, state, {
        isLoggedIn: false,
        error: action.error
      });
    case 'LOGIN_STARTED':
      return Object.assign({}, state, {
        isLoggedIn: false,
      });
    case 'LOGIN_SUCCEEDED':
      console.log('login successful')
      return Object.assign({}, state, {
        isLoggedIn: true,
        user: action.payload.player,
        token: action.payload.token
      });
    case 'LOGIN_FAILED':
      console.log('login failed')
      return Object.assign({}, state, {
        isLoggedIn: false,
        error: action.error
      });
    default:
      return state;
  }
}
