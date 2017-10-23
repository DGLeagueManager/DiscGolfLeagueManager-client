module.exports.addPlayerToCard = (player, cardIndex) => {
  return {
    type: 'ADD_PLAYER_TO_CARD',
    payload: { player: player, cardIndex: cardIndex }
  }
}

module.exports.changeStartingHole = (card, hole) => {
  return {
    type: 'CHANGE_STARTING_HOLE',
    payload: {card: card, newStartingHole: hole}
  }
}
