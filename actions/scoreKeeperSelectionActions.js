import axios from 'axios';

module.exports.postNewRound = (newRound) => {
  return (dispatch) => {
    dispatch({ type: 'POST_NEW_ROUND_STARTED' });

    axios.post('http://ec2-54-165-58-14.compute-1.amazonaws.com:3000/postNewRound', newRound)
      .then((response) => { dispatch({ type: 'POST_NEW_ROUND_SUCCEEDED', payload: response }) })
      .catch(error => dispatch({ type: 'POST_NEW_ROUND_FAILED', error: error }))
  };
}