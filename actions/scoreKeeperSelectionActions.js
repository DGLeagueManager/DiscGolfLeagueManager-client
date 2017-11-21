module.exports.addScoreKeeper = (player, card) => {
	return {
		type: 'ADD_SCOREKEEPER_TO_CARD', 
		payload: { player, card }
	}
}

module.exports.postNewRound = () => {
	return {
		type: 'POST_NEW_ROUND_SUCCEEDED'
	}
}