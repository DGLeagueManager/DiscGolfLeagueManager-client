import axios from 'axios';

module.exports.getCurrentRoundData = (response, playerId) => {
  //TODO fix roundId
  // return (dispatch) => {
  //   dispatch({ type: 'GET_CURRENT_ROUND_STARTED' });

  //   axios.get('http://ec2-54-165-58-14.compute-1.amazonaws.com:3000/getCurrentRoundData/' + roundId + '/' + playerId)
  //     .then((response) => dispatch({ type: 'GET_CURRENT_ROUND_SUCCEEDED', payload: { response, playerId  }}))
  //     .catch(error => dispatch({ type: 'GET_CURRENT_ROUND_FAILED', error: error }))
  // };
  console.log('THIS IS THE RESPONSE IN THE ACTION: ', response)
  return {
    type: 'GET_CURRENT_ROUND_SUCCEEDED',
    payload: { response, playerId }
  }

}