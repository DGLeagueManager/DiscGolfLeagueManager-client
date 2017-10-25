export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'GET_LEAGUE_DATA_STARTED':
      return Object.assign({}, state, {
        leagueData: null,
        currentRound: {completed: null}
      });
    case 'GET_LEAGUE_DATA_SUCCEEDED':
      const leagueData = action.payload.data;
      const currentRound = leagueData.seasons[0].rounds.find( (round) => {
        return round.completed === false;
      })
      return Object.assign({}, state, {
        currentSeason: leagueData.seasons[0],
        leagueData: leagueData,
        leaguePlayers: leagueData.seasons[0].players,
        currentRound: currentRound,
        currentCourse: currentRound.course
      });
    case 'GET_LEAGUE_DATA_FAILED':
      return Object.assign({}, state, {
        error: action.error
      });
    default:
      return state;
  }
}
