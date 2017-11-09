module.exports.postScores = (currentRound) => {
	return {
		type: 'SCORES_POST_SUCCEEDED',
		payload: currentRound
	}
}

module.exports.incrementPlayerScore = (playerId, holeNum) => {
	return {
		type: 'INCREMENT_PLAYER_SCORE',
		payload: { playerId, holeNum }
	}
}

module.exports.decrementPlayerScore = (playerId, holeNum) => {
	return {
		type: 'DECREMENT_PLAYER_SCORE',
		payload: { playerId, holeNum }
	}
}