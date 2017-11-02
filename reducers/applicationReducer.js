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
      

      console.log('CURRENT ROUND: ', currentRound)
      return Object.assign({}, state, {
        currentSeason: leagueData.seasons[0],
        leagueData: leagueData,
        leaguePlayers: leagueData.seasons[0].players,
        currentRound: currentRound,
        currentCourse: currentRound.course,
        currentRoundId: currentRound._id,
        renderApplication: true
      });
    case 'GET_LEAGUE_DATA_FAILED':
      console.log('IN GET LEAGUE DATA FAILED: ', action.error)
      return Object.assign({}, state, {
        error: action.error
      });
    default:
      return state;
  }
}
