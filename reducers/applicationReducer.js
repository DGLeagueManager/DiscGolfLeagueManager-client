export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'GET_LEAGUE_DATA_STARTED':
      return Object.assign({}, state, {
        leagueData: null
      });
    case 'GET_LEAGUE_DATA_SUCCEEDED':
      const currentRound = action.payload.data.seasons[0].rounds.find( (round) => {
        return round.completed === false;
      })
      return Object.assign({}, state, {
        currentSeason: action.payload.data.seasons[0],
        leagueData: action.payload.data,
        leaguePlayers: action.payload.data.seasons[0].players,
        currentRound: currentRound
      });
    case 'GET_LEAGUE_DATA_FAILED':
      return Object.assign({}, state, {
        error: action.error
      });
    default:
      return state;
  }
}
