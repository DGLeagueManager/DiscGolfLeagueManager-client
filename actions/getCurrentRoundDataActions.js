import axios from 'axios';

module.exports.getCurrentRoundData = (response, playerId) => {

  return {
    type: 'GET_CURRENT_ROUND_SUCCEEDED',
    payload: { response, playerId }
  }

}