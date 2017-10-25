import axios from 'axios';

module.exports.addScoreKeeper = (player, card) => {
  return {
    type: "ADD_SCOREKEEPER_TO_CARD", 
    payload: { player, card }
  }
}

module.exports.postNewRound = (newRound) => {
  return (dispatch) => {
    dispatch({ type: 'POST_NEW_ROUND_STARTED' });

    axios.post('http://ec2-54-165-58-14.compute-1.amazonaws.com:3000/createRound', newRound)

      .then((response) => { 
        console.log('hi Rob!');
        dispatch({ type: 'POST_NEW_ROUND_SUCCEEDED', payload: response }) 
      })
      .catch(error => dispatch({ type: 'POST_NEW_ROUND_FAILED', error: error }))
  };
}