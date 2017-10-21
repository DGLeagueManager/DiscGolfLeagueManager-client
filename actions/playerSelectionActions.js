module.exports.addPlayerToCard = (player, cardIndex) => {
  return {
    type: 'ADD_PLAYER_TO_CARD',
    payload: { player: player, cardIndex: cardIndex }
  }
}
