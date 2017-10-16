const defaultState = {
  isLoggedIn: false,
  username: '',
  password: ''
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state, {
        isLoggedIn: true,
        user: action.payload
      });
    case 'LOGOUT':
      return Object.assign({}, state, {
        isLoggedIn: false,
        username: '',
        password: ''
      });
    default:
      return state;
  }
}


// axios.post('http://ec2-54-165-58-14.compute-1.amazonaws.com:3000/api/addPlayer', {
//   firstName: 'Fred',
//   lastName: 'Flintstone'
// })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (response) {
//     console.log(response);
//   });