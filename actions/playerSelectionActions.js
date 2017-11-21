module.exports.addPlayerToCard = (player, card) => {
	return {
		type: 'ADD_PLAYER_TO_CARD',
		payload: { 
			player: player, 
			card: card 
		}
	}
}

module.exports.changeStartingHole = (cardIndex, hole) => {
	return {
		type: 'CHANGE_STARTING_HOLE',
		payload: {
			cardIndex: cardIndex, 
			newStartingHole: hole
		}
	}
}
