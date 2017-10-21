const defaultState = {
  // isLoggedIn: false
};

export default function auth(state = defaultState, action) {
  switch (action.type) {

    case 'LOGIN_STARTED':
      console.log('login started')
      return Object.assign({}, state, {
        // isLoggedIn: false,
      });
    case 'LOGIN_SUCCEEDED':
      console.log('login successful');
      console.log('here is payload', action.payload);
      return Object.assign({}, state, {
        isLoggedIn: (true),
        user: action.payload.data.player,
        token: action.payload.data.token
      });
      break;
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
