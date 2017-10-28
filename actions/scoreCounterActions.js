import axios from 'axios';

module.exports.postScores = (currentRound) => {

	return (dispatch) => {
		dispatch({ type: 'SCORES_GETTING_POSTED'});

		axios.post('http://ec2-54-165-58-14.compute-1.amazonaws.com:3000/updateScores',  currentRound)
			.then(response => dispatch({ type: 'SCORES_POST_SUCCEEDED', payload: response }))
			.catch(error => dispatch({ type: 'SCORES_POST_FAILED', error: error }))    
	};
}

module.exports.incrementPlayerScore = (playerId, holeNum) => {
	return {
		type: 'INCREMENT_PLAYER_SCORE',
		payload: { playerId, holeNum }
	};
};

module.exports.decrementPlayerScore = (playerId, holeNum) => {
	return {
		type: 'DECREMENT_PLAYER_SCORE',
		payload: { playerId, holeNum }
	};
};