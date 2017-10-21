import axios from 'axios';

module.exports.getLeagueData = (id) => {
  console.log('get league data started')
  return (dispatch) => {
    dispatch({ type: 'GET_LEAGUE_DATA_STARTED' });

    axios.get('http://ec2-54-165-58-14.compute-1.amazonaws.com:3000/getSeasonsByPlayer/' + id)
      .then((response) => {console.log(response); dispatch({ type: 'GET_LEAGUE_DATA_SUCCEEDED', payload: response }) })
      .catch(error => dispatch({ type: 'GET_LEAGUE_DATA_FAILED', error: error }))
  };
}