import axios from 'axios';

module.exports.getCurrentRoundData = (response, playerId) => {

  console.log('THIS IS THE RESPONSE IN THE ACTION: ', response)
  return {
    type: 'GET_CURRENT_ROUND_SUCCEEDED',
    payload: { response, playerId }
  }

}