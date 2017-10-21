export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'GET_LEAGUE_DATA_STARTED':
      console.log('get league data started')
      return Object.assign({}, state, {
        leagueData: null
      });
    case 'GET_LEAGUE_DATA_SUCCEEDED':
      console.log('LEAGUE DATA! :', action.payload)
      return Object.assign({}, state, {
        leagueData: action.payload
      });
    case 'GET_LEAGUE_DATA_FAILED':
      return Object.assign({}, state, {
        error: action.error
      });
    default:
      return state;
  }
}
